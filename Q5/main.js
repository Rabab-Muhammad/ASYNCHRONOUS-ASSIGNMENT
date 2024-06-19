"use strict";
//                              Question # 5
//Write a function executeSequentially that executes two functions fetchData and 
//processData sequentially using Promises, and logs the results in the order they are 
//called.
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then((data) => {
        console.log(data);
        return processData(data);
    })
        .then((processedData) => {
        console.log(processedData);
    })
        .catch((error) => {
        console.error(error);
    });
}
executeSequentially();
