const ipText = document.querySelector(".ipAddress h2");
const timezoneText = document.querySelector(".timezone h2");
const locationText = document.querySelector(".location h2");
const ispText = document.querySelector(".isp h2");
const inputField = document.querySelector(".former");
const form = document.querySelector("form");
let errorDiv = document.querySelector(".error");
const errorMessage = "Invalid Ip Address";
const emptyFieldmsg = "Your Field is empty";

//MAP
let map = L.map("map");
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//CORDINATE FUNCTION
const setCoord = function (map, position) {
  map.setView(position, 13);
};

//======   CUSTOM MARKER =======
const markerFuntion = function (map, position, data) {
  const customIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
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
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=${ip}`
    );
    const data = await res.json();
    const latitude = data.location.lat;
    const longitude = data.location.lng;

    ipInformation(data);
    setCoord(map, [latitude, longitude]);

    markerFuntion(map, [+latitude, +longitude], data);
  } catch (error) {
    console.log(error);
  }
};

const init = async function (ip) {
  try {
    //Getting the user ip
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();

    // displayIpAdd("");

    //rendering the user ip
    displayIpAdd(ip);
  } catch (error) {
    console.error(error);
  }
};

//calling init function with default ip address
init("192.212.174.101");

//Focus
function focusfunc() {
  errorDiv.classList.add("hide");
}
inputField.addEventListener("focus", focusfunc);
// SEARCH FUNCTIONALITIES
const trackerFuntion = async function (e) {
  e.preventDefault();
  let newIpAdd1 = inputField.value;
  const newIpAdd = newIpAdd1.replaceAll(" ", "");
  inputField.value = "";

  //if the input is empty return an error
  if (newIpAdd === "" || newIpAdd === " ") {
    errorDiv.textContent = emptyFieldmsg;
    errorDiv.classList.remove("hide");
    return;
  }

  //if the the ip is not valid return an error
  const res1 = await fetch(`https://ipapi.co/${newIpAdd}/json/`);
  const data1 = await res1.json();
  if (data1.reason === "Invalid IP Address") {
    errorDiv.textContent = errorMessage;
    errorDiv.classList.remove("hide");
    return;
  }

  const ip = data1.ip;

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=${ip}`
  );
  const data = await res.json();
  const latitude = data.location.lat;
  const longitude = data.location.lng;
  ipInformation(data);
  setCoord(map, [latitude, longitude]);
  markerFuntion(map, [latitude, longitude], data);
};
form.addEventListener("submit", trackerFuntion);

// IP addresses
//"197.210.71.88" lagos
//"192.212.174.101"
//102.88.35.42
// 192.121.225.192 Stockholm
// 185.83.71.12 royal tunbridge Englnad
// 196.240.58.28 paris
