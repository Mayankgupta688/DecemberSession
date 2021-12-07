var data = 10;

var sum = 0;


setTimeout(() => {
    console.log("Data for SetTimeout 1 is: " + data)
}, 5000)

setTimeout(() => {
    console.log("Data for SetTimeout 2 is: " + data)
}, 15000)

setTimeout(() => {
    console.log("Data for SetTimeout 3 is: " + data)
}, 10000)

console.log("Data from Outside" + data);

// 10 seconds
for(let i = 0 ; i < 10000000 ; i++) {
    sum = sum + i
}

// Not Single Threaded Architecture

// Single threaded execution with multiple thread in Backgroud for Asynchronous process...