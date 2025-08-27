
//   let homeScoreEl = document.getElementById("homescore");
//   let homeScore = 0;

//   setInterval(() => {
//     homeScore += 1;
//     homeScoreEl.textContent = homeScore;
//   }, 1000);

let homescoreEl = document.getElementById("homescore");
//let homescorebtn1 = document.getElementById("plus-1btn")
let homeScore= 0

function plusHome1() {
    homeScore+=1
    homescoreEl.textContent=homeScore
}

let homescorebtn2 =document.getElementById("plus-2btn")

function plusHome2() {
    homeScore+= 2
    homescoreEl.textContent=homeScore
}

let homescorebtn3 =document.getElementById("plus-3btn")
function plusHome3(){
    homeScore+=3
    homescoreEl.textContent=homeScore
}

let guestscore = 0
let guestscoreEl= document.getElementById("guestscore")

function plusGuest1(){
    guestscore+=1
    guestscoreEl.textContent =guestscore

}

function plusGuest2(){
    guestscore+=2
    guestscoreEl.textContent =guestscore
}

function plusGuest3(){
    guestscore+=3
    guestscoreEl.textContent= guestscore
}

let newgameEl=document.getElementById ="newGame"

function newGame(){
    homescoreEl.textContent = 0
    guestscoreEl.textContent =0
    homeScore= 0
    guestscore=0
}


