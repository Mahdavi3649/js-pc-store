
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
console.log(products);


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
</div>`

}

function generateProductsCard(){

}