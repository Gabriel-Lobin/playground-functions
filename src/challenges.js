// Desafio 1
function compareTrue(num1, num2){
  let verdade = false;
	if(num1 === true && num2 === true ){
		verdade = true;
	}
  return verdade 
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
function catAndMouse(mouse, cat1, cat2) {
 	let distancia1 = cat1 - mouse;
 	let distancia2 = cat2 - mouse;
	let cat2Mouse = Math.abs(distancia2);
	let cat1mouse = Math.abs(distancia1);

 if (cat2Mouse === cat1mouse){
	return 'os gatos trombam e o rato foge';
 } else if (distancia1 > distancia2){
	 return 'cat2';
	}	else if (distancia1 < distancia2){
	return 'cat1';
 }	
}
// Desafio 8
function fizzBuzz(array) {
	let tudo = [];		
		for(let index = 0; index < array.length; index += 1){
			
			if(array[index] % 3 === 0 && array[index] % 5 === 0){
				tudo.push('fizzBuzz');
			} else if(array[index] % 5 === 0) {
				tudo.push('buzz');
			} else if(array[index] % 3 === 0){
				tudo.push('fizz');
			} else {
				tudo.push('bug!');
			}
		}
	return tudo;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
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
