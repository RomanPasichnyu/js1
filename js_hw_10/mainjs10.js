// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// form.onsubmit=function (ev){
//     ev.preventDefault();
//     let block = document.createElement('div');
//
//     let userName = document.createElement('div')
//     userName.innerText = `name : ${this.name.value}`
//
//     let userSurname = document.createElement('div')
//     userSurname.innerText = `surname : ${this.surname.value}`
//
//     let userAge =document.createElement('div')
//     userAge.innerText = `age : ${this.age.value}`
//
//     block.append(userName, userSurname, userAge)
//     document.body.appendChild(block)
// }

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================

// document.addEventListener('DOMContentLoaded', function () {
//     let pluser = document.getElementById('task2')
//     let newNumber = parseInt(localStorage.getItem('task2')) || 0
//     newNumber ++
//     pluser.innerText = newNumber
//     localStorage.setItem('task2', newNumber.toString())
// })

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.

// let date = new Date()
// let session = JSON.parse(localStorage.getItem('session')) || []
// session.push(date)
// localStorage.setItem('session', JSON.stringify(session))

// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію
// =========================
//  in sesions.html


//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// let arr = []
// for (i=0; i<100; i++){
//     let obj ={id:i}
//     arr.push(obj)
// }
// document.addEventListener('DOMContentLoaded', function (e){
//     e.preventDefault()
// })


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
// let block = document.getElementById('text')
// button.addEventListener('click',function (){
//     block.style.display = 'none'
// })




//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
// let inp = document.getElementById('inp');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function (){
//     let age = parseInt(inp.value)
//     if(age <18){
//         alert('watch cartoons')
//     }else{
//         alert('go to work')
//     }
// })



// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let row = document.getElementById('ryadok')
let column = document.getElementById('kolonka')
let content = document.getElementById('vmist')
let btn = document.getElementById('baton')

let tableCreator = document.createElement('table')

btn.addEventListener('click', function () {

        let rowData = row.value
        let columnData = column.value
        let contentData = content.value

    for (let i = 0; i < rowData; i++) {
        let tr = document.createElement('tr')

    for (let i = 0; i < columnData; i++) {
        let td = document.createElement('td')
        td.innerText = contentData
        tr.appendChild(td)
    }

    tableCreator.appendChild(tr)
    }
    document.body.appendChild(tableCreator)
})







// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається