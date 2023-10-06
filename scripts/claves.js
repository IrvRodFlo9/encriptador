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

const vocals = {
  a: ["sb", "df"],
  e: ["jk", "lm"],
  i: ["hw", "ct"],
  o: ["pq", "my"],
  u: ["xn", "rz"],
};

const signs = {
  ".": ["+", "-"],
  ",": ["/", "*"],
  "?": ["(", ")"],
  "¿": ["=", "_"],
  $: ["[", "]"],
};

const acentos = {
  á: ["a", "a"],
  é: ["e", "e"],
  í: ["i", "i"],
  ó: ["o", "o"],
  ú: ["u", "u"],
};

const spaces = { " ": ["%", "#", "$"] };

export const ids = [
  "ñ}",
  "%:",
  ";0",
  "^~",
  "0{",
  "XY",
  "||",
  "QW",
  "HJ",
  "..",
  ";:",
  "@;",
  ":@",
];

export const stepsEncriptar = {
  removeAcentos: acentos,
  encriptarConsonantes: consonantes,
  encriptarVocales: vocals,
  encriptarSignos: signs,
  encriptarExpacios: spaces,
};

export const stepDesencriptar = {
  desencriptarSpaces: spaces,
  desencriptarSignos: signs,
  desencriptarVocales: vocals,
  desencriptarConsonantes: consonantes,
};
