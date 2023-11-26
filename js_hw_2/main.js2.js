// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr=[123, 'vasya', true, {}, 'vdvdwd', false, 2221, [], false, 'volya'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={title:'algebra', pageCount: 123, genre: 'pipec'};
let book2={title:'history', pageCount: 123, genre: 'norm'};
let book3={title:'geography', pageCount: 123, genre: 'easy'};
console.log(book1,book2,book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
let book4={title:'algebra', pageCount: 123, genre: 'pipec', authors: [ {name: 'valerka', age: 36}]};
let book5={title:'history', pageCount: 123, genre: 'norm', authors: [ {name: 'nastya', age: 18}]};
let book6={title:'geography', pageCount: 123, genre: 'easy', authors: [ {name: 'romjke', age: 26}]};
console.log(book4.authors[0]);console.log(book5.authors[0]);console.log(book6.authors[0]);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
let arr10 = [
    {name: 'petya', username: 'pitak', password: 'petryk123'},
    {name: 'petya1', username: 'pitaek', password: 'petryk12vv3'},
    {name: 'petya2', username: 'pitafk', password: 'petryk123scdf'},
    {name: 'petya3', username: 'pitcak', password: 'petryk1sdfs23'},
    {name: 'petya4', username: 'pibtak', password: 'petryksdf123'},
    {name: 'petya5', username: 'pi1ak', password: 'petryk1ewf23'},
    {name: 'petya6', username: 'pivtak', password: 'petryk13rewf23'},
    {name: 'petya7', username: 'pidtak', password: 'petrykwf123'},
    {name: 'petya8', username: 'pivtak', password: 'petryk12sdc3'},
    {name: 'petya9', username: 'pietak', password: 'petryksdf123'},
]
console.log(arr10[0].password);
console.log(arr10[1].password);
console.log(arr10[2].password);
console.log(arr10[3].password);
console.log(arr10[4].password);
console.log(arr10[5].password);
console.log(arr10[6].password);
console.log(arr10[7].password);
console.log(arr10[8].password);
console.log(arr10[9].password);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 123;
if(x !== 0){
    console.log('Correct')
} else{console.log('Wrong')}

let a = 1;
if(a === 1){
    console.log('Correct');
}else{console.log('Error')}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 32;
if( time >0 && time <= 15){
    console.log('firstPart')
}else if(time > 16 && time <= 30){
    console.log('secondPart')
}else if(time > 31 && time <= 45){
    console.log('thirdPart')
}else if(time > 46 && time <=60){
    console.log('fourtPart')
}else{console.log('False');}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 22;
if( day >1 && day <= 10){
    console.log('dekada1')
}else if ( day >10 && day <=20){
    console.log('dekada2')
}else if (day >20 && day<= 31){
    console.log('dekada3')
}else{console.log('False')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = 2;
    switch (week) {case 1: console.log('monday');break;
    case 2: console.log('tuesday');break;
    case 3: console.log('wednesday');break;
    case 4: console.log('thursday');break;
    case 5: console.log('friday');break;
    case 6: console.log('saturday');break;
    case 7: console.log('sunday');break;
    default: console.log('False');}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

    let number1 = 1;
    let number2 = 13;
    if (number1 > number2){
        console.log('max is ' + number1)
    }else if(number1 < number2){
        console.log('max is ' +number2)
    }else if (number1===number2){
        console.log('Рівні числа')}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)

// let c = 0;
// c = c || 'default';
// console.log(c);


//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
//     на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>=5){console.log('Супер')}
if(coursesAndDurationArray[1].monthDuration>=5){console.log('Супер')}
if(coursesAndDurationArray[2].monthDuration>=5){console.log('Супер')}
if(coursesAndDurationArray[3].monthDuration>=5){console.log('Супер')}
if(coursesAndDurationArray[4].monthDuration>=5){console.log('Супер')}
if(coursesAndDurationArray[5].monthDuration>=5){console.log('Супер')}
else {console.log('Несупер')}

