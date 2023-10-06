import { ids, stepDesencriptar } from "../scripts/claves.js";

const removeID = (text) => {
  let newText = text;
  ids.forEach((id) => {
    newText.includes(id) ? (newText = newText.replace(id, "")) : null;
  });
  return newText;
};

const desencriptar = (text) => {
  let textDesencriptado = removeID(text);

  Object.keys(stepDesencriptar).forEach((step) => {
    Object.keys(stepDesencriptar[step]).forEach((character) => {
      stepDesencriptar[step][character].forEach((clave) => {
        while (textDesencriptado.includes(clave)) {
          textDesencriptado = textDesencriptado.replace(clave, character);
        }
      });
    });
  });

  return textDesencriptado;
};

export default desencriptar;
