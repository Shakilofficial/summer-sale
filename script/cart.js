let total = 0;

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
document.getElementById('cuponField').addEventListener('keyup',function(){
    const text = event.target.value;
    if(text === 'SELL200'){
        cuponButton.removeAttribute('disabled')
    }
    else{
        cuponButton.setAttribute('disabled', true);
    }
})
document.getElementById('cuponButton').addEventListener('click',function(){

})