// What to do when 'hein' button is clicked
var heinButton = document.getElementById("hein");
heinButton.onclick = heinReaction;
function heinReaction(){
	// display the div containing the translation
	document.getElementById("translation-wrap").style.display = "block";
  // hide the 'hein' button
	document.getElementById("hein").style.display = "none";
  // display the 'ach so' button
	document.getElementById("achso").style.display = "block";
  // display the 'adjuge' button
  document.getElementById("adjuge").style.display = "block";
  // display the 'okay' button
  document.getElementById("okay").style.display = "block";
};

// What to do when 'achso' is clicked
var achsoButton = document.getElementById("achso");
achsoButton.onclick = achsoReaction;
function achsoReaction(){
	// hide the div containing the translation
	document.getElementById("translation-wrap").style.display = "none";
  // hide the 'achso' button
	document.getElementById("achso").style.display = "none";
  // show the 'hein' button
	document.getElementById("hein").style.display = "block";
};

// What to do when 'okay' button is clicked
var okayButton = document.getElementById("okay");
okayButton.onclick = okayReaction;
function okayReaction(){
	// show t-shirt with pink text
	document.getElementById("t-shirt").src="t-shirt-text-rosa.png";
  // hide the 'okay' button
	document.getElementById("okay").style.display = "none";
  // show the 'je' button
	document.getElementById("je").style.display = "block";
};

// What to do when 'je' button is clicked
var jeButton = document.getElementById("je");
jeButton.onclick = jeReaction;
function jeReaction(){
	// show pink t-shirt
	document.getElementById("t-shirt").src="t-shirt-rosa.png";
  // hide the 'je' button
	document.getElementById("je").style.display = "none";
  // show the 'horreur' button
	document.getElementById("horreur").style.display = "block";
};

// What to do when 'horreur' is clicked
var horreurButton = document.getElementById("horreur");
horreurButton.onclick = horreurReaction;
function horreurReaction(){
	// show black t-shirt
	document.getElementById("t-shirt").src="t-shirt-schwarz.png";
  // hide the 'horreur' button
	document.getElementById("horreur").style.display = "none";
};

// What to do when 'adjugé' is clicked
var adjugeButton = document.getElementById("adjuge");
adjugeButton.onclick = adjugeReaction;
function adjugeReaction(){
  windowObjectReference = window.open("https://www.spreadshirt.com/design-your-own-t-shirt?productType=812",
   "Spreadshirts", "width=420,height=420,resizable,scrollbars=yes,status=1");
};
