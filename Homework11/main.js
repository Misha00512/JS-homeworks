let wrap = document.getElementById('wrap')
fetch(' https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        let {carts} = cartsObject
        for (const cart of carts) {
            const cartDiv  = document.createElement('div')
            for (const cartKey in cart) {
                if (Array.isArray(cartKey)){
                    const products = document.createElement('div')
                    for (const product of products) {
                        const ul = document.createElement('ul')
                        for (const ulElement of ul) {
                            const li = document.createElement('li')
                            li.innerText = ulElement
                            ul.appendChild(li)
                        }
                        products.appendChild(ul)
                    }
                    cartDiv.appendChild(products)
                }else {
                const cartKeyDiv =  document.createElement('div')
                cartKeyDiv.innerText = `${cartKey} : ${cart[cartKey]}`
                cartDiv.appendChild(cartKeyDiv)
            }}
            wrap.appendChild(cartDiv)
        }
    })











