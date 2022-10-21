"use strict";

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
// It's better to calculate the value only once
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}


console.log(bills, tips, totals);
console.log(calcAverage(totals));