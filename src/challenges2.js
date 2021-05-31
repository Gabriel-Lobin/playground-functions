// Desafio 10
function techList(tecs, nome) {
  let ordena = tecs.sort();
  let obj = {};
  let final = [];
  if (tecs.length < 1) {
    final = 'Vazio!';
  } else {
    for (let index = 0; index < tecs.length; index += 1) {
      obj = {
        tech: ordena[index],
        name: nome,
      };
      final.push(obj);
    }
  }
  return final;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numero = [];
  for (let i in number) {
    if (numero[number[i]]) {
      numero[number[i]] += 1;
    } else {
      numero[number[i]] = 1;
    }
  }
  for (let j in numero) {
    for (let i in number) {
      if (number[i] < 0 || number[i] > 9 || numero[j] === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;
}

// Desafio 12
function triangleCheck(L1, L2, L3) {
  let triangle = true;
  let corretion1 = Math.abs(L1);
  let corretion2 = Math.abs(L2);
  let corretion3 = Math.abs(L3);  
  if (L1 > L2 + L3 || L2 > L3 + L1 || L3 > L1 + L2) {
    triangle = false;
  } if (L1 < L2 + L3 || L2 < L3 + L1 || L3 < L1 + L2 ) {
    if (L1 > corretion3 - corretion2 && L2 > corretion3 - corretion1 && L3 > corretion2 - corretion1) {
      return triangle;
    }
  }
  return triangle;
}

// Desafio 13
function hydrate(string) {
  let re = /\d+/g;
  let numbers = string.match(re);
  let soma = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    soma += parseInt(numbers[index]);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
    return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
