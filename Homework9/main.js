let div = document.createElement('div')
document.body.appendChild(div)
div.classList.add('wrap', 'collapse', 'alpha', 'beta')

let divCopy = div.cloneNode(true)
document.body.appendChild(divCopy)



let array = ['Main','Products','About us','Contacts']
let ul = document.createElement('ul')
for (const arrItem of array) {
    let li = document.createElement('li')
    li.innerText = arrItem
    ul.appendChild(li)
}
document.body.appendChild(ul)



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let div2 = document.createElement('div')

    let h1 = document.createElement('h1')
    h1.innerText = course.title
    div2.appendChild(h1)

    let h2 = document.createElement('h2')
    h2.innerText = course.monthDuration
    div2.appendChild(h2)

    document.body.appendChild(div2)
}



for (const course of coursesAndDurationArray) {
    let div3 = document.createElement('div')
    div3.classList.add('item')

    let h1 = document.createElement('h1')
    h1.innerText = course.title
    h1.classList.add('heading')
    div3.appendChild(h1)

    let p = document.createElement('p')
    p.innerText = course.monthDuration
    p.classList.add('description')
    div3.appendChild(p)

    document.body.appendChild(div3)
}
