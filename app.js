"use strict";
// app.ts
// An api url for demonstration purposes
const base_url = "https://dte-apps.com/gameapi";
const categoriies_url = `${base_url}/category/get-all/`;
// Fetching categories from the API
fetch(categoriies_url)
    .then(response => {
    console.log("Status:", response.status);
    return response.text();
})
    .then(text => {
    console.log("Raw response:", text);
    // Try to parse as JSON if you expect JSON
    try {
        const data = JSON.parse(text);
        console.log("Categories fetched successfully:", data);
    }
    catch (e) {
        console.error("Response is not valid JSON:", text);
    }
})
    .catch(error => {
    console.error("Error fetching categories:", error);
});
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
let userName = "Dimitri";
console.log(greet(userName));
class Greeter {
    constructor(message) {
        this.message = message;
    }
    sayHello() {
        console.log(this.message);
    }
}
let greeter = new Greeter("Greetings from a TypeScript Class!");
greeter.sayHello();
const increment = (counterVal) => {
    return ++counterVal;
};
const counter = increment(10);
console.log(`Counter value after increment: ${counter}`);
// Array of programming languages
const languages = ["JavaScript", "TypeScript", "Python", "Java", "C++"];
languages.push("Go");
console.log("Programming Languages:", languages);
