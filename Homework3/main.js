for (let i = 0; i < 10; i++) {
    document.write('<div>Hala Madrid</div>')
}

for (let i = 0; i < 10; i++) {
    document.write(`<div><p>Madrid</p>${i}</div>`)
}

let hw3 = 0
while (hw3 < 20) {
    hw3++
    document.write(`<div><h1>Football</h1></div>`)
}

let hw4 = 0
while (hw4 < 20) {
    hw4++
    document.write(`<div><h1>Football</h1>${hw4}</div>`)
}


let skills = [
    'html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'
]
for (let i = 0; i < 1; i++) {
    document.write(`<ul>
        <li> html</li>
        <li>css </li>
        <li>javascript</li> 
        <li>mysql </li>
        <li>mongodb</li>
        <li>react</li>
        <li>angular</li>
        <li>node.js</li>
    </ul>`)
}


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(
        `<div class="product-card">
            <h3 class="product-title">${product.title}, Price - ${product.price}</h3>
            <img src="${product.image}" alt="product.image" class="product-image">
        </div>`
    )
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let statusTrue = []
let statusFalse = []
let userAge = []
let i = 0
while (i < users.length){
  let user = users[i]
    if (user.status) {
        statusTrue[statusTrue.length] = user
    }else {
        statusFalse[statusFalse.length] = user
    }if (user.age>30){
    userAge[userAge.length] = user
    }
    i++
}
console.log(statusTrue)
console.log(statusFalse)
console.log(userAge)
