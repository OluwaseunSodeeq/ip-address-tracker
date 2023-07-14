const API_KEY = `at_9cW261rGX3O5SvxJyR28kxtbY2fIs`;

const url = `https://geo.ipify.org/api/v2/country?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=8.8.8.8`;

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(``);
        const data = await res.json();
        setAddress(data);
      };
    } catch (error) {
      console.log(error);
      console.error(error);
      console.trace(error);
    }
  });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.ng/maps/@${latitude},${longitude}`);
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
        .bindPopup("I'm here")
        .openPopup();
    },

    function () {
      console.log("error");
    }
  );
}

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
