const API_KEY = "at_9cW261rGX3O5SvxJyR28kxtbY2fIs";
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=`;
const url1 = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=8.8.8.8`;

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
const init = async function () {
  // const res = await fetch(`https://api.ipify.org?format=json`);
  try {
    //Getting the user ip
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();
    console.log(data);
    //rendering the user ip
    // displayIpAdd(data.ip);
    displayIpAdd("");
  } catch (error) {
    console.error(error);
  }
};
// init();

// const newF = async function () {
//   const res = await fetch(
//     `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=8.8.8.8`
//   );
//   const data = res.json();
//   console.log(data);
// };
// newF();
const displayIpAdd = async function (ip) {
  try {
    document.getElementById("map").innerHTML = "";
    console.log(ip);
    // enteredIpAdd = "192.121.225.192";
    // activeIp = enteredIpAdd || ip;
    // const newUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress${activeIp.ip}`;
    // let newUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress$=${ip}`;

    // const res = await fetch(`https://ipapi.co/${ip}/json/`);
    // const res = await fetch(newUrl, { mode: "no-cors" });
    // const res = await fetch(`${newUrl}`);
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=${ip}`
    );
    const data = await res.json();
    console.log(data);
    ipInformation(data);
    const latitude = data.location.lat;
    const longitude = data.location.lng;
    // console.log(`https://www.google.ng/maps/@${latitude1},${longitude1}`);

    // const res1 = await fetch(`https://ipapi.co/${activeIp}/json/`);
    // const data1 = await res1.json();
    // console.log(data1);

    // const latitude = data1.latitude;
    // const longitude = data1.longitude;
    // console.log(`https://www.google.ng/maps/@${latitude},${longitude}`);
    // const map = L.map("map").scrollWheelZoom({true}).setView([latitude, longitude], 13);
    // const map = L.map("map").setView([latitude, longitude], 13);
    // const map = L.map("map").setView([51.505, -0.09], 13);

    // const getUsers = () => {
    //   axios
    //     .get(`https://cors-anywhere.herokuapp.com/${newUrl}`)
    //     .then((response) => {
    //       const users = response.data.data;
    //       console.log(`GET users`, users);
    //     })
    //     .catch((error) => console.error(error));
    // };
    // getUsers();

    let map = L.map("map").setView([latitude, longitude], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (ip) {
      console.log("it worked");

      map = L.map("map").flyTo([latitude, longitude], 13, {
        animate: true,
      });
    }

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
// displayIpAdd();
// displayIpAdd("12345");
// "102.88.35.42"
// displayIpAdd("102.88.35.42");
// displayIpAdd("197.210.71.88"); lagos
// displayIpAdd("192.212.174.101");

//==================new One=============
let map;
const presentFun = function (map, lat, lng) {
  map = L.map("map").setView([lat, lng], 13);
  return [map, lat, lng];
};
const mapFuntionalities = function (map) {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
};
const markerFuntion = function (map, latitude, longitude, data) {
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
};

const newInit = async function () {
  try {
    //Getting the user ip
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();
    console.log(data);
    const ip = data.ip;
    // const ip = "196.240.58.28";
    const res1 = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=${ip}`
    );
    const data1 = await res1.json();
    console.log(data1);
    ipInformation(data1);
    const latitude = data1.location.lat;
    const longitude = data1.location.lng;
    //rendering the user ip
    const mapp = presentFun(map, latitude, longitude);
    mapFuntionalities(mapp[0]);
    markerFuntion(mapp[0], latitude, longitude, data1);
    // console.log(...mapp[0]);

    // return mapp[0];
  } catch (error) {
    console.error(error);
  }
};
// const mapp = newInit();

// newInit();
const fltmapTo = function (map, position) {
  map.flyTo(position, 13, {
    animate: true,
  });
  return map;
};
// =================to here==========

const form = document.querySelector("form");
// 192.121.225.192 Stockholm
// 185.83.71.12 royal tunbridge Englnad
// 196.240.58.28 paris
const trackerFuntion = async function (e) {
  e.preventDefault();
  const newIpAdd = document.querySelector(".former").value;
  console.log(newIpAdd);

  //if the input is empty return an error
  if (newIpAdd === "" || newIpAdd === " ")
    return console.log("The field is empty");

  // if the user enters any letters return an error

  //if the the ip is not valid retutn an error
  const res1 = await fetch(`https://ipapi.co/${newIpAdd}/json/`);
  const data1 = await res1.json();
  console.log(data1);
  if (data1.reason === "Invalid IP Address")
    return console.log("Invalid IP Address");

  // displayIpAdd(data1.ip);
  // displayIpAdd(enteredIpAdd);
  const ip = data1.ip;
  console.log(ip);

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=${ip}`
  );
  const data = await res.json();
  console.log(data);
  ipInformation(data);
  const latitude = data.location.lat;
  const longitude = data.location.lng;
  //rendering the user ip

  // console.log(mapp);
  // const res2 = await fetch(mapp);
  // const data2 = await res2.json();
  // console.log(data2);
  // console.log(map);

  // const mapp = presentFun(map, latitude, longitude);
  // mapFuntionalities(map);
  // const map = L.map("map").setView([latitude, longitude], 13);
  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  // }).addTo(map);
  map = map.remove();
  markerFuntion(map, latitude, longitude, data);
  fltmapTo(map, [latitude, longitude]);
};
form.addEventListener("click", trackerFuntion);
// }

//BAGROUND IMAGE
const body = document.querySelector("body");
const bgImage = document.querySelector(".bgdiv");
const observer = new ResizeObserver((enteries) => {
  if (enteries[0].contentRect.width < 850) {
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
const searchFuntion = async function () {};
