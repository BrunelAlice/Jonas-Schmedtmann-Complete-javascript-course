
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
    1. Calculate the average score for each team, using the test data below

    2. Compare the team's average scores to determine the winner of the competition,
        and print it to the console. Don't forget that there can be a draw, so test for that
        as well (draw means they have the same average score)

    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
        team only wins if it has a higher score than the other team, and the same time a
        score of at least 100 points. Hint: Use a logical operator to test for minimum
        score, as well as multiple else-if blocks 😉

    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
        both teams have the same score and both have a score greater or equal 100
        points. Otherwise, no team wins the trophy
*/

// First data set : Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;

// Second data set : Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//const averageScoreDolphins = (97 + 112 + 101) / 3;
//const averageScoreKoalas = (109 + 95 + 123) / 3;

// Third data set : Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//const averageScoreDolphins = (97 + 112 + 101) / 3;
//const averageScoreKoalas = (109 + 95 + 106) / 3;

let winner = Math.max(averageScoreDolphins, averageScoreKoalas);

// Answer to 1
if (averageScoreDolphins === averageScoreKoalas) {
    console.log(`It's a draw`);
} else if (winner === averageScoreDolphins) {
    console.log(`Winner are Dolphins`);
} else {
    console.log(`Winner are Koalas`);
};

console.log(`Dolphins : ${averageScoreDolphins}, Koalas : ${averageScoreKoalas}`);

// Answer to 2
if (winner > 100 && averageScoreDolphins > averageScoreKoalas ) {
    console.log(`Winner are Dolphins`);
}  else if (winner < 100) {
        console.log(`Nobody wins`);
} else if (averageScoreKoalas === averageScoreDolphins) {
    console.log(`It's a draw`);
} else {
    console.log(`Winner are Koalas`);
};

// Answer to 3
if (winner > 100 && averageScoreDolphins > averageScoreKoalas) {
    console.log(`Winner are Dolphins`);
} else if (winner < 100) {
    console.log(`Nobody wins`);
} else if (winner >= 100 && averageScoreKoalas === averageScoreDolphins) {
    console.log(`It's a draw`);
} else {
    console.log(`Winner are Koalas`);
};
