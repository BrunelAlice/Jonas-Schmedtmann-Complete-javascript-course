'use strict';

// First data set : Dolphins score 44, 23, 71. Koalas score 65, 54, 49


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

const checkWinner = (averageDolphins, averageKoalas) => {
      if (averageDolphins >= 2 * averageKoalas) {
        return `Dolphins wins (${averageDolphins} vs. ${averageKoalas}).`;

    } else if (averageKoalas >= 2 * averageDolphins) {
        return `Koalas wins (${averageKoalas} vs. ${averageDolphins}).`;

    } else {
        return `No winner.`
    }
};


checkWinner(averageDolphins, averageKoalas);

// Second data set :Dolphins score 85, 54, 41. Koalas score 23, 34, 27