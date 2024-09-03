let target = document.getElementById('target')
let url = new URL('https://dummyjson.com/recipes')
url.searchParams.set('limit' , '50')
fetch(url)
.then(value => value.json())
.then(recipesObject =>{
    let {recipes} = recipesObject
    for (const recipe of recipes) {
        const recipeDiv = document.createElement('div')
        recipeDiv.style.background = 'azure'
        recipeDiv.style.padding = '20px'
        for (const recipeKey in recipe) {
            if (Array.isArray(recipe[recipeKey])){
                const arrayDiv = document.createElement('div')
                const title = document.createElement('div')
                title.innerText = `${recipeKey} :`
                const ol = document.createElement('ol')
                const array = recipe[recipeKey]
                for (const item of array) {
                    const li = document.createElement('li')
                    li.innerText = item
                    ol.appendChild(li)
                }
                arrayDiv.append(title ,ol)
                recipeDiv.appendChild(arrayDiv)
            }
            else{
                if (recipeKey !== 'image') {
                    const keyDiv = document.createElement('div')
                    keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                    recipeDiv.appendChild(keyDiv)
                }
        }}

        const img = document.createElement('img')
        img.src = recipe.image
        recipeDiv.appendChild(img)
        img.style.width = '200px'
        target.appendChild(recipeDiv)
    }

})