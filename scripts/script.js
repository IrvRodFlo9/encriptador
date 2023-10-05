import encriptador from "./encriptador.js";

const textarea = document.querySelector(".encripter__textarea");

const btnEncriptar = document.querySelector(".button--encriptar");

const confirm = () => {
  console.log("confirmando");
};

const callEncriptador = () => {
  const text = textarea.value;
  encriptador(text);
};

btnEncriptar.addEventListener("click", callEncriptador);
