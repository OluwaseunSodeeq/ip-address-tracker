const ipText = document.querySelector(".ipAddress h2");
const timezoneText = document.querySelector(".timezone h2");
const locationText = document.querySelector(".location h2");
const ispText = document.querySelector(".isp h2");
const inputField = document.querySelector(".former");
const form = document.querySelector("form");
let errorDiv = document.querySelector(".error");
const errorMessage = "Invalid Ip Address";
const emptyFieldmsg = "Your Field is empty";
const API_KEY = "at_RYa5PJWLhI2wSZn5fEBO048hrwP0n";


const newurl =
  " https://geo.ipify.org/api/v2/country,city?apiKey=at_ADR3BZza4ZtLUwRjOX7lmi620Cgdk&ipAddress=8.8.8.8 ";

//MAP
let map = L.map("map");
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//CORDINATE FUNCTION
const setCoord = function (map, position) {
  const [lat, lng] = position;
  const observer = new ResizeObserver((enteries) => {
    if (enteries[0].contentRect.width > 1000) {
      map.setView([lat, lng], 13);
    }
    if (
      enteries[0].contentRect.width > 500 &&
      enteries[0].contentRect.width < 1001
    ) {
      map.setView([lat + 0.02, lng], 13);
    }
    if (enteries[0].contentRect.width < 500) {
      map.setView([lat + 0.021, lng], 13);
    }
    // else {
    //   map.setView([lat, lng], 13);
    // }
  });
  observer.observe(body);
};

//======   CUSTOM MARKER =======
const markerFuntion = function (map, position, data) {
  const customIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [26, 30],
    // iconSize: [32, 40],
  });

  const observer = new ResizeObserver((enteries) => {
    if (enteries[0].contentRect.width < 500) {
      L.marker(position, { icon: customIcon }).addTo(map).openPopup();
    } else {
      L.marker(position, { icon: customIcon })
        .addTo(map)
        .bindPopup(`${data.location.city}`)
        .openPopup();
    }
  });

  observer.observe(body);
};

//INFORMATION
const ipInformation = function (data) {
  ipText.textContent = data.ip;
  locationText.textContent = `${data.location.city}, ${data.location.country}`;
  timezoneText.textContent = data.location.timezone;
  ispText.textContent = data.isp;
};

// //RENDERING FUNCTION
const displayIpAdd = async function (ip) {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );
    const data = await res.json();
    ipInformation(data);
    const latitude = data.location.lat; // Adjust the latitude to shift towards the bottom
    const longitude = data.location.lng;
    // console.log(data, [6.96907, 3.48404]);
    setCoord(map, [latitude, longitude]);

    markerFuntion(map, [latitude, longitude], data);
  } catch (error) {
    console.error("Error fetching IP information:", error.message);
  }
};

//Calling display function with default IP
displayIpAdd("192.212.174.101");


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
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
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
