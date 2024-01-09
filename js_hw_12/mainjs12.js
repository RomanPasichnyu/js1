// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


let url = new URL('http://jsonplaceholder.typicode.com/users')

fetch(url)
    .then(value => value.json())
    .then(value => {

        let ul = document.createElement('ul');
        document.body.appendChild(ul)

        for (const user of value) {
            let li = document.createElement('li')
            ul.appendChild(li)


            let a = document.createElement('a')
            a.href = `./user-details.html?id=${user.id}`
            a.innerText = `${user.id} - ${user.name}`
            li.appendChild(a)

        }


    })