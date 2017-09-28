function explorar(frase, palabra) {
  let result = "";
  if (frase.includes(palabra)) {
    result = "si";
  } else {
    result = "no";
  }
  console.log(`La palabra: ${palabra} ${result} esta incluida en la frase: ${frase}`);
}