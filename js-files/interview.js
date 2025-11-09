// ===================================
// Javascript interview questions and answers
// ===================================

import { useEffect, useState } from "react";

//  what’s the difference between var, let, and const — and when would you use each?
const varLetConstAnswer = `
  'var' is function-scoped and can be re-declared and updated.
  'let' is block-scoped and can be updated but not re-declared.
  'const' is block-scoped and cannot be re-declared or reassigned.
`;

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

// ===================================
// React interview questions and answers
// ===================================
// Props vs State
//
const varState = `State is mutable and can be changed within the component, while props are immutable and passed from parent to child components.
`;
const VarProps = `Props are used to pass data and event handlers to child components, while state is used to manage data that can change over time within a component.`;
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
*/

// Controlled Component vs Uncontrolled Component
const controlledComponent =
  "Controlled Components are the components  whose data are managed by react State.";
/*
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
*/
const unControoledComponent =
  " Uncontrolled Components are components  that uses DOM directly  ";
/*
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
const reactHooks =
  "React Hooks are special functions that let you “hook into” React features like state, lifecycle, and context without writing a class.";
const useEffectHook = `useEffect runs after the component has rendered, so it’s perfect for tasks like fetching data, setting up subscriptions, or updating the DOM.
  useEffect runs asynchronously after rendering — good for data fetching, side effects, etc.`;

export function EffectExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const res = fetch("exaample.com/data");
    //  fetch("https://jsonplaceholder.typicode.com/users")
    const data = res.json();
    if (count) {
      console.log(data);
    }
  }, [count]);
  <button onClick={() => setCount(count + 1)} />;
}
const useEffefctPurpose = [
  "Fetching data from an API",
  "Subscribing to events",
  "Updating the document title",
  "Running code after render",
];

const useLayoutHook = `useLayoutEffect, on the other hand, runs synchronously after the DOM is updated but before the browser paints the screen, which makes it ideal for measuring layout or synchronously re-rendering before the user sees the change,
  useLayoutEffect runs synchronously before paint — used when you need to read layout or DOM values before they appear on screen.`;

import { useLayoutEffect, useRef } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    // Measure layout before paint
    const box = boxRef.current;
    console.log("Box width:", box.offsetWidth);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: "200px", height: "100px", background: "green" }}
    />
  );
}

// ===================================
// NextJS interview questions and answers
// ===================================
// Question 1: What are getStaticProps and getServerSideProps in Next.js?
// NextJS interview questions and answers
const nextAns1 = "getStaticProps: builds data at build time (for static pages)";
const nextAns2 = "getServerSideProps: fetches data on every request";
const nextAns3 =
  "getStaticPaths: defines dynamic routes for static generation.";
/*
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  return { props: { data } };
}
*/
// Question 2: How does Next.js handle routing?
const naxtAnsRouting1 =
  "Say: Next.js uses a file-based routing system — every file in the pages directory automatically becomes a route.";
// Question 3: How would you protect a route in Next.js?
const nextAnsProtectedRute =
  "Say: I can use next-auth and wrap protected pages with a custom ProtectedRoute that checks for a session before rendering.";

// Question 1: Why use Tailwind CSS?
const tailwindAns1 =
  "Tailwind speeds up development by using utility classes directly in JSX.";
const tailwindANs2 =
  "It avoids context switching between CSS and JS and keeps styles consistent";
/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Submit
</button> 
*/

// How do you make a layout responsive in Tailwind?
const tailwindAnsLayout =
  "Tailwind uses responsive prefixes like sm:, md:, lg: to apply styles at different breakpoints.";
// ===================================
// Git & Version Control
// ====================================
// Question 1: What’s the difference between git pull and git fetch?
const gitAnsGitFect =
  "git fetch only downloads updates from the remote but doesn’t merge them";
const gitAnsGitPull =
  "while git pull downloads and merges changes into your local branch.";

//   How do you revert a commit?
const gitReveryt = "Say: If I want to undo a commit safely, I use:";
// git revert <commit-id>

// Question 3: How do you create a new branch and push it
const gitnewBranch =
  "git checkout -b feature/dashboard and git push origin feature/dashboard";

//1.   What is the main difference between Next.js and React? Why do developers use Next.js instead of just React?
// Answer (Explanation):
// React is a frontend library, while Next.js is a React framework that adds powerful features like:
// File-based routing (no need for react-router)
// Server-Side Rendering (SSR) and Static Site Generation (SSG) out of the box
// API routes — you can build backend endpoints directly in your project
// Image optimization (next/image)
// Built-in SEO support with the Head component

// 2. Explain the difference between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) in Next.js.

// Answer (Explanation):
// In Next.js, rendering determines where and when your page’s HTML is generated:
// 1.🧩 SSR (Server-Side Rendering)
// A. The HTML is generated on each request (server-side).
// B. Great for pages that need fresh data each time (e.g., dashboard, user profile).
// C. Implemented with getServerSideProps.
//==== How it works:====
// When a user visits your page, the server builds the full HTML page (with data included) and sends it to the browser.
// Example:
// Imagine a news site — when someone opens a news article, the server fetches the article data, renders the page, and sends the ready HTML.
// The user immediately sees the content, and search engines can read it easily.
// When to use:
// When you need real-time data (like dashboards or news).
// For SEO-friendly pages that change often.

// 2. ⚙️ SSG (Static Site Generation)
// A. HTML is generated at build time, not on every request.
// B. Super fast — great for content that doesn’t change often (e.g., blog posts, landing pages).
// C. Implemented with getStaticProps
// ======How it works:========
// The page is built once at build time — before users even visit the site.
// It becomes a static HTML file served super fast from a CDN.
// Example:
// A blog where posts don’t change often — Next.js builds each post page ahead of time, and users instantly get the pre-rendered HTML.
// When to use:
// For content that rarely changes (like blogs or documentation).
// When you need speed and low server cost.

// CSR (Client-Side Rendering)
// A. Data is fetched in the browser after the page loads.
// B. The initial HTML is static, and React updates the page dynamically.
// Done using useEffect.

// ========How it works:========
// The browser loads an empty HTML shell and runs JavaScript to fetch and render the data after the page loads.
// Example:
// A dashboard that updates with user-specific data after login — the page first loads, then fetches data from an API and displays it dynamically.
// When to use:
// For user-specific pages or interactions (like dashboards, chat apps).
// When SEO is not a priority.
