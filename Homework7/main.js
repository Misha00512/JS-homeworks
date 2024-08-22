function User (id, name, surname , email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let users = [
    new User(234,'vasya','vasya','vasia@gmail.com',123456789),
    new User(231,'petya','petya','petya@gmail.com',123456789),
    new User(237,'misha','misha','misha@gmail.com',123456789),
    new User(236,'dasha','dasha','dasha@gmail.com',123456789),
    new User(238,'volodya','volodya','volodya@gmail.com',123456789),
    new User(239,'danya','danya','danya@gmail.com',123456789),
    new User(244,'dima','dima','dima@gmail.com',123456789),
    new User(245,'valera','valera','valera@gmail.com',123456789),
    new User(231,'kiril','kiril','kiril@gmail.com',123456789),
    new User(233,'masha','masha','masha@gmail.com',123456789)
]
console.log(users)


let filter = users.filter((user) => user.id % 2 === 0)
console.log(filter)


let sort = users.sort((user1, user2) => user1.id-user2.id)
console.log(sort)




function Client (id, name, surname , email, phone, order){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}
let clients = [
    new Client(234,'vasya','vasya','vasia@gmail.com',123456789 , ['tablet','phone','tv','laptop']),
    new Client(231,'petya','petya','petya@gmail.com',123456789, ['tablet','phone','tv','laptop']),
    new Client(237,'misha','misha','misha@gmail.com',123456789, ['tablet','phone']),
    new Client(236,'dasha','dasha','dasha@gmail.com',123456789, ['tablet','phone','tv']),
    new Client(238,'volodya','volodya','volodya@gmail.com',123456789, ['tablet','phone','tv','laptop']),
    new Client(239,'danya','danya','danya@gmail.com',123456789, ['tablet','phone']),
    new Client(244,'dima','dima','dima@gmail.com',123456789, ['tablet','phone','tv','laptop']),
    new Client(245,'valera','valera','valera@gmail.com',123456789, ['tablet','phone','tv']),
    new Client(231,'kiril','kiril','kiril@gmail.com',123456789, ['tablet','phone','tv']),
    new Client(233,'masha','masha','masha@gmail.com',123456789, ['tablet','phone','laptop'])
]
let sort2 = clients.sort((client1, client2) => client1.order.length-client2.order.length)
console.log(sort2)



function Car (model, creator, year, maxSpeed, engineVolume){
    this.model = model
    this.creator = creator
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function (){
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        if (newSpeed>0) console.log(this.maxSpeed = this.maxSpeed + newSpeed)
    }
    this.changeYear = function (newValue){
        if (newValue>1900) this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let car = new Car('bmw', 'vasya',1910,80,10)
console.log(car)

car.drive()
car.info()
car.increaseMaxSpeed(150)
car.changeYear(2010)
car.addDriver({name:'petya',age:27})
console.log(car)






function Popelyschka (name , age, footSize){
    this.name = name
    this.age = age
    this.footSize = footSize
}
let popelyschku = [
    new Popelyschka('nastya',20,36),
    new Popelyschka('dasha',17,34),
    new Popelyschka('vika',22,36),
    new Popelyschka('alina',27,38),
    new Popelyschka('masha',21,37),
    new Popelyschka('ira',25,38),
    new Popelyschka('olya',23,39),
    new Popelyschka('diana',32,41),
    new Popelyschka('ilona',29,40),
    new Popelyschka('vita',26,39)
]
class Prinz  {
    constructor (name,age,shoseSizeFinded) {
        this.name = name
        this.age = age
        this.shoseSizeFinded = shoseSizeFinded
    }
}
let prinz  = new Prinz('vasya',23,37)
for (const popelyschka of popelyschku) {
    if (popelyschka.footSize === prinz.shoseSizeFinded){
        console.log('Finded')
    }
}
popelyschku.find(popelyschka => popelyschka.footSize === prinz.shoseSizeFinded)



Array.prototype.myForEach = function (callback){
    let yourArray = this
    for (const item of yourArray) {
        callback(item)
    }
}
[44].myForEach((x) => console.log(x))