import { ids, steps } from "../scripts/claves.js";

const sortear = (n = 1) => {
  return Math.round(Math.random() * n);
};

const addID = (text) => {
  return `${ids[sortear(12)]}${text}`;
};

const encriptador = (text) => {
  let textEncriptado = text.toLowerCase();

  Object.keys(steps).forEach((step) => {
    Object.keys(steps[step]).forEach((key) => {
      while (textEncriptado.includes(key)) {
        textEncriptado = textEncriptado.replace(
          key,
          steps[step][key][sortear()]
        );
      }
    });
  });

  textEncriptado = addID(textEncriptado);

  return textEncriptado;
};

export default encriptador;
