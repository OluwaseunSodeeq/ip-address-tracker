const API_KEY = `at_9cW261rGX3O5SvxJyR28kxtbY2fIs`;
const url = `https://geo.ipify.org/api/v2/country?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=8.8.8.8`;

// const {"ip"} = fetch(`https://api.ipify.org?format=json`);
// console.log(ip);

// function App() {
//   const [address, setAddress] = useState(null);
//   const [ipAddress, setIpAddress] = useState("");

//   useEffect(() => {
//     try {
//       const getInitialData = async () => {
//         const res = await fetch(
//           `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=8.8.8.8`
//         );
//         const data = await res.json();
//         setAddress(data);
//         console.log(data);
//       };
//       getInitialData();
//     } catch (error) {
//       console.log(error);
//       console.error(error);
//       console.trace(error);
//     }
//   }, []);
// }
// const asd = new App();
let enteredIpAdd, curIp, curlocation, newPosition, activeIp, olddata;

const ipText = document.querySelector(".ipAddress h2");
const timezoneText = document.querySelector(".timezone h2");
const locationText = document.querySelector(".location h2");
const ispText = document.querySelector(".isp h2");

console.log(ipText, ispText, locationText, timezoneText);

// let position = navigator.geolocation.getCurrentPosition();
const ipInformation = function (data) {
  ipText.textContent = data.ip;
  locationText.textContent = `${data.location.city}, ${data.location.country}`;
  timezoneText.textContent = data.location.timezone;
  ispText.textContent = data.isp;
};

// const curIpAdd = async function () {
//   const res = await fetch(`https://api.ipify.org?format=json`);
//   const data = await res.json();
//   console.log(data);
//   olddata = data.ip;
//   console.log(data.ip);

//   return olddata;
//   // displayIpAdd(enteredIpAdd);
// };
// console.log(curIpAdd());

const displayIpAdd = async function (ip, enteredIpAdd) {
  try {
    console.log(ip);

    activeIp = enteredIpAdd || ip;
    // const res = await fetch(`https://ipapi.co/${activeIp}/json/`);
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${activeIp}`
    );
    const data = await res.json();
    ipInformation(data);
    console.log(data);
    const latitude1 = data.location.lat;
    const longitude1 = data.location.lng;
    console.log(`https://www.google.ng/maps/@${latitude1},${longitude1}`);

    const res1 = await fetch(`https://ipapi.co/${activeIp}/json/`);
    const data1 = await res1.json();
    console.log(data1);

    const latitude = data1.latitude;
    const longitude = data1.longitude;
    console.log(`https://www.google.ng/maps/@${latitude},${longitude}`);
    // const map = L.map("map").scrollWheelZoom({true}).setView([latitude, longitude], 13);
    const map = L.map("map").setView([latitude, longitude], 13);
    // const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //======   CUSTOM MARKER =======

    const customIcon = L.icon({
      iconUrl: "./images/icon-location.svg",
      // iconSize: [40, 60],
      iconSize: [32, 40],
    });

    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup(`${data.location.city}`)
      .openPopup();
  } catch (error) {
    console.log(error);
  }
  // rre = data;
  // return rre;
};
// displayIpAdd("12345");
// displayIpAdd("197.210.71.88");

const init = async function () {
  // const res = await fetch(`https://api.ipify.org?format=json`);
  try {
    const res = await fetch(
      ` https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=`
    );
    const data = await res.json();
    console.log(data);
    displayIpAdd(data.ip, data);
  } catch (error) {
    console.error(error);
  }
};
init();

const form = document.querySelector("form");
// 192.121.225.192
// 185.83.71.12
// 196.240.58.28
const trackerFuntion = function (e) {
  e.preventDefault();
  enteredIpAdd = document.querySelector(".former").value;
  console.log(enteredIpAdd);

  //if the input is empty return an error
  if (enteredIpAdd === "" || enteredIpAdd === " ")
    return console.log("The field is empty");

  // if the user enters any letters return an error

  //if the the ip is not valid retutn an error
  // newPosition = validIp[0];
  // curIp = validIp[1];
  if (newPosition === undefined) return;
  displayIpAdd(_, enteredIpAdd);
};
form.addEventListener("click", trackerFuntion);
// }

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

//
