// - Знайти та вивести довижину настипних стрінгових значень
let strings= ['hello world', 'lorem ipsum', 'javascript is cool'];
let task= strings.map((string)=> string.length);
console.log(task);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringsUp = strings.map((string)=> string.toUpperCase());
console.log(stringsUp);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let stringsLower = stringsUp.map((string)=> string.toLowerCase())
console.log(stringsLower);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let strClean = str.trim()
console.log(strClean)
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToarray=str1.split(' ');
console.log(stringToarray);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers= [10,8,-7,55,987,-1011,0,1050,0];
let strNums=numbers.map((nums)=> nums.toString());
console.log(strNums);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
let ascending = nums.sort((a,b)=> a-b)
console.log(ascending);
let descending = nums.sort((a,b)=>b-a)
console.log(descending)
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = 
    coursesAndDurationArray.sort((a,b)=> b.monthDuration-a.monthDuration)
console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let duration = coursesAndDurationArray.filter((a)=>a.monthDuration > 5)
console.log(duration)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map =
    coursesAndDurationArray.map((cource, index)=>({...cource, id:index+1}))
console.log(map)
// =========================

//     описати колоду карт (від 6 до туза без джокерів)
let cardSuits = ['spade', 'diamond','heart', 'clubs']
let values = ['6','7','8','9','10', 'ace','jack','queen','king',]

let func = ()=>{
    let arr=[];
    for (const cardSuit of cardSuits) {
        for (const value of values) {
            arr.push({cardSuit:cardSuit, value:value})
        }
    }return arr
}
let cards=(func(cardSuits,values))
console.log(cards)

// - знайти піковий туз
console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
// - всі шістки
console.log(cards.filter((card) => card.value === '6'));
// - всі червоні карти
console.log(cards.filter((card) => card.cardSuit === 'heart' || card.cardSuit === 'diamond'));
// - всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === 'clubs' && card.value >= '9'));
//
// =========================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let reduce = cards.reduce((accumulator, card)=>{
    if (card.cardSuit === 'spade'){
        accumulator[0].push(card);
    }if (card.cardSuit === 'diamond'){
        accumulator[1].push(card)
    }if (card.cardSuit === 'heart'){
        accumulator[2].push(card)
    }if (card.cardSuit === 'clubs'){
        accumulator[3].push(card)
    }return accumulator;}, [[], [], [], []])
console.log(reduce);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.find((item) => item.modules.includes('sass')));
console.log(coursesArray.find((item) => item.modules.includes('docker')));
