const imgWait = document.querySelector(".img__wait");
const container = document.querySelector(".result");

const canvas = document.createElement("p");
canvas.classList.add("result--show");

const btnCopy = document.createElement("button");
btnCopy.textContent = "Copiar";
btnCopy.classList.add("button");
btnCopy.classList.add("btnCopy");

const copy = (text) => {
  navigator.clipboard.writeText(text);
};

const show = (text) => {
  imgWait.classList.add("none");
  canvas.textContent = text;
  container.appendChild(canvas);
  container.appendChild(btnCopy);

  btnCopy.addEventListener("click", () => {
    copy(text);
  });
};

export default show;
