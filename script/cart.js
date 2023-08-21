let total = 0;
let discountPercentage = 0;

function calculateAllValues() {
    const totalPriceElement = document.getElementById('totalPrice');
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');

    const discountAmount = total * (discountPercentage / 100);
    const totalWithDiscount = total - discountAmount;

    totalElement.innerText = totalWithDiscount.toFixed(2);
    totalPriceElement.innerText = total.toFixed(2);
    discountElement.innerText = discountAmount.toFixed(2);
}

function clearCart() {
    total = 0;
    discountPercentage = 0;
    const selectedItemContainer = document.getElementById('cart-items');
    selectedItemContainer.innerHTML = '';
    calculateAllValues();
    const cuponField = document.getElementById('cuponField');
    cuponField.value = '';
}

function handleCard(cardElement) {
    const selectedItemContainer = document.getElementById('cart-items');
    elementName = cardElement.childNodes[3].childNodes[3].innerText;
    const orderNumber = selectedItemContainer.childElementCount + 1;
    const li = document.createElement('li');
    li.innerText = `${orderNumber}. ${elementName}`;
    li.style.listStyle = "none";
    selectedItemContainer.appendChild(li);
    const price = cardElement.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const totalTwoDecimal = total.toFixed(2);
    document.getElementById('totalPrice').innerText = totalTwoDecimal;
}

function updatePurchaseButton() {
    const purchaseButton = document.getElementById('purchaseButton');

    if (total > 0) {
        purchaseButton.removeAttribute('disabled');
    }
    else {
        purchaseButton.setAttribute('disabled', true);
    }
}

document.getElementById('cuponField').addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (text === 'SELL200' || total >= 200) {
        cuponButton.removeAttribute('disabled')
    }
    else {
        cuponButton.setAttribute('disabled', true);
    }
    updatePurchaseButton();
});

document.getElementById('cuponButton').addEventListener('click', function () {
    const totalElement = document.getElementById('totalPrice');
    const totalValue = parseFloat(totalElement.innerText);

    if (totalValue >= 200) {
        discountPercentage = 20;
    }
    else {
        discountPercentage = 0;
    }

    calculateAllValues();
    updatePurchaseButton();
})

document.getElementById('goHomeButton').addEventListener('click', function () {
    clearCart();
    updatePurchaseButton();
})