const firstHeader = document.querySelector(".article__header");

firstHeader.textContent = `Welcome to the Hipster Blog`;

const allHeaders = document.querySelectorAll(".article__header");

allHeaders.forEach(
  function(currentValue) {
    currentValue.classList = "article__header important";
  }
)
console.log(firstHeader);
