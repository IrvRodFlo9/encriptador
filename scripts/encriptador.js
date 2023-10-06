import { ids, stepsEncriptar } from "../scripts/claves.js";

const sortear = (n = 1) => {
  return Math.round(Math.random() * n);
};

const addID = (text) => {
  return `${ids[sortear(12)]}${text}`;
};

const encriptador = (text) => {
  let textEncriptado = text.toLowerCase();

  Object.keys(stepsEncriptar).forEach((step) => {
    Object.keys(stepsEncriptar[step]).forEach((key) => {
      while (textEncriptado.includes(key)) {
        textEncriptado = textEncriptado.replace(
          key,
          stepsEncriptar[step][key][sortear()]
        );
      }
    });
  });

  textEncriptado = addID(textEncriptado);

  return textEncriptado;
};

export default encriptador;
