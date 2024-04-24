document.addEventListener('DOMContentLoaded', function () {

    const articles = document.querySelectorAll('.article');
    let grandTotal = calculateInitialGrandTotal();


    const grandTotalElement = document.querySelector('.totalprice span:last-child');
    grandTotalElement.textContent = grandTotal.toFixed(1);

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
            let montantRemoveArticle = article.querySelector('.Total').textContent // Recuperation du montant total du profuit supprime
            montantRemoveArticle = parseFloat(montantRemoveArticle) // Conversion du la valeurtexte recuprer en valeur numerique pour le calcul
            article.remove(); // Suppression du produit dans le panier
            updateValueCart(montantRemoveArticle); // Mise a jour du montant du panier avec soustraction du montant total du produit  
        });

        /**
         * Fonction de mise a jour de la valeur du panier apres suppressiond d'un produit 
         * 
         * 
         */
        function updateValueCart(montantRemoveArticle) {
            let articleTotalPrice = quantity * price; // Calcul du montant du panier actuel
            articleTotalPrice -= montantRemoveArticle // Soustraction du montant du produit supprime du pamier
            totalElement.textContent = articleTotalPrice.toFixed(1); // Mise a jour du montant du panier
            calculateGrandTotal();
        }
        
        function updateTotalPrice() {
            const articleTotalPrice = quantity * price;
            totalElement.textContent = articleTotalPrice.toFixed(1);
            calculateGrandTotal();
        }

        /**
         * Fonction de mise a jour de la valeur du panier apres suppressiond d'un produit 
         * 
         * 
         */
        function updateValueCart(montantRemoveArticle) {
            let articleTotalPrice = quantity * price; // Calcul du montant du panier actuel
            articleTotalPrice -= montantRemoveArticle // Soustraction du montant du produit supprime du pamier
            totalElement.textContent = articleTotalPrice.toFixed(1); // Mise a jour du montant du panier
            calculateGrandTotal();
        }

        likeBtn.addEventListener('click', function () {
            if (likeBtn.style.color == 'red') {
                likeBtn.style.color = 'black';
            }
            else {
                likeBtn.style.color = 'red';
            }
        });
    });

    function calculateGrandTotal() {
        grandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            grandTotal += parseFloat(totalElement.textContent);
        });
        grandTotalElement.textContent = grandTotal.toFixed(1);
    }

    function calculateInitialGrandTotal() {
        let initialGrandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            initialGrandTotal += parseFloat(totalElement.textContent);
        });
        return initialGrandTotal;
    }
});
