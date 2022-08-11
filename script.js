/* .js files add interaction to your website */
var factList = [
  "More than 38.3 million people in the US have lived in food-insecure households",
  "According to a USDA survey representing 5.1 million households nationwide, 46% of respondents reported losing weight because they couldn't afford food",
  "The number of households with children experiencing food insecurity increased from 13.6% to 15% in 2020",
  "More than 5 million seniors face food insecurity",
  "People between the ages of 25-39 have the highest rates of food insecurity",
  "Senior women are more food insecure than senior men with Feeding America reporting that 60.1% of food-insecure seniors are women",
  "SNAP (food stamp) recipients recieve an average of $121 per month",
  "The rate of food insecurity among college students is between 20% to more than 50%"
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if(count == factList.length) {
    count = 0;
  }
}
