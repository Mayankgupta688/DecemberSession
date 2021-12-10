var userName = "Mayank Gupta";

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(userName === "Mayank") {
            console.log("I fulfill my Promise")
        } else {
            console.log("I won't fulfill my Promise")
        }
    }, 10000)
});

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})