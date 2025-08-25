
//   let homeScoreEl = document.getElementById("homescore");
//   let homeScore = 0;

//   setInterval(() => {
//     homeScore += 1;
//     homeScoreEl.textContent = homeScore;
//   }, 1000);

let homescoreEl = document.getElementById("homescore");

let homescorebtn1 = document.getElementById("plus-1btn")

let homeScore= 0

function plus1() {
    homeScore+=1
    homescoreEl.textContent=homeScore
}

let homescorebtn2 =document.getElementById("plus-2btn")

function plus2() {
    homeScore+= 2
    homescoreEl.textContent=homeScore
}

let homescorebtn3 =document.getElementById("plus-3btn")
function plus3(){
    homeScore+=3
    homescoreEl.textContent=homeScore
}



