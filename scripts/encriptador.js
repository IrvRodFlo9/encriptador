const sortear = (n = 1) => {
  return Math.round(Math.random() * n);
};

const consonantes = {
  b: ["1A", "4I"],
  c: ["2A", "5I"],
  d: ["3A", "6I"],
  f: ["4A", "7I"],
  g: ["5A", "8I"],
  h: ["6A", "9I"],
  j: ["7A", "1O"],
  k: ["8A", "1O"],
  l: ["9A", "2O"],
  m: ["1E", "3O"],
  n: ["2E", "4O"],
  p: ["3E", "5O"],
  q: ["4E", "6O"],
  r: ["5E", "7O"],
  s: ["6E", "8O"],
  t: ["7E", "9O"],
  v: ["8E", "1U"],
  w: ["9E", "2U"],
  x: ["1I", "3U"],
  y: ["2I", "4U"],
  x: ["3I", "5U"],
  z: ["6U", "7U"],
};

const encriptarConsonantes = (text) => {
  let newText = text;

  const keys = Object.keys(consonantes);

  keys.forEach((key) => {
    while (newText.includes(key)) {
      newText = newText.replace(key, consonantes[key][sortear()]);
    }
  });

  return newText;
};

const encriptarVocales = (text) => {
  let newText = text;

  while (newText.includes("a")) {
    const claves = ["sb", "df"];
    newText = newText.replace("a", claves[sortear()]);
  }
  while (newText.includes("e")) {
    const claves = ["jk", "lm"];
    newText = newText.replace("e", claves[sortear()]);
  }
  while (newText.includes("i")) {
    const claves = ["hw", "ct"];
    newText = newText.replace("i", claves[sortear()]);
  }
  while (newText.includes("o")) {
    const claves = ["pq", "my"];
    newText = newText.replace("o", claves[sortear()]);
  }
  while (newText.includes("u")) {
    const claves = ["xn", "rz"];
    newText = newText.replace("u", claves[sortear()]);
  }

  return newText;
};

const encriptarSignos = (text) => {
  let newText = text;

  while (newText.includes(".")) {
    const claves = ["+", "-"];
    newText = newText.replace(".", claves[sortear()]);
  }
  while (newText.includes(",")) {
    const claves = ["/", "*"];
    newText = newText.replace(",", claves[sortear()]);
  }
  while (newText.includes("?")) {
    const claves = ["(", ")"];
    newText = newText.replace("?", claves[sortear()]);
  }
  while (newText.includes("¿")) {
    const claves = ["=", "_"];
    newText = newText.replace("¿", claves[sortear()]);
  }
  while (newText.includes("$")) {
    const claves = ["¿", "?"];
    newText = newText.replace("$", claves[sortear()]);
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

const encriptador = (text) => {
  let textEncriptado = text.toLowerCase();

  textEncriptado = encriptarConsonantes(textEncriptado);

  textEncriptado = encriptarVocales(textEncriptado);

  textEncriptado = encriptarSignos(textEncriptado);

  textEncriptado = encriptarExpacios(textEncriptado);

  console.log(textEncriptado);
};

export default encriptador;
