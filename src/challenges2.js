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
  return final
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
