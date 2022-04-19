
class Product{
    is_available = false;
    
    constructor(name,description,price,image, category,likes = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.category = category
        this.likes = likes   
    }
    
}


const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
    new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp'),
    
]
//console.log(products);
 

function generateProduct(product){
    return `
    <div class="product">
    <img src="${product.image}" alt="${product.name}">
    <div class="product_details">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
    </div>
    <div class="price">
    ${product.price}
    </div>
    <button class="btn btn-dark buy-now" data-product-name="${product.name}" data-product-price="${product.price}">Buy Now</button>
</div>`

}


/**
 * Generate Products cards inside the dom element
 * @param {array} products_array A list of products
 * @param {object} dom_element a dom element
 * @return void
 */

function generateProductsCard(products_array, dom_element){

    products_array.forEach(product  => {
        const markup = generateProduct(product)
        dom_element.insertAdjacentHTML('beforeend', markup)
    }); 
}

const productsElement = document.querySelector('.products')
generateProductsCard(products, productsElement)

const cart = []
document.querySelectorAll('.buy-now').forEach(element => {

 element.addEventListener("click", function(){

    //console.log(this);

    const name = this.getAttribute('data-product-name')
    const price = parseFloat(this.getAttribute('data-product-price'))
    //console.log(name, price);


    const purchased_product = {
        name, price
      }
      cart.push(purchased_product)
      console.log(cart);
 
      
    // show cart items inside the cart dom element
    document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li>${purchased_product.name} €${purchased_product.price
    } </li>`)

    // loop over the cart items
    let sum = 0
    cart.forEach(element => {
        // sum all prices
        sum += element.price
    })
    console.log(sum);
    // show cart total 
    document.querySelector('.total').innerHTML = `Total: € ${sum.toFixed(2)}`

    })

});




