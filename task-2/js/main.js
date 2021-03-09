"use strict";

function imageHeigth() {
  let image = document.querySelectorAll(".content-img");

  for (let i = 0; i < image.length; i++) {
    let width = image[i].offsetWidth;
    image[i].style.height = width + "px";
  }
  let conutImg = document.querySelector(".count__img");
  conutImg.innerText = image.length;
}

let conutDate = document.querySelector(".count__date");

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
let hh = today.getHours();
let min = today.getMinutes();
today = dd + "." + mm + "." + yyyy + " " + hh + ":" + min;
conutDate.innerText = today;

window.onresize = imageHeigth;
window.onload = imageHeigth;
