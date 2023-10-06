import { consonantes, vocals, signs, ids, acentos } from "../scripts/claves.js";

const sortear = (n = 1) => {
  return Math.round(Math.random() * n);
};

const removeAcentos = (text) => {
  let newText = text;

  for (let key in acentos) {
    while (newText.includes(key)) {
      newText = newText.replace(key, acentos[key]);
    }
  }

  return newText;
};

const encriptarConsonantes = (text) => {
  let newText = text;

  for (let key in consonantes) {
    while (newText.includes(key)) {
      newText = newText.replace(key, consonantes[key][sortear()]);
    }
  }

  return newText;
};

const encriptarVocales = (text) => {
  let newText = text;

  for (let key in vocals) {
    while (newText.includes(key)) {
      newText = newText.replace(key, vocals[key][sortear()]);
    }
  }

  return newText;
};

const encriptarSignos = (text) => {
  let newText = text;

  for (let key in signs) {
    while (newText.includes(key)) {
      newText = newText.replace(key, signs[key][sortear()]);
    }
  }

  return newText;
};

const encriptarExpacios = (text) => {
  const claves = ["%", "#", "$"];
  let newText = text;

  while (newText.includes(" ")) {
    newText = newText.replace(" ", claves[sortear(2)]);
  }

  return newText;
};

const addID = (text) => {
  return `${ids[sortear(3)]}${text}`;
};

const encriptador = (text) => {
  let textEncriptado = text.toLowerCase();

  textEncriptado = removeAcentos(textEncriptado);

  textEncriptado = encriptarConsonantes(textEncriptado);

  textEncriptado = encriptarVocales(textEncriptado);

  textEncriptado = encriptarSignos(textEncriptado);

  textEncriptado = encriptarExpacios(textEncriptado);

  textEncriptado = addID(textEncriptado);

  return textEncriptado;
};

export default encriptador;
