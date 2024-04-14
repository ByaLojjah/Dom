const quantityBtns = document.querySelectorAll('.quantity-btn');
const deleteBtns = document.querySelectorAll('.delete-btn');
const likeBtns = document.querySelectorAll('.like-btn');
let totalPrice = 0;

quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const item = btn.parentElement;
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);

        if (action === 'increase') {
            quantity++;
        } else if (action === 'decrease' && quantity > 1) {
            quantity--;
        }

        quantityElement.textContent = quantity;
        updateTotalPrice();
    });
});

deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.remove();
        updateTotalPrice();
    });
});

likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
    });
});

function updateTotalPrice() {
    const quantities = document.querySelectorAll('.quantity');
    let total = 0;

    quantities.forEach(quantity => {
        const item = quantity.parentElement;
        const price = 10; // Replace with actual price of the item
        const itemTotal = parseInt(quantity.textContent) * price;
        total += itemTotal;
    });

    document.getElementById('total-price').textContent = total;
}

updateTotalPrice(); // Update total price initially
