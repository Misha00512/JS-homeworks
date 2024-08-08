let RealMadrid = [
    'Mpappe',
    'Vini Jr',
    'Bellingham',
    'Tchuameni',
    'Lunin',
    'Mendy',
    'Modric',
    'Carvajal',
    'Rudiger',
    'Nacho'
];
console.log(RealMadrid[0]);
console.log(RealMadrid[1]);
console.log(RealMadrid[2]);
console.log(RealMadrid[3]);
console.log(RealMadrid[4]);
console.log(RealMadrid[5]);
console.log(RealMadrid[6]);
console.log(RealMadrid[7]);
console.log(RealMadrid[8]);
console.log(RealMadrid[9]);

let Book1 = {
    title: 'Atomic Habits',
    pageCount: 237,
    genre: 'romantic'
};
let Book2 = {
    title: 'Federica Manzon Alma',
    pageCount: 153,
    genre: 'history'
};
let Book3 = {
    title: 'Rebecca Yarros Iron Flame',
    pageCount: 95,
    genre: 'comedy'
};


let Book4 = {
    title: 'Rebecca Yarros Iron Flame',
    pageCount: 95,
    genre: 'comedy',
    author: {
        name: 'Charles Dickens',
        age: 57
    }
};
let Book5 = {
    title: 'Rebecca Yarros Iron Flame',
    pageCount: 95,
    genre: 'comedy',
    author: {
        name: 'Charles Dickens',
        age: 57
    }
};
let Book6 = {
    title: 'Rebecca Yarros Iron Flame',
    pageCount: 95,
    genre: 'comedy',
    author: {
        name: 'Charles Dickens',
        age: 57
    }
};

let users = [
    {name: 'user1' , username: 'user1',password: 12345678},
    {name: 'user2' , username: 'user2',password: 12345678},
    {name: 'user2' , username: 'user3',password: 12345678},
    {name: 'user4' , username: 'user4',password: 12345678},
    {name: 'user5' , username: 'user5',password: 12345678},
    {name: 'user6' , username: 'user6',password: 12345678},
    {name: 'user7' , username: 'user7',password: 12345678},
    {name: 'user8' , username: 'user8',password: 12345678},
    {name: 'user9' , username: 'user9',password: 12345678},
    {name: 'user10' , username: 'user10',password: 12345678},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


let weather = [
    {day1: {
            morning: 12, dinner: 23, afternoon: 19
        }
    },
    {day2: {
            morning: 12, dinner: 23, afternoon: 19
        }
    },
    {day3: {
            morning: 12, dinner: 23, afternoon: 19
        }
    },
    {day4: {
            morning: 12, dinner: 23, afternoon: 19
        }
    },
    {day5: {
            morning: 12, dinner: 23, afternoon: 19
        }
    },
    {day6: {
            morning: 12, dinner: 23, afternoon: 19
        }
    },
    {day7: {
            morning: 12, dinner: 23, afternoon: 19
        }
    }
]

let a = 1
let x = 1
if (x !== a) {
    console.log(true)
}else{
    console.log(false)
}


let time = 58
    if (time <= 14){
        console.log('first part')
    }else if (time <= 30){
    console.log('second part')
}else if (time <= 45){
    console.log('third part')
}else if (time <= 59){
        console.log('quarter part')
    }else {
        console.log ('!!!')
    }


let day = 14
if (day <= 11){
    console.log('first part')
}else if (day <= 21){
    console.log('second part')
}else if (day <= 31){
    console.log('third part')
}else {
    console.log ('!')
}


let week = 'day5'
switch (week){
    case 'day1':
        console.log('Monday')
        break;
    case 'day2':
        console.log('Tuesday')
        break;
    case 'day3':
        console.log('Wednesday')
        break;
    case 'day4':
        console.log('Thursday')
        break;
    case 'day5':
        console.log('Friday')
        break;
    case 'day6':
        console.log('Saturday')
        break;
    case 'day7':
        console.log('Sunday')
}


let num1 = 14
let num2 = 15
if (num1>num2){
    console.log(num1)
}else if (num1===num2){
    console.log('Same numbers')
}
else{
    console.log(num2)
}


let x2 = prompt('enter your age')
if (x2 > 18){
    console.log('Good')
}else{
    console.log('default')
}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]
if (coursesAndDurationArray[0].monthDuration>4){
    console.log('Good')
}else{
    console.log('Very Bad')
}
if (coursesAndDurationArray[1].monthDuration>4){
    console.log('Good')
}else{
    console.log('Very Bad')
}
if (coursesAndDurationArray[2].monthDuration>4){
    console.log('Good')
}else{
    console.log('Very Bad')
}
if (coursesAndDurationArray[3].monthDuration>4){
    console.log('Good')
}else{
    console.log('Very Bad')
}
if (coursesAndDurationArray[4].monthDuration>4){
    console.log('Good')
}else{
    console.log('Very Bad')
}
if (coursesAndDurationArray[5].monthDuration>4){
    console.log('Good')
}else{
    console.log('Very Bad')
}