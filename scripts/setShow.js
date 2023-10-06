import show from "./show.js";

const setShow = (text, textarea) => {
  show(text);

  const imgWait = document.querySelector(".img__wait");
  const canvas = document.querySelector(".result--show");
  const btnCopy = document.querySelector(".btnCopy");

  textarea.addEventListener("input", () => {
    canvas.remove();
    btnCopy.remove();
    imgWait.classList.remove("none");
  });
};

export default setShow;
