/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

};

let numberCard = (Math.floor(Math.random() * 11) + 1);
console.log(numberCard);


function generateIcon() {
  let color = (Math.floor(Math.random() * 4));
  switch (color) {
    case 0:
      return `<i class="bi bi-heart-fill">`;
    case 1:
      return `<i class="bi bi-diamond"></i>`;
    case 2:
      return `<i class="bi bi-suit-spade"></i>`;
    case 3:
      return `<i class="bi bi-suit-club"></i>`;
  }
  console.log(color);

}

let icon = generateIcon();

document.body.onload = addElement;



function addElement() {

  document.getElementById('inserthtml').innerHTML +=
    `<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8 d-flex justify-content-center">
    <div class="bg-white mt-3 w-25 border-radius" style="height: 550px;">
    <div class="row">
    <div class="col-md-2"><h2 class="mt-2"><div class="seed">${icon}</h2></div></div>
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

