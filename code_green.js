function externalDetailsReveal() {
  var checkBox = document.getElementById("source2");
  var guestDetails = document.getElementById("externalDetails");
  var experienceContent = document.getElementById("allExperienceContent");
  var recognitionContent = document.getElementById("recognition");
  var followUpContent = document.getElementById("followUp");
  if (checkBox.checked == true) {
    guestDetails.style.display = "block";
    experienceContent.style.display = "block";
    recognitionContent.style.display = "block";
    followUpContent.style.display = "block";
  } else {
    guestDetails.style.display = "none";
    experienceContent.style.display = "block";
    recognitionContent.style.display = "none";
    followUpContent.style.display = "none";
  }
}

function internalDetailsReveal() {
  var checkBox = document.getElementById("source1");
  var employeePraise = document.getElementById("allEmployeeContent");
  var recognitionContent = document.getElementById("recognition");
  var followUpContent = document.getElementById("followUp");
  if (checkBox.checked == true) {
    employeePraise.style.display = "block";
    recognitionContent.style.display = "block";
    followUpContent.style.display = "block";
  } else {
    employeePraise.style.display = "none";
    recognitionContent.style.display = "none";
    followUpContent.style.display = "none";
  }
}

function internalDetailsReveal1() {
  var checkBox = document.getElementById("source3");
  var guestPraise = document.getElementById("guestPerspectiveContent");
  var recognitionContent = document.getElementById("recognition");
  var followUpContent = document.getElementById("followUp");
  if (checkBox.checked == true) {
    guestPraise.style.display = "block";
    recognitionContent.style.display = "block";
    followUpContent.style.display = "block";
  } else {
    guestPraise.style.display = "none";
    recognitionContent.style.display = "none";
    followUpContent.style.display = "none";
  }
}

function externalDetailsReveal2() {
  var checkBox = document.getElementById("source4");
  var guestDetails = document.getElementById("externalDetails");
  var experienceContent = document.getElementById("guestPerspectiveContent");
  var recognitionContent = document.getElementById("recognition");
  var followUpContent = document.getElementById("followUp");
  if (checkBox.checked == true) {
    guestDetails.style.display = "block";
    experienceContent.style.display = "block";
    recognitionContent.style.display = "block";
    followUpContent.style.display = "block";
  } else {
    guestDetails.style.display = "none";
    experienceContent.style.display = "block";
    recognitionContent.style.display = "none";
    followUpContent.style.display = "none";
  }
}

function generalPraiseReveal() {
  var checkBox = document.getElementById("target2");
  var generalPraise = document.getElementById("whatWasGreat");
  if (checkBox.checked == true) {
    generalPraise.style.display = "block";
  } else {
    generalPraise.style.display = "none";
  }
}

function specificPraiseReveal() {
  var checkBox = document.getElementById("target1");
  var specificPraise = document.getElementById("specificPraise");
  if (checkBox.checked == true) {
    specificPraise.style.display = "block";
  } else {
    specificPraise.style.display = "none";
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

function specificIncidentReveal() {
  var checkBox = document.getElementById("praiseType1");
  var incidentDetails = document.getElementById("specificEmployeeWhatWasGreat");
  if (checkBox.checked == true) {
    incidentDetails.style.display = "block";
  } else {
    incidentDetails.style.display = "none";
  }
}

function consistentGreatnessReveal() {
  var checkBox = document.getElementById("praiseType2");
  var greatnessDetails = document.getElementById("whatIsGreat");
  var recognitionContent = document.getElementById("recognition");
  var followUpContent = document.getElementById("followUp");
  if (checkBox.checked == true) {
    greatnessDetails.style.display = "block";
    recognitionContent.style.display = "block";
    followUpContent.style.display = "block";
  } else {
    greatnessDetails.style.display = "none";
    recognitionContent.style.display = "none";
    followUpContent.style.display = "none";
  }
}

function indicatorEcstaticReveal() {
  var x = document.getElementById("ecstaticInd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function indicatorExcitedReveal() {
  var x = document.getElementById("excitedInd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function indicatorHappyReveal() {
  var x = document.getElementById("happyInd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function indicatorPleasedReveal() {
  var x = document.getElementById("pleasedInd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
