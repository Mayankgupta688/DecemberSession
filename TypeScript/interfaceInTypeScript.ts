var userName: string;

interface IEmployee {
    userName: string;
    userAge: number;
    getDetails: (data: string) => (void);
}

var employee: IEmployee = {
    userName: "Mayank",
    userAge: 20,
    getDetails: (data: string) => {
        console.log(data)
    }
}

var employeeTwo: IEmployee = {
    userName: "Anshul",
    userAge: 30,
    getDetails: () => {
        console.log(userName)
    }
}

var employeeThree: IEmployee = {
    userName: "Meha",
    userAge: 30,
    getDetails: () => {
        console.log(userName)
    }
}