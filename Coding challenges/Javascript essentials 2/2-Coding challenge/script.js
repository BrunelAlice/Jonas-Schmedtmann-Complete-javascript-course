// Test data: 125, 555 and 44

function calcTip(billValue) {
    const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    console.log(`The tip is : ${tip}`);
    return tip;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(totals);