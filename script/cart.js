let total = 0;
let discountParcent = 0.20;
function handleCard(cardElement) {
    const selectedItemsContainer = document.getElementById('cart-items');
    const childNodes = cardElement.childNodes;
    const h2Element = childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = h2Element;
    selectedItemsContainer.appendChild(li);

    const productPrice = cardElement.childNodes[5].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(productPrice);
    const totalTwoDecimal = total.toFixed(2);
    document.getElementById('totalPrice').innerText = totalTwoDecimal;
    const discount = totalTwoDecimal - (totalTwoDecimal * parseFloat(discountParcent));
    document.getElementById('discount').innerText = discount;
}