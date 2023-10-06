import encriptador from "./encriptador.js";
import show from "./show.js";
import verifyInput from "./verifyInput.js";
import desencriptar from "./desencriptador.js";

const textarea = document.querySelector(".encripter__textarea");
const btnEncriptar = document.querySelector(".button--encriptar");
const btnDesencriptar = document.querySelector(".button--desencriptar");
const imgWait = document.querySelector(".img__wait");

btnDesencriptar.classList.add("none");

const encriptarMostrar = () => {
  const text = textarea.value;
  const textEncriptado = encriptador(text);

  show(textEncriptado);

  const canvas = document.querySelector(".result--show");
  const btnCopy = document.querySelector(".btnCopy");

  textarea.addEventListener("input", () => {
    canvas.remove();
    btnCopy.remove();
    imgWait.classList.remove("none");
  });
};

const desencriptarMostrar = () => {
  const text = textarea.value;
  const textDesencriptado = desencriptar(text);

  show(textDesencriptado);

  const canvas = document.querySelector(".result--show");
  const btnCopy = document.querySelector(".btnCopy");

  textarea.addEventListener("input", () => {
    canvas.remove();
    btnCopy.remove();
    imgWait.classList.remove("none");
  });
};

const inputValid = (e) => {
  if (verifyInput(e.target.value)) {
    btnEncriptar.classList.add("none");
    btnDesencriptar.classList.remove("none");
  } else {
    btnEncriptar.classList.remove("none");
    btnDesencriptar.classList.add("none");
  }
};

textarea.addEventListener("input", inputValid);
btnEncriptar.addEventListener("click", encriptarMostrar);
btnDesencriptar.addEventListener("click", desencriptarMostrar);
