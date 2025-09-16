'use strict';
const vuelo = 'LH2303';

const passanger = {
  name: 'Ariana',
  passport: 2930029932939,
};

const modificarstr = function (str) {
  const [primera, ...others] = str.split(' ');
  const cap = primera[0].toUpperCase() + primera.slice(1).toLowerCase();
  const mayus = others.join(' ').toUpperCase();
  return cap + ' ' + mayus;
  //   console.log(cap + ' ' + mayus);
};
const strr = 'aRiAnA gRaCiAas por tooo';

function higher(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Modified string: ${fn(str)}`);
  console.log(`La funcion usada ${fn.name}`);
}

// higher(strr, modificarstr);
// Functions Returning Functions
const answers = [0, 0, 0, 0];

function registerNewAnswer() {
  let answer = prompt(
    'What is your favorite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)'
  );
  if (answer < 0 || answer > 3) {
    console.log('invalid option ');
  }
  answers[answer]++;
  const type = prompt('Type "string" or "array" to display the results');
  display(type.toLowerCase());
}

function display(type = 'array') {
  if (type == 'string') {
    let str = 'Poll results are ';
    for (const [i, num] of answers.entries()) {
      str = i == answers.length - 1 ? str + `${num}.` : str + `${num}, `;
    }
    console.log(str);
  } else {
    console.log(answers);
  }
}

document.querySelector('.poll').addEventListener('click', registerNewAnswer);
