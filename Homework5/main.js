let quadrat = (a,b) => a*b
console.log(quadrat(10 ,20))

let circle = (r, pi) => r*r*pi
console.log(circle(7,3.14))

let cylinder = (h,r) => r*2*h
console.log(cylinder(10,5))


let array =[1,3,5,7]
let numbers = (arr)=>{
    for (const arrElement of arr)
        console.log(arrElement)
    }
numbers(array)


let paragraph = (p) =>{
    document.write(`<p>${p}</p>`)
}
paragraph('Football is a very interesting game')


let ul1 = (li) =>{
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}
ul1('hello World')


let ul2 = (li,numberOfLi)=>{
    document.write(`<ul>`)
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}
ul2('Hi World',5)


let states = (arrOfStates) => {
    document.write(`<ul>`)
    for (const i of arrOfStates) {
        document.write(`<li>${i}</li>`)
    }
    document.write(`</ul>`)
}
states([231,232,'hi,','good',true,false])



let dates = (users)=>{
    for (const user of users) {
        document.write(`<div>${user.id}${user.name}${user.age}</div>`)
    }
}
dates([
    {id:224, name:'misha', age:35},
    {id:608, name:'petys', age:39},
    {id:796, name:'vasya', age:25},
    {id:256, name:'masha', age:125}
])


let minNum = (numbers)=>{
    let min=numbers[0]
    for (const number of numbers) {
        if (number<min){
            min=number
        }
    }
    return min
}
console.log(minNum([232, 1212, 7767, 87, 12, 89]));



let sum=(arrNums)=>{
    let zero = 0
    for (const arrNum of arrNums) {
        zero=zero+arrNum
    }
    return zero
}
console.log(sum([33, 22, 8, 12]));


let swap= (arr,index1,index2)=>{
    if (index1<arr.length&&index2<arr.length) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        return arr
    }
    return 'wrong'
}
console.log(swap([11, 22, 33, 44], 3,1));


let exchange = (sumUa,currencyValues,exchangeCurrency)=>{
    let chosenCurrency
    for (const item of currencyValues) {
        if (item.currency===exchangeCurrency){
            chosenCurrency=item
        }
    }
    let result = sumUa/chosenCurrency.value
    return result
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));