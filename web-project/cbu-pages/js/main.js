function copyTextToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("afflink");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");
}