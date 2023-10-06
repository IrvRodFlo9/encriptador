import encriptador from "./encriptador.js";
import show from "./show.js";

const textarea = document.querySelector(".encripter__textarea");
const btnEncriptar = document.querySelector(".button--encriptar");
const imgWait = document.querySelector(".img__wait");

const verifyContent = (canvas, btnCopy) => {
  canvas.remove();
  btnCopy.remove();
  imgWait.classList.remove("none");
};

const encriptarMostrar = () => {
  const textEncriptado = encriptador(textarea.value);
  show(textEncriptado);

  const canvas = document.querySelector(".result--show");

  const btnCopy = document.querySelector(".btnCopy");

  textarea.addEventListener("input", () => {
    verifyContent(canvas, btnCopy);
  });
};

btnEncriptar.addEventListener("click", encriptarMostrar);
