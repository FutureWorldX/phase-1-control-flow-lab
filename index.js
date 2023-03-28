function scuberGreetingForFeet(scuberLength){
  // Write your code here!
  
  //using the information from README.md and testindex.js
  //Everything I want my function to do I put inside these curly braces

  //this is where we can use conditionals given our argument, scuberLength
  //don't forget to return whatever the result is!

  let result;
  if (scuberLength < 0){
    result = "Length cannot be less than 0.";
  }
  if (scuberLength < 400) {
    result = "This one is on me!";
  }
  else if (scuberLength >= 400 && scuberLength <= 2500){
    result = "I will gladly take your thirty bucks.";
  }
  else if (scuberLength > 2500){
    result = "No can do.";
  }
  else {
    result = "No can do.";
  }

  //at the end, if I want my function to return something, I need to state it:
  return result;
}

function ternaryCheckCity(cityName){
  // Write your code here!
  let result;
  if (cityName === "NYC") {
    result = "Ok, sounds good.";
  }
  else {
    result = "No go.";
  }
  return result;
}

function switchOnCharmFromTip(charmFromTip){
  // Write your code here!
  let result;
  if (charmFromTip === "generous") {
    result = "Thank you so much.";
  }
  else if (charmFromTip === "not as generous"){
    result = "Thank you.";
  }
  else if (charmFromTip === "thanks for everything"){
    result = "Bye.";
  }
  else {
    result = "Bye.";
  }
  return result;
}