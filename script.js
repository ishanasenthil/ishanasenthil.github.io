/* .js files add interaction to your website */

var factList = [ /* Facts */
  "One animal is abused every minute", /*0*/
  "Annually, over 10 million animals in the US are abused to death", /*1*/
  "97% of animal cruelty cases come from farms, where most of these creatures die", /*2*/
  "Laboratory testing uses 115 million animals in experiments every year", /*3*/
  "Dogs comprise 65% of all abused animals", /*4*/
  "250,000 animals are hoarded each year", /*5*/
  "Over 2 million pups are bred for money and live in a disturbing environment that spreads disease and death", /*6*/
  "US circuses have abused and killed 126 big cats since 1990", /*7*/
  "Fishing gear kills or injures over 650,000 marine mammals annually", /*8*/
];

var fact = document.getElementById("fact"); /* get fact paragraph */
var factBtn = document.getElementById("factBtn"); /* get fact button */
var count = 0;

if (factBtn) { /* click fact button */
  factBtn.addEventListener("click", displayFact);
}

function displayFact() { /* display new fact after button is clicked */
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0; /* reset count variable */
  }
}
