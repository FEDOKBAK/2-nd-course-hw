//Задание 1

/*let password = 'пароль';
let enter = prompt('Введите пароль');
if (enter === password) {
  alert ("Пароль введен верно");
} else {
  alert ("Пароль введен неправильно");
}*/


//Задание 2

/*let c = prompt('Введите число');
if (c > 0 && c < 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
}*/

//Задание 3 

/*let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if (d > 100 || e > 100) {
  alert ('Верно');
} else {
  alert ('Неверно');
}*/

//Задание 4

/*let a = '2';
let b = '3';

a = Number(a);
b = Number(b);
alert (a + b);*/

//Задание 5

let monthNumber = prompt ('Введите номер месяца в году');

switch (monthNumber) {
  case '1':
    console.log('Январь, зима');
    break;
  case '2':
    console.log('Февраль, зима');
    break;
  case '3':
      console.log('Март, весна');
      break;
  case '4':
      console.log('Апрель, весна');
      break;
  case '5':
      console.log('Май, весна');
      break;
  case '6':
      console.log('Июнь, лето');
      break;
  case '7':
      console.log('Июль, лето');
      break;
  case '8':
      console.log('Август, лето');
      break;
  case '9':
      console.log('Сентябрт, осень');
      break;
  case '10':
      console.log('Октябрь, осень');
      break;
  case '11':
      console.log('Ноябрь, осень');
      break;
  case '12':
      console.log('Декабрь, зима');
      break;
  default: '13'
    console.log('Такого месяца нет')
    break;
}
