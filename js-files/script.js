const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_9cW261rGX3O5SvxJyR28kxtbY2fIs&ipAddress=8.8.8.8`;

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
  // if (enteries[0].contentRect.width < 800) {
  if (enteries[0].contentRect.width < 1000) {
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

// To get the device/user Location
const oldinit = async function (ip) {
  try {
    //Getting the user ip
    const res = await fetch(`https://api.ipify.org?format=json`);
    const data = await res.json();
    console.log(data, ip);
    // displayIpAdd("");

    //rendering the user ip
    displayIpAdd(ip);
  } catch (error) {
    console.error(error);
  }
};
// Test
// Closure
console.log("JS Test ");
function parent() {
  let initValue = 0;
  return function () {
    return initValue++;
  };
}
// console.log(parent()); returns the inner function
const parentResult = parent();
console.log(parentResult()); // 0
console.log(parentResult()); // 1
console.log(parentResult()); // 2

// Asjnc Await
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return data;
}

/*
Controlled Component vs Uncontrolled Component
1. Controlled Component:
function ControlledInput() {
const [value, setValue] = React.useState('');
const HnadleChange = () => {setValue(e.target.value)};
const HnadleSubmit = () => console.log(value);};
  return (
  <>
  <form onSubmit={handleSubmit}>
  <input type="text" value={value} onChange={handleChange} />
  <button type="submit">Submit</button>
  <>)
  }

  // Uncontrolled Component:
  function UncontrolledInput() {
  const inputRef = React.useRef(null);
  const handleSubmit = () => {
  console.log(inputRef.current.value);
  };
  return (
  <form onSubmit={handleSubmit}>
  <input type="text" ref={inputRef} />
  <button type="submit">Submit</button>
  </form>    
}
*/
