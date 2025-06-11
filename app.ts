// app.ts

// Example of an interface
interface User {
    name: string;
    age: number;
    isActive?: boolean; // Optional property
}

// Example of an enum
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest" // Enum for user roles
}

// An example of a dictionary of mixed types
interface MixedDictionary {
    [key: string]: string | number | boolean; // Key can be a string, value can be string, number, or boolean
}

// Example of a function with optional parameters. Paramter age is optional.
function createUser(name: string, age?: number): User {
    return {
        name: name,
        age: age || 0, // Default age to 0 if not provided
        isActive: true // Default value for isActive
    };
}




function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

let userName: string = "Dimitri";
console.log(greet(userName));

class Greeter {
    constructor(public message: string) {}

    sayHello() {
        console.log(this.message);
    }
}

let greeter = new Greeter("Greetings from a TypeScript Class!");
greeter.sayHello();

const increment = (counterVal:number) => {
    return ++counterVal;
};

const counter:number = increment(10);

console.log(`Counter value after increment: ${counter}`);

// Array of programming languages
const languages: string[] = ["JavaScript", "TypeScript", "Python", "Java", "C++"];
languages.push("Go");
console.log("Programming Languages:", languages);