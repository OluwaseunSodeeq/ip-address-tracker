//BAGROUND IMAGE
const body = document.querySelector("body");
const bgImage = document.querySelector(".bg");
const observer = new ResizeObserver((enteries) => {
  if (enteries[0].contentRect.width < 850) {
    bgImage.innerHTML = "";
    const html = `
    <img src="./images/pattern-bg-desktop.png" alt="desktop bacKground Image">

      `;
    bgImage.insertAdjacentHTML("afterbegin", html);
  } else {
    bgImage.innerHTML = "";
    const html = `
    <img src="./images/pattern-bg-mobile.png" alt="mobile bacKground Image">


      `;
    bgImage.insertAdjacentHTML("afterbegin", html);
  }
});
// observer.observe(bgImage);
