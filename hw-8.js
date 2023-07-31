//Задание 1 

/*const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(people.sort();*/

//Задание 2 

/*function isPositive(el) {
if (el > 0) {
  return el
}
}
function isMale(el) {
  if (el.gender === `male`) {
    return el
  }
}
function filter(arr, ruleFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i]))
    result.push ((ruleFunction(arr[i])));
  }
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));*/

//Задание 3

/*let currentDate = new Date();

console.log(currentDate);

let timerId = setInterval(() => console.log(currentDate), 3000);
setTimeout(() => {clearInterval(timerId); console.log(`30 секунд прошло`);}, 30000);*/

//Задание 4

/*function delayForSecond(callback) {
  setTimeout(delayForSecond, 1000);
  callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})*/

//Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

delayForSecond((cb) => sayHi('Глеб'));