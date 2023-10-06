import {
  consonantes,
  vocals,
  signs,
  ids,
  acentos,
  spaces,
} from "../scripts/claves.js";

const removeID = (text) => {
  let newText = text;

  ids.forEach((id) => {
    newText.includes(id) ? (newText = newText.replace(id, "")) : null;
  });

  return newText;
};

const desencriptarSpaces = (text) => {
  let newText = text;

  spaces.forEach((clave) => {
    while (newText.includes(clave)) {
      newText = newText.replace(clave, " ");
    }
  });

  return newText;
};

const desencriptarSigns = (text) => {
  let newText = text;

  for (let sign in signs) {
    signs[sign].forEach((clave) => {
      while (newText.includes(clave)) {
        newText = newText.replace(clave, sign);
      }
    });
  }

  return newText;
};

const desencriptarVocals = (text) => {
  let newText = text;

  for (let vocal in vocals) {
    vocals[vocal].forEach((clave) => {
      while (newText.includes(clave)) {
        newText = newText.replace(clave, vocal);
      }
    });
  }

  return newText;
};

const desencriptarConsonants = (text) => {
  let newText = text;

  for (let consonant in consonantes) {
    consonantes[consonant].forEach((clave) => {
      while (newText.includes(clave)) {
        newText = newText.replace(clave, consonant);
      }
    });
  }

  return newText;
};

const desencriptar = (text) => {
  let textDesencriptado = text;

  textDesencriptado = removeID(textDesencriptado);

  textDesencriptado = desencriptarSpaces(textDesencriptado);

  textDesencriptado = desencriptarSigns(textDesencriptado);

  textDesencriptado = desencriptarVocals(textDesencriptado);

  textDesencriptado = desencriptarConsonants(textDesencriptado);

  return textDesencriptado;
};

export default desencriptar;
