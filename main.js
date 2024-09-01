// Задание 1

// let users = {};

// for(let i = 1; i <= 10; i++) {
//     let name = prompt(`Введите имя пользователя ${i}:`)
//     let age =+ prompt(`Введите возраст пользователя ${i}:`)

//     users[i] = {
//         name: name,
//         age: age
//     }
// }

// for(let key in users) {
//     console.log(`Пользователь ${key}`);
//     console.log(`Имя ${users[key].name}`);
//     console.log(`Возраст ${users[key].age}`)
// }

// console.log(`Вся информация пользователей :` , users);



// Задание 2

let cart = receipt ()
let text = 'Вы заказали'
let delivery = 9000

for(let key in cart) {
    text += ` ${key} ${cart[key].info},`
    delivery += cart[key].price
}

console.log(`${text} | Общая стоимость ${delivery} сумм`);