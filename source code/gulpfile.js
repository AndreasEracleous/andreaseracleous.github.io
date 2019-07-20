var config = require('./gulpconfig.json');
// development mode?
var devBuild = (process.env.NODE_ENV !== 'production');
var gulp = require('gulp');
var shell = require('gulp-shell');

var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var cloudflare = require('gulp-cloudflare');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var minifyCss = require('gulp-minify-css');

var uglify = require('gulp-uglify');
var newer = require('gulp-newer');
var imagemin = require("gulp-imagemin");
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminPngquant = require('imagemin-pngquant');

//var pngquant = require('imagemin-pngquant');
//var jpegtran = require('imagemin-jpegtran');
//var gifsicle = require('imagemin-gifsicle');
var replace = require('gulp-replace');
var fs = require('fs');
var download = require('gulp-download');
var clean = require('gulp-clean');
// folders
var folder = {
    src: 'app/_site/',
    //build: 'dist/_site'
};
var app = 'app/';
var dist = 'dist/';

var config_stylesheets = [
    'app/_site/assets/css/svg-with-js.min.css',
    'app/_site/assets/css/prism.css'
];

var config_scripts = [
    'app/_site/assets/js/fontfaceobserver.js',
    'app/_site/assets/js/main.js'
];


// image processing
gulp.task('images', function() {
  var out = folder.src + 'assets/img';
  return gulp.src([app+'_site/**/*.jpg', app+'_site/**/*.jpeg', app+'_site/**/*.gif', app+'_site/**/*.png'])
    .pipe(newer(out))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imageminJpegRecompress({
            progressive: true,
            max: 80,
            min: 70,
        }),
        imageminPngquant({quality: '75-85'}),
        imagemin.svgo({plugins: [{removeViewBox: false}]})
    ]))
    .pipe(gulp.dest(out));
});

gulp.task('jekyll', function() {
    return gulp.src('index.html', { read: false })
        .pipe(shell([
            'jekyll build'
        ]));
});

gulp.task('minifyCSS', function() {
  return gulp.src([
    'app/_site/assets/css/svg-with-js.min.css',
    'app/_site/assets/css/prism.css',
    'app/_site/assets/css/bootstrap.min.css',
    'app/_site/assets/css/main.css'
    ])
    .pipe(minifyCss({compatibility: "ie8"}))
    .pipe(gulp.dest(app+'_site/assets/css/'));
});

gulp.task('criticalCSS', function() {
    return gulp.src(app+'_site/**/*.html')
        .pipe(replace("<!--critical-->", function(){
            var style = fs.readFileSync(app+'_site/assets/css/main.css', 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
        .pipe(replace('<!--email.js-->', function(s) {
            var script = fs.readFileSync(app+'_site/assets/js/email.js', 'utf8');
            return '<script>\n' + script + '\n</script>';
        }))
        .pipe(gulp.dest(app+'_site/'));
});

gulp.task('buildCSS', function() {
  return gulp.src(config_stylesheets)
    .pipe(minifyCss({compatibility: "ie8"}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest(app+'_site/assets/css/'));
});
gulp.task('buildJS', function () {
    return gulp.src(config_scripts)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(app+'_site/assets/js/'));
});
// HTML processing
gulp.task('html', ['jekyll', 'images', 'minifyCSS', 'criticalCSS', 'buildCSS', 'buildJS'], function() {
    return gulp.src(folder.src + '**/*.html')
        .pipe(minifyHTML({quoteCharacter: '"', keepClosingSlash: true}))
        .pipe(gulp.dest(folder.src));

});

//gulp.task('buildDev', ['images']);




/*
gulp.task('default', function () {
    return gulp.src(app+'_site/', {read: false})
        .pipe(clean());
});
*/
gulp.task('optimize-images', function () {
    return gulp.src([app+'_site/**/*.jpg', app+'_site/**/*.jpeg', app+'_site/**/*.gif', app+'_site/**/*.png'])
        .pipe(imagemin({
            progressive: false,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(), jpegtran(), gifsicle()]
        }))
        .pipe(gulp.dest(app+'_site/'));
});
gulp.task('optimize-css', function() {
   return gulp.src(app+'_site/assets/css/main.css')
       .pipe(autoprefixer())
       .pipe(uncss({
           html: [app+'_site/**/*.html'],
           ignore: []
       }))
       .pipe(minifyCss({keepBreaks: false}))
       .pipe(gulp.dest(app+'_site/assets/css/'));
});

gulp.task('optimize-html', function() {
    return gulp.src(app+'_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(replace(/<link href=\"\/assets\/css\/critical.css\"[^>]*>/, function(s) {
            var style = fs.readFileSync(app+'_site/assets/css/svg-with-js.min.css', 'utf8');
                style += fs.readFileSync(app+'_site/assets/css/prism.css', 'utf8');
                style += fs.readFileSync(app+'_site/assets/css/main.css', 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
        .pipe(replace('<script src="/assets/js/email.js"></script>', function(s) {
            var script = fs.readFileSync(app+'_site/assets/js/email.js', 'utf8');
            return '<script>\n' + script + '\n</script>';
        }))
        .pipe(gulp.dest(app+'_site/'));
});

gulp.task('fetch-newest-analytics', function() {
    return download('https://www.google-analytics.com/analytics.js')
        .pipe(gulp.dest(app+'assets/js/'));
});
gulp.task('rsync-files', function() {
    return gulp.src('index.html', { read: false })
        .pipe(shell([
            'cd _site && rsync -az --delete . ' + config.remoteServer + ':' + config.remotePath
        ]));
});
gulp.task('purge-cache', function() {
    var options = {
        token: config.cloudflareToken,
        email: config.cloudflareEmail,
        domain: config.cloudflareDomain
    };
 
    cloudflare(options);
});

gulp.task('raw-deploy', function(callback) {
    runSequence(
        'jekyll',
        'rsync-files',
        'purge-cache',
        callback
    );
});

gulp.task('dry-run', function(callback) {
    runSequence(
        //'fetch-newest-analytics',
        //'default',
        'jekyll',
        'optimize-images',
        'optimize-css',
        'optimize-html',
        callback
    );
});
gulp.task('deploy', function(callback) {
    runSequence(
        'fetch-newest-analytics',
        'jekyll',
        'optimize-images',
        'optimize-css',
        'optimize-html',
        'rsync-files',
        'purge-cache',
        callback
    );
});

