//Задание 1

/*let str = 'js';
str = str.toUpperCase();
console.log(str);*/

//Задание 2

/*const anmls = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

anmls.forEach(anmls => {
  if (anmls.toLowerCase().includes(search.toLowerCase())) {
    console.log(anmls);
  }
});*/

//Задание 3

/*Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);*/

//Задание 4 

/*const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min.apply(null, numbers);
const maxValue = Math.max.apply(null, numbers);

console.log(minValue);
console.log(maxValue);*/

//Задание 5

/*function getRandomInt(minValue, maxValue) {
  return Math.round (Math.random() * (maxValue - minValue));
}
console.log(getRandomInt(1, 10));*/

//Задание 6

/*function getRandomArrNumbers(num) {
  const arrLength = Math.floor(num / 2);
  const result = [];

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * (num + 1));
    result.push(randomNum);
  }
  return result;
}*/

//Задание 7 

/*function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 5));*/

//Задание 8

/*let myDate = new Date();

console.log(myDate);*/

//Задание 9

/*let currentDate = new Date ();
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate);*/

//Здание 10

/*const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",];
const firstDate = (currentDate) => {
  let date = currentDate.getDate();
  if (date < 10) (date = '0' + date);

  let month = months[currentDate.getMonth() - 1];

  let day = days[currentDate.getDay()];

  let hours = currentDate.getHours();
  if (hours < 10) {hours = '0' + hours};

  let mins = currentDate.getMinutes();
  if (mins < 10) {mins = '0' + mins};

  let secs = currentDate.getSeconds();
  if (secs < 10) {secs = '0' + secs};

  console.log(`Дата: ${date} ${month} ${currentDate.getFullYear()} - это ${day}.`);
  console.log(`Время: ${hours}:${mins}:${secs}`);
}*/

//Задание 11

function gameFructs() {
  const fructs = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  let list = fructs.sort(() => Math.random() - 0.5);
  alert(`Запомните слова: ${fructs}`);

  const fructsOne = prompt (`Какое было первое слово?`);

  const fructsTwo = prompt (`Какое было последнее слово?`);

  if (fructsOne == list[0] && fructsTwo === list[list.length-1]) {
      alert(`Верно!`);

  } else if (fructsOne == list[0]) {
      alert(`Вы были близки к победе!`);

  } else if (fructsTwo === list[list.length-1]) {
      alert(`Вы были близки к победе!`);

  } else {
      alert(`Неверно`);
  }
}






