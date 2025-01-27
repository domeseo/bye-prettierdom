/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  addElement();

};

// function para generar las cartas

function generateAllCards() {
  let allCards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
  let cardIndex = (Math.floor(Math.random() * allCards.length));
  return allCards[cardIndex];
}


let numberCard = generateAllCards();

//funcion para generar icon / seed

function generateIcon() {
  let color = (Math.floor(Math.random() * 4));
  switch (color) {
    case 0:
      return `<i class="bi bi-heart"></i>`;
    case 1:
      return `<i class="bi bi-diamond"></i>`;
    case 2:
      return `<i class="bi bi-suit-spade"></i>`;
    case 3:
      return `<i class="bi bi-suit-club"></i>`;
  }

}

let icon = generateIcon();

// funcion para generar el html

function addElement() {

  document.getElementById('inserthtml').innerHTML +=
    `<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8 d-flex justify-content-center">
    <div class="bg-white mt-3 w-25 border-radius h-100">
    <div class="row">
    <div class="col-md-2"><h2 class="mt-2 ms-2"><div class="seed">${icon}</h2></div></div>
    <div class="col-md-8"></div>
    <div class="col-md-2"></div>
    <div class="container-fluid text-center mt-4 mb-5">
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8"><h2 class="d-flex justify-content-center numb" id="cardnumbers">${numberCard}</h2></div>
    <div class="col-md-2"></div>
    </div>
    </div>
    <div class="container-fluid mt-3">
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8"></div>
     <div class="col-md-2"><h2 class="mt-2"><div class="seed">${icon}</h2></div></div>
    </div>
  
    <div class="col-md-2"></div></div>`;

}

// refresh button page

function refreshPage() {
  window.location.reload();
} 
