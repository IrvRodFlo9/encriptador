import encriptador from "./encriptador.js";
import setShow from "./setShow.js";
import desencriptar from "./desencriptador.js";
import { ids } from "./claves.js";

const textarea = document.querySelector(".encripter__textarea");
const btnEncriptar = document.querySelector(".button--encriptar");
const btnDesencriptar = document.querySelector(".button--desencriptar");

const displayButtons = (e) => {
  const isEmpty = e.target.value === "";
  btnEncriptar.classList.toggle("none", isEmpty || isEncript(e.target.value));
  btnDesencriptar.classList.toggle(
    "none",
    isEmpty || !isEncript(e.target.value)
  );
};

const isEncript = (text) => ids.some((id) => text.includes(id));

const resultShow = (typeFunction) => {
  let text = textarea.value;
  text = typeFunction(text);

  setShow(text, textarea);
};

textarea.addEventListener("input", displayButtons);
btnEncriptar.addEventListener("click", () => {
  resultShow(encriptador);
});
btnDesencriptar.addEventListener("click", () => {
  resultShow(desencriptar);
});
