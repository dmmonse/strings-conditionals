
//concatenated string variable:
const course = "programming";

const year = 2022;

const semester = "spring";

console.log(`I am taking ${course} during the ${semester} ${year} semester`); 

//if conditional stament:
const month=2 ;
if (month>2){
    console.log('What month is it?');
}
else {
 console.log('It is February! <3');
}

//switch statement:
function myWeek() {
    var text;
    var day = document.getElementById("myInput").value;
  
    switch(day) {
      case "Sunday":
        text = "Tomorrow is monday :(";
      break;
      case "Saturday":
        text = " It is the weekend! :D";
      break;
      case "Monday":
      text = " It is the begining of the week..";
      break;
      case "Tuesday":
      text = "It might still feel like a monday..but it is tuesday!";
      break;
      case "Wednesday":
        text = " You are halfway through the week already! :)";
      break;
      case "Thursday":
        text = "..tomorrow is friday!!";
      break;
      case "Friday":
        text = "It is practically the weekend...";
      break;
      default:
      text = "The weekend will come soon";
    }
    document.getElementById("day").innerHTML = text;
  }
  // string method replacing a string method:
  function clickMe() {
    let text = document.getElementById("question").innerHTML;
    document.getElementById("question").innerHTML =
    text.replace("13","11");
  }
//number method:
var num = 10.56789;
console.log("the due date is on the ",num.toFixed()," of February!")