// SPOT THE ISSUE

function canYouSpotTheProblem() {
    for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
    }
}

canYouSpotTheProblem();

  // Debug!
  //======================================================

  // string1

function printOutHello(){
    const message = "Hello World";
    return message;
};
console.log(printOutHello());

  // Expected result: "Hello World"

  // That one is really broken! Please fix it
  //======================================================

  // GET NINE
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
  // Expected Result: 9
console.log(result);