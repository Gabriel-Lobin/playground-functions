// Desafio 1
function compareTrue(num1, num2) {
  let verdade = false;
  if (num1 === true && num2 === true) {
    verdade = true;
  }
  return verdade;
}
// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(string) {
  let guarda = string.split(' ');
  return guarda;
}
// Desafio 4

function concatName(arrayS) {
  let first = arrayS[0];
  let last = arrayS[arrayS.length - 1];
  let concat = last + ', ' + first;
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = 0;
  if (wins > 0) {
    pontuacao = (wins * 3) + ties;
  } else if (wins === 0 && ties === 0) {
    return pontuacao;
  }
  return pontuacao;
}

// Desafio 6

function highestCount(array) {
  // mostra quantas repetições existem
  let newArray = [];
  for (let i in array) {
    if (newArray[array[i]]) {
      newArray[array[i]] += 1;
    } else {
      newArray[array[i]] = 1;
    }
  }
  // pega maior numero
  let compara = newArray.length - 1;
  let repeticoes = 0;
  for (let index in newArray) {
    if (compara === newArray.length - 1) {
      repeticoes = newArray[index];
    }
  }
  return repeticoes;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  let cat2Mouse = Math.abs(distancia2);
  let cat1mouse = Math.abs(distancia1);
  if (cat2Mouse === cat1mouse) {
    return 'os gatos trombam e o rato foge';
  } if (distancia1 > distancia2) {
    return 'cat2';
  } if (distancia1 < distancia2) {
    return 'cat1';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let tudo = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      tudo.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      tudo.push('buzz');
    } else if (array[index] % 3 === 0) {
      tudo.push('fizz');
    } else {
      tudo.push('bug!');
    }
  }
  return tudo;
}

// Desafio 9
function encode(string) {
  let array = [];
  for (let indice = 0; indice < string.length; indice += 1) {
    if (string[indice] === 'a') {
      array.push(1);
    } else if (string[indice] === 'e') {
      array.push(2);
    } else if (string[indice] === 'i') {
      array.push(3);
    } else if (string[indice] === 'o') {
      array.push(4);
    } else if (string[indice] === 'u') {
      array.push(5);
    } else {
      array.push(string[indice]);
    }
  }
  let arrayString = array.toString();
  let encoded = '';
  for (let j = 0; j < arrayString.length; j += 1) {
    if (arrayString[j] !== ',') {
      encoded += arrayString[j];
    }
  }
  return encoded;
}
function decode(string) {
  let array = [];
  for (let indice = 0; indice < string.length; indice += 1) {
    if (string[indice] === '1') {
      array.push('a');
    } else if (string[indice] === '2') {
      array.push('e');
    } else if (string[indice] === '3') {
      array.push('i');
    } else if (string[indice] === '4') {
      array.push('o');
    } else if (string[indice] === '5') {
      array.push('u');
    } else {
      array.push(string[indice]);
    }
  }
  let arrayString = array.toString();
  let decoded = '';
  for (let j = 0; j < arrayString.length; j += 1) {
    if (arrayString[j] !== ',') {
      decoded += arrayString[j];
    }
  }
  return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
