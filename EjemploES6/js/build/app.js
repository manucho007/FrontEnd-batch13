function print(number) {
  let double = number * 2;
  const resultMsg = `Tu Numbero es:${number} ,el doble es ${double} !`;
  console.log(resultMsg);
}

function repeatString(input, times) {
  let output = input.repeat(times);
  const resultMsg = `Tu Frase:${input} se repetira:${times}, resultado:${output}`;
  console.log(resultMsg);
}