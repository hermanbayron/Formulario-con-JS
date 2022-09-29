/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.getElementById("formulario"); //obtener el elemento
  let fields = document.getElementById("fields");
  let card = document.getElementById("basic-addon1");
  let cvc = document.getElementById("basic-addon2");
  let amount = document.getElementById("basic-addon3");
  let firstName = document.getElementById("basic-addon4");
  let lastName = document.getElementById("basic-addon5");
  let city = document.getElementById("basic-addon6");
  let state = document.getElementById("basic-addon7");
  let postalCode = document.getElementById("basic-addon8");
  let message = document.getElementById("basic-addon9");
  let tarjeta1 = document.getElementById("1");
  let tarjeta2 = document.getElementById("2");
  let tarjeta3 = document.getElementById("3");
  let tarjeta4 = document.getElementById("4");
  let tarjetitas = document.getElementById("tarjetitas");

  form.addEventListener("submit", envioFormulario); //manipular el elemento
  function envioFormulario(event) {
    event.preventDefault();

    // Card

    if (card.value === "") {
      card.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      card.style.background = "white";
    }

    // cvc

    if (cvc.value === "") {
      cvc.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      cvc.style.background = "white";
    }

    // amount

    if (amount.value === "") {
      amount.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      amount.style.background = "white";
    }

    // firstName

    if (firstName.value === "") {
      firstName.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      firstName.style.background = "white";
    }

    // lastName

    if (lastName.value === "") {
      lastName.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      lastName.style.background = "white";
    }

    // city

    if (city.value === "") {
      city.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      city.style.background = "white";
    }

    // state

    if (state.value === "") {
      state.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      state.style.background = "white";
    }

    // postalCode

    if (postalCode.value === "") {
      postalCode.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      postalCode.style.background = "white";
    }

    // message

    if (message.value === "") {
      message.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      message.style.background = "white";
    }

    // tarjetitas

    if (
      tarjeta1.checked ||
      tarjeta2.checked ||
      tarjeta3.checked ||
      tarjeta4.checked
    ) {
      tarjetitas.style.display = "block";
    } else {
      tarjetitas.style.background = "rgb(242, 214, 214)";
      alert("Selecciona tus tarjetas que vayas a utilizar");
    }

    console.log("Funciona");
  }
};
