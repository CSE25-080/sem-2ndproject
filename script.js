const buttons = document.querySelectorAll(".card button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});