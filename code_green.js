function externalDetailsReveal() {
  var checkBox = document.getElementById("source2");
  var guestDetails = document.getElementById("externalDetails");
  if (checkBox.checked == true) {
    guestDetails.style.display = "block";
  } else {
    guestDetails.style.display = "none";
  }
}

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
