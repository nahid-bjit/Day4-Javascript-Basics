console.log("Hello World")

// Learning Javascript variables and Object

const carObject = {
    color: "Red",
    model: "ABCD",
    numberOfSeats: 2,
    isCondtionOkay: true,
}

console.log("The color of our car is: ", carObject.color, "The model of our car is: ", carObject.model);
console.log("The model number of our car is: ", carObject.model);

// Javascript Arrays
const arrayOfCars= [{
    id: 1,
    color: "Red",
    model: "ABCD",
    numberOfSeats: 2,
    isCondtionOkay: true,
},
 {
    id: 2,
    color: "Red",
    model: "ABCD",
    numberOfSeats: 2,
    isCondtionOkay: true,
}
]

arrayOfCars.push({color: "black"})

console.log("The array of the car is: ", arrayOfCars)


//Javascript - Functions

function sumFunction (x, y) {
    const sum = x + y;

    console.log("The value of x is ", x)
    console.log("The value of y is ", y)

    console.log("summation: ", sum)
}

sumFunction(5,"nahid")

// Javascript , Function Example 2

function sumFunction (x, y) {
    const sum = x + y;

    console.log("The value of x is ", x)
    console.log("The value of y is ", y)

    console.log("summation: ", sum)
}

sumFunction(5,"nahid")

//arrow function


//traditional declaring
function sumFunction1 (x, y)
{
    const sum = x + y;
    return sum;
};

console.log("The summation1 is: ", sumFunction1(5,6));

//arrow function declaring
const sumFunction2 = (x, y) => {
    const sum = x + y;
    return sum;
};

console.log("The summation2 is: ", sumFunction2(5,6));