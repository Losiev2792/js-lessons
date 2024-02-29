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
let nameU =users.map(item=> item.ame)
console.log(nameU);


function copySorted(arr){
return arr.slice().sort() }

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted );
console.log( arr );