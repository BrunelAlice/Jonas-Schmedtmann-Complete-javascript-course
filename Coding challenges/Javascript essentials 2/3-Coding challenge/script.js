"use strict";

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return (this.BMI = this.mass / this.height ** 2);
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return (this.BMI = this.mass / this.height ** 2);
    },
};

mark.calcBMI();
john.calcBMI();
function calcOrder(a, b) {
    const array = a.BMI > b.BMI ? [a, b] : [b, a];
    return array;
}

console.log(
    `${calcOrder(mark, john)[0].fullName}'s BMI (${
        calcOrder(mark, john)[0].BMI
    }) is higher that ${calcOrder(mark, john)[1].fullName}'s (${
        calcOrder(mark, john)[1].BMI
    })!`
);
