document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.article');
    let grandTotal = 0;

    articles.forEach(article => {
        const minusBtn = article.querySelector('.buttonminus-btn');
        const plusBtn = article.querySelector('.buttonplus-btn');
        const quantityElement = article.querySelector('.quantity-btn');
        const priceElement = article.querySelector('.price');
        const totalElement = article.querySelector('.Total');
        const likeBtn = article.querySelector('.like-Btn');
        const deleteBtn = article.querySelector('.delete-btn');

        let quantity = parseFloat(quantityElement.textContent);
        let price = parseFloat(priceElement.textContent); 

        plusBtn.addEventListener('click', function () {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', function () {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', function () {
            article.remove();
            updateTotalPrice();
        });

        function updateTotalPrice() {
            const articleTotalPrice = quantity * price; 
            totalElement.textContent = articleTotalPrice.toFixed(1);
            calculateGrandTotal();
        }

        likeBtn.addEventListener('click', function () {
            likeBtn.style.color = 'red';
        });
    });

    function calculateGrandTotal() {
        grandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            grandTotal += parseFloat(totalElement.textContent);
        });
        const grandTotalElement = document.querySelector('.totalprice span:last-child');
        grandTotalElement.textContent = grandTotal.toFixed(1);
    }
});
