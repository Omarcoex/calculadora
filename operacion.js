//Llmar los elementos desde html
const display = document.querySelector(".display");
const valor = document.querySelectorAll(".valor");
const operacion = document.getElementById("operacion");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const igual = document.getElementById("igual");

// Escuchar elementos
igual.addEventListener("click", () => {
  if (operacion.innerText === "=") {
    display.innerText=+(valor[0].value+ +valor[1].value)
  } else {
    console.log("Nada");
  }
});
suma.addEventListener("click", () => {});

resta.addEventListener("click", () => {});

multiplicacion.addEventListener("click", () => {});

division.addEventListener("click", () => {});
