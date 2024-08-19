let str0 = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(str0[0].length);
console.log(str0[1].length);
console.log(str0[2].length);


let str1 = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(str1[0].toUpperCase(),str1[1].toUpperCase(),str1[2].toUpperCase())


let str2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
console.log(str2[0].toLowerCase(),str2[1].toLowerCase(),str2[2].toLowerCase())


let str3 = ' dirty string   '
console.log(str3.replace(' ',''))


let str4 = 'Ревуть воли як ясла повні';
console.log(str4.split(' '))


let numbers = [10,8,-7,55,987,-1011,0,1050,0]
console.log(numbers.map(number => number + ''));




let nums = [11,21,3]
function sortNums (arrNums,direction){
    if (direction === 'ascending'){
        return arrNums.sort((a,b) => a-b)
    }
    if (direction === 'descending'){
        return arrNums.sort((a,b) => b-a)
    }
}
console.log(sortNums(nums,'descending'))



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let task1 =coursesAndDurationArray.sort((a, b)=>b.monthDuration-a.monthDuration)
console.log(task1)
let task2 =coursesAndDurationArray.filter(function (course){
    return course.monthDuration>5
})
console.log(task2)
let task3 = coursesAndDurationArray.map((course,id)=>{
    let obj = {
        id:id+1,
        title:course.title,
        monthDuration:course.monthDuration
    }
    return obj
})
console.log(task3)



    let suits = ['spade' ,'diamond' ,'heart' ,'club']
    let values = ['6','7','8','9','10', 'ace','jack','queen','king']
    let cards = []
for (const suit of suits) {
    for (const value of values) {
        let card = {cardSuite:suit,value:value}
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red'
        }else {
            card.color = 'black'
        }
        cards.push(card)
    }
}
console.log(cards)
console.log(cards.find(card => card.cardSuite === 'spade' && card.value === 'ace'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuite === 'diamond'));
console.log(cards.filter(card => card.cardSuite === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));


let reduce = cards.reduce((accumulator,card) => {
 switch (card.cardSuite){
     case 'spade':
         accumulator.spades.push(card)
         break
     case 'diamond':
         accumulator.diamonds.push(card)
         break
     case 'heart':
         accumulator.hearts.push(card)
         break
     case 'club':
         accumulator.clubs.push(card)
         break
 }
    return accumulator
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduce)




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
    }]
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass')
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker')
}));

