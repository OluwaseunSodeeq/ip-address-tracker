// Javscript
// Function Scope
var functionScopeExample = "This is a function scope";

var functionScopeExample =
  "A function scope variable can be re-declared and updated";
// Block Scope
const constTantExample =
  "It is a block scope variable and cannot be re-declared or reassigned";
let letExample =
  "It is a block scope variable and can be updated but cannot be re-declared";

console.log(functionScopeExample);
console.log(constTantExample);
console.log(letExample);

// Hoisting
// console.log(hoistingExample);
function hoistingExample() {
  console.log(
    "This function is hoisted i.e it can be called before its declaration"
  );
  return "This function is hoisted";
}
const hoistingExamplee = hoistingExample();
console.log(hoistingExamplee);

// difference between == and ===
console.log(5 == "5"); // true it checks value only
console.log(5 === "5"); // false it checks value and type

// Callback Function

// Closure
function outerFunction() {
  let innerFunctionSiblings = "I am a sibling with inner function";
  function innerFunction() {
    console.log(innerFunctionSiblings);
  }
  return innerFunction;
}
const closureResult = outerFunction();

// Synchronous vs Asynchronous
console.log("Synchronous Example Start");
console.log("This is Synchronous Example End");

// Asynchronous
console.log("Asynchronous Example Start");
async function asyncExample() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
asyncExample();
console.log("Asynchronous Example End");
// React interview questions and answers
// Props

/*
import {useState} from "react"
function PropsContainer ({props}){
return <p>Hello everone, here is your value {props}</p>
}
edxport function App (){
const [props,setProps]  =  useState(true)
rturn(
<div>
<PropsContainer props = {props}/>
</div>)
}

// COntrolled Components are the components  whose data are managed by react State.
Controlled Component vs Uncontrolled Component
// Controlled Component Examples:
1. function ControlledInput() {
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
2. function ControlledDataInput(){
const [inputData setInputData] = useState("");
const function handleChnage(e){
setInputData(e.target.value)
}
return (
<form>
<input type={text} value={inputData} onChange={handleChange} />
)
}

// Uncontrolled Components are components  that uses DOM directly
// Uncontrolled
// Uncontrolled Component Examples:
  1. function UncontrolledInput() {
  const inputRef = React.useRef(null);
  const handleSubmit = () => {
  console.log(inputRef.current.value);
  };
  return (
  <form onSubmit={handleSubmit}>
  <input type="text" ref={inputRef} />
  <button type="submit">Submit</button>
  </form>   
 2. <input ref={inputRef} />
*/

// NextJS interview questions and answers
