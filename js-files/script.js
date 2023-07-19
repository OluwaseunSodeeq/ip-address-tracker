const API_KEY = "at_9cW261rGX3O5SvxJyR28kxtbY2fIs";
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=`;
const url1 = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=8.8.8.8`;

//ALL APIS UTILIZED
/*

  IPIFY==== https://geo.ipify.org
  LEAFLET === https://leafletjs.com
  IPAPI === https://ipapi.com

  */
//BAGROUND IMAGE
const body = document.querySelector("body");
const bgImage = document.querySelector(".bgdiv");
const observer = new ResizeObserver((enteries) => {
  if (enteries[0].contentRect.width < 800) {
    bgImage.innerHTML = "";
    const html = `
    <img src="./images/pattern-bg-mobile.png" alt="mobile bacKground Image">
      `;
    bgImage.insertAdjacentHTML("afterbegin", html);
  } else {
    bgImage.innerHTML = "";
    const html = `
    <img src="./images/pattern-bg-desktop.png" alt="desktop bacKground Image">
      `;
    bgImage.insertAdjacentHTML("afterbegin", html);
  }
});

observer.observe(bgImage);
