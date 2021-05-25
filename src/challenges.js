// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true ){
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  let calculo =  (base*height)/2;
  
  return calculo
}

// Desafio 3
function splitSentence(string) {
  let guarda = string.split(' ');

   return guarda
}
// Desafio 4

function concatName(arrayS) {
  let first = arrayS[0];
  let last = arrayS[arrayS.length - 1];
  let concat = last +', ' + first
  
  return concat; 
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = 0;
  if (wins > 0 ){
    pontuacao = (wins * 3) + ties;
  } else if ( wins === 0 && ties === 0){
    pontuação = 0;
  }
  return pontuacao;
}

// Desafio 6
let arrayteste = [9, 1, 2, 3, 9, 5, 7];
function highestCount(array) {
  // mostra quantas repetições existem
  let newArray = [];
  
    for (let i in array){
      if(newArray[array[i]]){
        newArray[array[i]] +=1
      } else {
        newArray[array[i]] = 1
      }
    }  
  // pega maior numero
let compara = newArray.length - 1 ;
let repeticoes = 0;
    for( let index in newArray){
          if (compara === newArray.length - 1){
          repeticoes = newArray[index];
        }      
    }
  return repeticoes;
}

console.log(highestCount(arrayteste));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
