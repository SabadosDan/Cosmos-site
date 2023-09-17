// Bootstrap carousel initialization

$('.carousel').carousel({
    interval: 4000
})

// Hamburger menu 

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarOptions = document.querySelector(".navbar-options");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbarOptions.classList.toggle("active");
})

document.querySelectorAll(".navibar-link").forEach(n => n.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  navbarOptions.classList.remove("active");
}))

// Purchase button function to add the total price to the cart

document.addEventListener("DOMContentLoaded", function () {
  const purchaseButtons = document.querySelectorAll(".purchase-button");
  const totalPriceElement = document.getElementById("total-price");

  let totalPrice = 0;

  purchaseButtons.forEach(function (purchaseButton) {
    purchaseButton.addEventListener("click", function () {
      const priceString = this.parentElement.querySelector(".price").textContent;
      const price = parseFloat(priceString.replace("€", "").replace(",", "."));

      totalPrice += price;
      totalPriceElement.textContent = totalPrice.toFixed(2) + " €";
    });
  });
});