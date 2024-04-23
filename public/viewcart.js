function buyProduct(productId) {
    // Display buy message
    var buyMessage = document.getElementById("buy-message");
    buyMessage.style.display = "block";

    // Remove product from the list
    var product = document.getElementById(productId);
    product.parentNode.removeChild(product);

    // Hide buy message after 2 seconds
    setTimeout(function () {
        buyMessage.style.display = "none";
    }, 2000);
}