function square (sideA,sideB){
    return sideA*sideB
}
let result = square(15,20)
console.log(result)



function squareCircle (radius,pi){
    return radius*2*pi
}
let resultCircle = squareCircle(2,3.14)
console.log(resultCircle)



function cylinder (height,radiusCylinder,pi){
    return pi*2*radiusCylinder*height
}
let squareCylinder = cylinder(10,7,3.14)
console.log(squareCylinder)



let array =[1,3,5,7]
function numbers (arr){
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
numbers(array)



function paragraph (p){
    document.write(`<p>${p}</p>`)
}
paragraph('Football is a very interesting game')



function ul1 (li){
    document.write(`<ul><li>${li}</li>
                   <li>${li}</li>
                   <li>${li}</li></ul>`)
}
ul1('hello World')




function ul2 (li,numberOfLi){
    document.write(`<ul>`)
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li>${li}</li>`)
    }
        document.write(`</ul>`)
}
ul2('Hi World',7)



function states (arrOfStates){
    document.write(`<ul>`)
    for (const i of arrOfStates) {
        document.write(`<li>${i}</li>`)
    }
    document.write(`</ul>`)
}
states([231,232,35878,8887,'hi,','good',true,false])



function dates (id, name,age){
    document.write(`<div>Id---${id}</div>
                    <div>Name---${name}</div>
                    <div>Age---${age}</div>`)
}
dates('kokosovich','kokos',25 )



function nums(num1,num2,num3,num4){
    if (num1<num2 && num1<num3 && num1<num4) {
        console.log(num1)
    }else if (num2<num1 && num2<num3 && num2<num4){
        console.log(num2)
    }else if (num3<num1 && num3<num2 && num3<num4){
        console.log(num3)
    }else if (num4<num1 && num4<num3 && num4<num3){
        console.log(num4)
    }else {
    console.log('nothing')
    }
}
nums(13,14,12,15)



function sum(arrNums){
    return arrNums
}
let result1 = sum(13+50+27)
console.log(result1)



let swaped = [22,11,33,44]
function swap(arr,index1,index2){
    if (index1<index2){
        console.log(arr)
    }else if (index1>index2){
        console.log(swaped)
    }else{
        console.log(undefined)
    }
}
swap([11,22,33,44],0,1)




function exchange(sumUAH,currencyValues,exchangeCurrency){
    if (exchangeCurrency !== 'USD'){
        console.log(sumUAH/9)
    }else {
        console.log(sumUAH/5)
    }
}
exchange(500,[{currency:'USD',value:5},{currency:'EUR',value:9}],'USD')
