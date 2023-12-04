// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sum = (a,b) => a+b
let result = sum(5,10);
console.log(result)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let square= (r1,r2,pi)=>r1*r2*pi
let result2= square(5, 5, 3.14)
console.log(result2)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilinderSquare = (result2, h) => result2*h
let result3 = cilinderSquare(result2, 8)
console.log(result3)
// - створити функцію яка приймає масив та виводить кожен його елемент
let func = (array) => console.log(array[0],array[1],array[2], array[3])
func(['dfacs', 123,false, 'efdsfcd'])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createTxt = (text) =>
    document.write(`<p>${text}</p>`)
createTxt('vasya hi')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (text1) =>
{document.write(`<ul>`)
        document.write(`<li>${text1}</li>`)
        document.write(`<li>${text1}</li>`)
        document.write(`<li>${text1}</li>`)
    document.write(`</ul>`)}
createUl('vasya goodbye')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl_li = (text) =>{
    for (let li = 0; li < 3; li++) {
        document.write(`<ul>`)
            document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
    }
}
createUl_li('text li')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrList = (array2) =>{
    for (const item of array2) {
        document.write(`<li>${item}</li>`)
    }
}
arrList([ 123, 'texttext', true])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [{id: 1, name: 'vasya', age: 31}, {id: 2, name: 'petya', age: 30}, {id: 3, name: 'kolya', age: 29},];
let arrObjects= (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
arrObjects(users);
// - створити функцію яка повертає найменьше число з масиву
    let numbersArr = [23,24,44,1,2,3,4,5,6, -12,7,8,9,11,23,123,34,5,756]
let minNumber = (numbersArr) => {
    let min = numbersArr[0]
    for (const item of numbersArr) {
        if (min > item) {
            min = item
        }
    }
    return min
}
let minResult = minNumber(numbersArr);
console.log(minResult);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let numbersArr2 = [23,24,44,1,2,3,4,5,6, 12,7,8,9,11,23,123,34,5,756]
let summArray = (numbersArr2) => {
    let maxResult = 0
    for (const number of numbersArr2) {
        maxResult +=number
    }
    return maxResult
}
let maxResult = summArray(numbersArr2)
console.log(maxResult)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250