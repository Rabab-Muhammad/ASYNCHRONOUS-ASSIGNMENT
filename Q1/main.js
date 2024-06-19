"use strict";
//                           Question # 1
//Write a simple asynchronous TypeScript function fetchGreeting that returns a 
//greeting message after a 2-second delay using setTimeout.
Object.defineProperty(exports, "__esModule", { value: true });
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
}
// Example usage
fetchGreeting().then((message) => console.log(message));
