// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b){
//     return  a*b
// }
// console.log(area(10,15));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle(radius, pi){
//     return pi*radius*radius
// }
// let x = (areaCircle(5, 3,14))
// console.log(x)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCilinder(h){
//     return x*h
// }
// console.log(areaCilinder(15));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [123, true, 'qweqwe',3321221, 'nthggs']
// function logArr(){
//     for (const element of array) {
//         document.write(element)}
// }
// logArr(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createTextP (text){
//     document.write(`<p>${text}</p>`)
// }
// createTextP('enter text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createTextUl(text){
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createTextUl('text for li')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl_li(text){
//     for (let li = 0; li < 3; li++) {
//         document.write(`<ul>`)
//             document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// createUl_li('text li')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrList(array2){
//     for (const item of array2) {
//         document.write(`<li>${item}</li>`)
//     }
// }
// arrList(array2=[ 123, 'texttext', true])
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
// ];

// function arrObjects(users){
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// arrObjects(users);

// - створити функцію яка повертає найменьше число з масиву
//     let numbers = [23,24,44,1,2,3,4,5,6, -12,7,8,9,11,23,123,34,5,756]
// function minimalOfArr() {
//     let min = numbers[0]
//     for (const number of numbers) {
//         if (min >number) min=number
//     }
//     return min
// }
// console.log(minimalOfArr(numbers))
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// let array = [1,3,5,1]
// function sumArr(){
//     let result = 0
//     for (const number of array) {
//         result += number;
//     }
//     return result;
// }
// console.log(sumArr(array));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250