function cloner (user){
    if (user) {
        const functions = []
        for (const key in user) {
        if (typeof user[key] === 'function'){
            const functionClone = user[key].bind({})
            functions.push({functionClone, key})
        }
        }
        const copyUser = JSON.parse(JSON.stringify(user))
        for (const func of functions) {
            copyUser[func.key] = func.functionClone
        }
        console.log(copyUser)
        return copyUser
    }
    throw new Error('Something Wrong')
}
cloner({id:25,name:'vasya',play(){console.log('I can play football')}, speak(){console.log('hi ,my name is vasya')}})



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course,id) => ({...course, id: id+1})));