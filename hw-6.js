//Задание 1

/*const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}*/

//Задание 2

/*let arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4)+1);*/

//Задание 3

/*let numbs = [1, 3, 5, 10, 20];

numbs = numbs.join(' ');

console.log(numbs);*/

//Задание 4  

/*let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i].push(j + 1);
  };
};
console.log(arr);*/

//Задание 5 

/*let arr = [1, 1, 1];

arr.push(2, 2, 2);

console.log(arr);*/

//Задание 6

/*let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr.pop());
console.log(arr);*/

//Задание 7

/*let arr = [9, 8, 7, 6, 5];
let answ =  Number (prompt('Угадай число'));

if (arr.includes(answ)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}*/

//Задание 8 

/*let word = 'abcdef';
word = word.split('');
console.log(word);
word = word.reverse();
console.log(word);
word = word.join('')
console.log(word);*/

//Задание 9

/*const arr = [[1, 2, 3], [4, 5, 6],];
let resultArr = arr[0].concat(arr[1]);
console.log(resultArr);*/

//Задание 10

/*let arr = [1, 3, 9, 6, 2, 7, 5, 4, 8, 10];

let sum;
for (let i = 0; i < arr.length - 1; i++) {
  console.log((sum = arr[i] + arr[i + 1]));
}*/

//Задание 11

/*const arr = [6, 10, 25, 32];
let result = arr.map(item => (item*item));
console.log(result);*/

//Задание 12 

/*const array = (['слово', '', 'слог', 'длинное предложение', 'буква'])

const calcLength = array => {
  const map = new Map()

  for (let str of array) {
    map.set(str, `длина слова: ${str.replace(/[^а-я]/gi, "").length}`)
  }
  return [...map.values()]
}

const result = calcLength(array)

console.log(result)*/

//Задание 13

/*const filterPositive = ([-1, 0, 5, -10, 56]);
const result = filterPositive.filter(item => item < 0);

console.log(result);*/

/*const filterPositive = ([-25, 25, 0, -1000, -2]);
const result = filterPositive.filter(item => item < 0);

console.log(result);*/