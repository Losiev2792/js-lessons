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

// Что выведет код ниже?
//
//     alert( null || 2 || undefined ); true
//     alert( alert(1) || 2 || alert(3) ); 1 next 2
//     alert( 1 && null && 2 ); null
//     alert( alert(1) && alert(2) ); 1 undefined
//     alert( null || 2 && 3 || 4 ); 3

// Какие из перечисленных ниже alert выполнятся?
//
//     Какие конкретно значения будут результатами выражений в условиях if(...)?
//
// if (-1 || 0) alert( 'first' ); +++
// if (-1 && 0) alert( 'second' ); ---
// if (null || -1 && 1) alert( 'third' ); +++



// Напишите код, который будет спрашивать логин с помощью prompt.
//
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
//
// Пароль проверять так:
//
//     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».


let userName = prompt("кто там?", );

if (userName === 'админ') {

    let pass = prompt('пароль?', );

    if (pass === 'я главный') {
        alert( 'здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'ошибка' );
    } else {
        alert( 'невалидный пароль' );
    }

} else if (userName === '' || userName === null) {
    alert( 'отмена' );
} else {
    alert( "не знаю" );
}



//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//
//     Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
//
//     Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
let num
do {
    num = prompt(">100?", 0)
} while (num <= 100 && num)




// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
//
//     Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//
// Напишите код, который выводит все простые числа из интервала от 2 до n.
//
//     Для n = 10 результат должен быть 2,3,5,7.

let n = 10;
nextPrime:
 for (let i = 2; i <= n; i++) {
for (let a = 2; j < i; a++) {
if (i % a == 0) continue nextPrime;{
alert( i );}


    //Напишите if..else, соответствующий следующему switch:
    if(browser == "Edge") {
        alert("You've got the Edge!");
    } else if (browser == "Chrome"
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
        alert( "Okay we support these browsers too" );
    } else {
        alert( 'We hope that this page looks ok!' );
    }

    //Перепишите код с использованием одной конструкции switch:

    const number = +prompt('Введите число между 0 и 3');
    switch (number){
        case 0:
            alert('Вы ввели число 0');
            break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
    }

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


    // arrowFunction

    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }

    ask(
        "Вы согласны?",
        () => { alert("Вы согласились."); },
        () => { alert("Вы отменили выполнение."); }
    );




   // Какие недостатки вы видите в стиле написания кода этого примера?

    function pow(x, n) {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }

    let x = prompt("x?", "");
    let n = prompt("n?", "");

    if (n <= 0) {
        alert(`Степень ${n} не поддерживается,
    введите целую степень, большую 0`);
    } else {
        alert( pow(x, n) );``


        //Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

        let user = {}

        user.name = "John"
        user.surname = "Smith"
        user.name = "Pete";
        delete user.name;

        //Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
// Должно работать так:
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

        function isEmpty(obj){
            for (let key in obj) {
                return false;
            }
            return true;}


        //У нас есть объект, в котором хранятся зарплаты нашей команды:
//
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        }

        let sum = 0;
        for (let key in salaries) {
            sum += salaries[key];
        }


        //Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:
//
// // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//
// P.S. Используйте typeof для проверки, что значение свойства числовое.

        function multiplyNumeric(obj) {
            for (let key in obj) {
                if (typeof obj[key] == 'number') {
                    obj[key] *= 2;
                }}}
