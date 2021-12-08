const userDetails = {
    name: "Mayank",
    age: 20
}

Object.freeze(userDetails)

userDetails.age = 25;

console.log(userDetails.age);

const dataArray = [1, 2, 3];

dataArray.push(4)

console.log(dataArray.length)