// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
        this.id = id;
        this.surname = surname;
        this.email =email;
        this.phone = phone;
        this.name = name;
}
let Users = [
    new User(10, 'aaa', 'jaja', 'gg@gg', 3803123131),
    new User(9, 'bbb', 'jaja', 'gg@gg', 3803123131),
    new User(8, 'ccc', 'jaja', 'gg@gg', 3803123131),
    new User(7, 'ddd', 'jaja', 'gg@gg', 3803123131),
    new User(6, 'eee', 'jaja', 'gg@gg', 3803123131),
    new User(5, 'fff', 'jaja', 'gg@gg', 3803123131),
    new User(4, 'ggg', 'jaja', 'gg@gg', 3803123131),
    new User(3, 'hhh', 'jaja', 'gg@gg', 3803123131),
    new User(2, 'jjj', 'jaja', 'gg@gg', 3803123131),
    new User(1, 'kkk', 'jaja', 'gg@gg', 3803123131),
]
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(Users.filter((user) => user.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(Users.sort((usr1, usr2) => usr1.id - usr2.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.order = order;
    }
};
// створити пустий масив, наповнити його 10 об'єктами Client
let Clients = [
    new Client(10, 'aaa', 'jaja', 'gg@gg', 3803123131, ['qwsa', 'csdcs', 'scsc']),
    new Client(9, 'bbb', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa','qwsa','qwsa','qwsa']),
    new Client(8, 'ccc', 'jaja', 'gg@gg', 3803123131, ['qwsa']),
    new Client(7, 'ddd', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa']),
    new Client(6, 'eee', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa','qwsa','qwsa']),
    new Client(5, 'fff', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa']),
    new Client(4, 'ggg', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa','qwsa','qwsa','qwsa','qwsa']),
    new Client(3, 'hhh', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa','qwsa']),
    new Client(2, 'jjj', 'jaja', 'gg@gg', 3803123131, ['qwsa','qwsa']),
    new Client(1, 'kkk', 'jaja', 'gg@gg', 3803123131, ['qwsa'])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(Clients.sort((cl1, cl2) => cl1.order.length - cl2.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, creator, year,maxSpeed, engine){
    this.model=model;
    this.creator=creator;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engine=engine;

    this.drive = function (){
        console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
    }
    this.info= function (){
        console.log((`model: - ${this.model}, creator: ${this.creator}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, engine: ${this.engine}`));
    }
    this.increaseMaxSpeed=function (newSpeed){
        this.maxSpeed+=newSpeed
    }
    this.changeYear=function (newValue){
        this.year=newValue
    }
    


}
let car1=new Car('tesla', 'ilona', 2020, 300, 1.4)
car1.drive()
car1.info()
car1.increaseMaxSpeed(50)
car1.changeYear(2025)



// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку