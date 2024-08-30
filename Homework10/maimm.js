let button = document.getElementsByTagName('button')[0]
button.onclick = function (){
    let none = document.getElementById('text')
    none.style.display = 'none'
}


let form1 = document.forms.form1
let enterAge = document.getElementById('enterAge')
form1.onsubmit = function (){
    let ageValue = form1.age.value
    if (ageValue < 18){
        console.log('you are so young')
    }

}


let form2 = document.forms.form2
let show = document.getElementById('show')
form2.onsubmit = function (e){
    e.preventDefault()
    let nameValue = form2.name.value
    let surnameValue = form2.surname.value
    let ageValue = form2.age.value
    let obj = {nameValue,surnameValue,ageValue}
    console.log(obj)
    show.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue + ' '
}


let divNumber = document.getElementById('divNumber')
let currentNumber = +localStorage.getItem('number')
currentNumber += 1
localStorage.setItem('number', currentNumber )
document.getElementById('divNumber').innerText = currentNumber



let sessionList = JSON.parse(localStorage.getItem('sessionList')) || []
sessionList.push(new Date())
localStorage.setItem('sessionList', JSON.stringify(sessionList))


let input = document.getElementById('input')
let showResult = document.getElementById('showResult')
input.oninput = function () {
    let kilogram = input.value
    let result = kilogram * 2.2
    showResult.innerText = result
}



function addToLocalStorage(arrayName, objToAdd){
    let lSGetItem = localStorage.getItem(arrayName)
    if (!lSGetItem){
        throw new Error('something wrong')
    }
    let array = JSON.parse(lSGetItem)
    if (typeof objToAdd === "object"){
        array.push(objToAdd)
    }
    localStorage.setItem(arrayName, JSON.stringify(array))
}
addToLocalStorage('sessionList', {})




let generatorTables = document.forms.generatorTables
let table = document.getElementById('table')

generatorTables.onsubmit = function (e){
    table.innerText = ''
    e.preventDefault()
    let linesValue = +generatorTables.lines.value
    let cellsValue = +generatorTables.cells.value
    let textValue = generatorTables.text.value
    console.log(linesValue,cellsValue,textValue)
    for (let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cellsValue; j++) {
           let td = document.createElement('td')
            td.innerText = textValue
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}


