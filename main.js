const theBill = document.getElementById("num");
const thePeople = document.getElementById("num2");
const theButton = document.getElementById("button");
const theUserInput = document.getElementById("userInput");
const theTotal = document.getElementById("total");
const theReview = document.getElementById("review");


document.getElementById("button").onclick = function(e) {
    e.preventDefault();
    if(theBill.value >= 1 && thePeople.value >= 1){
        theTotal.value = (theBill.value * theReview.value)/thePeople.value;
        theTotal.value = Math.round(theTotal.value * 100) / 100;
        theTotal.value = theTotal.value.toFixed(2);
        document.getElementById("userInput").innerHTML = `Each person can tip: $${theTotal.value}`;
    }else{
        document.getElementById("userInput").innerHTML = "<span style='color: red;'>Please enter all the fields!!</span>"
    };
};

