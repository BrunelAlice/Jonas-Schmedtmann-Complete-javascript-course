'use strict';

// First data set : Dolphins score 44, 23, 71. Koalas score 65, 54, 49
// Second data set :Dolphins score 85, 54, 41. Koalas score 23, 34, 27

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

const checkWinner = (averageDolphins, averageKoalas) => {
    const winnerDolphins = averageDolphins >= 2 * averageKoalas;
    const winnerKoalas = averageKoalas >= 2 * averageDolphins;
    
    if (winnerDolphins == true) {
        return `Dolphins wins (${averageDolphins} vs. ${averageKoalas}).`;

    } else if (winnerKoalas == true) {
        return `Koalas wins (${averageKoalas} vs. ${averageDolphins}).`;

    } else {
        return `No winner.`
    }
};


console.log(checkWinner(averageDolphins, averageKoalas));