//Фильтрация по диапазону
function filterRange(arr,a,b){
    return arr.filter(item => (a<= item && item<= b))
}
const arr =[5, 3, 8, 1];
const filtered = filterRange(arr , 1, 4);
alert( filtered );
alert( arr );

//Сортировать в порядке по убыванию
let arry = [5, 2, 1, -10, 8]
arr.sort((a, b)=> b - a)
console.log(arry)

//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let nameU =users.map(item=> item.name)
console.log(nameU);

//Скопировать и отсортировать массив
function copySorted(arr){
return arr.slice().sort() }

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted );
console.log( arr );

//Отсортировать пользователей по возрасту
function sortByAge(arr){
    arr.sort((a, b) => a.age > b.age ? 1 : -1)
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];
sortByAge(arr);
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

// new topics

let name = prompt("text your name")
alert(name)

/*Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

 Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.*/

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12

// 5 > 4  true
// "ананас" > "яблоко"  false
// "2" > "12"  true
// undefined == null  true
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false


// Выведется ли alert?

if ("0") {
    alert( 'Привет' );
}
// yes


// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
//
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let js = prompt('Какое «официальное» название JavaScript?') // Add your code here\
let nameCompany = "ECMAScript"
if(prompt == nameCompany){
    alert('Верно!')
}
else{
    alert('Не знаете? ECMAScript!')
}


// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//
//     1, если значение больше нуля,
//     0, если значение равно нулю.
//     -1, если значение меньше нуля,
//     Предполагается, что пользователь вводит только числа.

let num = prompt("Напишите число")

if (num > 0){
    alert( 1 )
}
else if (num < 0){
    alert( -1 );
}
else {
    alert( 0 );
}


// Перепишите конструкцию if с использованием условного оператора '?':
//
// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

let result = (a + b < 4) ? "мало" : "много"

// Перепишите if..else с использованием нескольких операторов '?'.
//
//     Для читаемости рекомендуется разбить код на несколько строк.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let check = (login == "Сотрудник") ? message = "Привет" :
    (login == "Директор") ? message = "Здравствуйте" :
        (login == "") ? message = "нет логина" :
            ''