//Задание 1

/*function minNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log (minNumber(8, 4));*/

//Задание 2

/*function num(n) {
  if (n % 2 == 0) {
    return (`Число четное`);
  } else {
    return (`Число нечетное`);
  }
}

console.log(num(4));*/

//Задание 3.1

/*function number(num) {
  num * num;
}

console.log(number(2));*/

//Задание 3.2

/*function number(num) {
  return num * num;
}

console.log(number(2));*/

//Задание 4

/*let age = prompt(`Сколько вам лет?`);

if (age < 0 ) {
  function printMessage() {
    console.log(`Вы ввели неправильное значение`);
  }
}
if (age <= 12) {
  function printMessage() {
    console.log(`Привет, друг!`);
  } 
} else {
  console.log(`Добро пожаловать!`);
}

printMessage();*/

//Задание 5

/*let mult = (a = prompt('Введите первое число'), b = prompt ('Введите второе число'));

function mult() {
  if (isNaN (a) || isNaN (b)) {
    return alert ('Одно или оба значения не являются числом');
  } else {
    return alert (a*b);
  }
}

mult();*/

//Задание 6

/*let squaring = (userNumber = prompt ('Введите число')) => {
  if (isNaN (userNumber)) {
    return alert ('Переданный параметр не является числом');
  } else {
    return alert (`Число в кубе равняется ${userNumber**3}`);
  }
}

squaring();*/

//Задание 7

/*function getCircleArea() {
  return (this.radius * this.radius * 3.14) ;
}

function getCirclePerimeter() {
  return (2 * 3.14 * this.radius);
}

const circle1 = {
  radius: 10,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter
}

const circle2 = {
  radius: 12,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter
}

console.log(circle1.gerArea());
console.log(circle2.getPerimeter());*/



//Задание 8

/*function seasons() {
  let answer = prompt('Введите номер месяца от 1 до 12');

  if (answer = 12 || (answer >= 1 && answer <=2)) {
    alert (`Зима`);
  } 
  else if (answer >= 3 && answer <=5) {
    alert (`Весна`);
  }
  else if (answer >= 6 && answer <=8) {
    alert (`Лето`);
  }
  else if (answer >= 9 && answer <=11) {
    alert (`Осень`);
  }
  else {
    alert (`Такого месяца нет`);
  }
}*/