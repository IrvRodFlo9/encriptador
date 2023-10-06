import { ids } from "./claves.js";

const verifyInput = (text) => {
  if (
    text.includes(ids[0]) ||
    text.includes(ids[1]) ||
    text.includes(ids[2]) ||
    text.includes(ids[3])
  ) {
    return true;
  } else {
    return false;
  }
};

export default verifyInput;
