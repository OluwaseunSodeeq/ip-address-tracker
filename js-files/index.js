const ipText = document.querySelector(".ipAddress h2");
const timezoneText = document.querySelector(".timezone h2");
const locationText = document.querySelector(".location h2");
const ispText = document.querySelector(".isp h2");
const form = document.querySelector("form");

//MAP
let map = L.map("map");
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
// setCoord(map, [51.505, -0.09]);
// 6.45197 3.33115

//CORDINATE FUNCTION
const setCoord = function (map, position) {
  map.setView(position, 13);
};

//======   CUSTOM MARKER =======
const markerFuntion = function (map, position, data) {
  const customIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
    // iconSize: [40, 60],
    iconSize: [32, 40],
  });

  L.marker(position, { icon: customIcon })
    .addTo(map)
    .bindPopup(`${data.location.city}`)
    .openPopup();
};

//INFORMATION
const ipInformation = function (data) {
  ipText.textContent = data.ip;
  locationText.textContent = `${data.location.city}, ${data.location.country}`;
  timezoneText.textContent = data.location.timezone;
  ispText.textContent = data.isp;
};

//RENDERING FUNCTION
const displayIpAdd = async function (ip) {
  try {
    console.log(ip);

    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=${ip}`
    );
    const data = await res.json();
    console.log(data);
    const latitude = data.location.lat;
    const longitude = data.location.lng;
    console.log(latitude, longitude);

    ipInformation(data);
    setCoord(map, [latitude, longitude]);
    console.log(map);

    markerFuntion(map, [+latitude, +longitude], data);
  } catch (error) {
    console.log(error);
  }
};

const init = async function () {
  try {
    //Getting the user ip
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();
    console.log(data);
    //rendering the user ip
    console.log(data.ip);

    displayIpAdd("");
  } catch (error) {
    console.error(error);
  }
};
init();

// SEARCH FUNCTIONALITIES
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
  const latitude = data.location.lat;
  const longitude = data.location.lng;
  ipInformation(data);
  setCoord(map, [latitude, longitude]);
  markerFuntion(map, [latitude, longitude], data);
};
form.addEventListener("click", trackerFuntion);
// }
// IP addresses
//"197.210.71.88" lagos
//"192.212.174.101"
//102.88.35.42
// 192.121.225.192 Stockholm
// 185.83.71.12 royal tunbridge Englnad
// 196.240.58.28 paris
