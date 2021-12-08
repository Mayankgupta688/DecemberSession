var userDetails = {
    name: "Mayank",
    age: 20,
    designation: "Developer",
    address: {
        street: "asdtgsauk",
        city: "Delhi",
        country: ["India", "abc"]
    }
}

var dataArray = [1, 2, 3, 4];

var newArray = [...dataArray]


var newDetails = {
    ...userDetails,
    address: {
        ...userDetails.address,
        country: ["asgdhaskjd", "sadsayudtiyas"]
    }
};

newDetails.address.country = ["asjkdgkjas", "asjgdkas", "asjfdahs"]

delete newDetails.address

console.log(newDetails.name)

debugger;