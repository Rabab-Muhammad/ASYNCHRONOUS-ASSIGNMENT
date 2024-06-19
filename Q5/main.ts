
//                              Question # 5
//Write a function executeSequentially that executes two functions fetchData and 
//processData sequentially using Promises, and logs the results in the order they are 
//called.

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}

function executeSequentially(): void {
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
