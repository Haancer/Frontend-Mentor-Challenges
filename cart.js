const countEL = document.querySelector('.count');
const minusEL = document.querySelector('.minus');
const plusEL = document.querySelector('.plus');

const cartIcon = document.querySelector('.cart-icon'); 
const cartContainer = document.querySelector('.cart-container'); 
const cartCount = document.querySelector('.cart-count');

const addToCartBtn = document.querySelector('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const checkoutBtn = document.querySelector('.checkout');

const cartQty = document.querySelector(".cart-count .qty");

let count = 0;
let totalQty = 0;

plusEL.addEventListener('click',()=>{
    count++;
    countEL.textContent = count;
})

minusEL.addEventListener('click',()=>{
    if(count === 0){
        countEL.textContent = count;
    }else{
        count--;
        countEL.textContent = count;
    }
})


cartIcon.addEventListener('click',()=>{
    cartContainer.classList.toggle('active');
})

cartCount.addEventListener('click',()=>{
    cartContainer.classList.toggle('active');
})

function updateTotalQty(){
    totalQty = 0;
    const cartItems = document.querySelectorAll('.cart-item')
    cartItems.forEach((item) =>{
        totalQty += Number(item.dataset.quantity);
    })
    cartQty.textContent= totalQty;
}

function removeItemFrommCart(cartItem){
    cartItem.remove();
    updateTotalQty();
    if(totalQty ===0){
        cartItems.classList.add('empty');
        checkoutBtn.classList.add('empty');
    }
}

function addItemtoCart(name, price, imgSrc){
    const totalPrice = price * count;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.dataset.quantity = count;

    cartItem.innerHTML = `
        <img src="${imgSrc}"/>
        <div class="item-details">
            <div class="cart-item-name">${name}</div>
            <div>
                <p class="price-unit">
                    $${price.toFixed(2)} x ${count}
                    <span class="total-price">$${totalPrice.toFixed(2)}</span>
                </p>
            </div>
        </div>
        <button class="delete-item">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
        </button>
    `;

    cartItems.appendChild(cartItem);

    updateTotalQty();

    if(cartItems.classList.contains('empty')){
        cartItems.classList.remove('empty');
        checkoutBtn.classList.remove('empty');
    }

    // attach an event listener to the delete button to remove from cart
    
    const deleteBtn = cartItem.querySelector('.delete-item');
    deleteBtn.addEventListener('click', (event) =>{
        const cartItem =event.target.closest('.cart-item');
        removeItemFrommCart(cartItem);
    })

}

addToCartBtn.addEventListener('click',()=>{
    if(count === 0) return;

    const productName = document.querySelector('.product-name').textContent;
    const productPriceEl = document.querySelector('.price .current-price');
    const productPrice = Number(productPriceEl.textContent.replace('$',''));
    const productImg = document.querySelector('.main-img img').getAttribute('src');

    addItemtoCart(productName, productPrice, productImg);
    cartContainer.classList.add('active');

    count = 0;
    countEL.textContent = count;
})