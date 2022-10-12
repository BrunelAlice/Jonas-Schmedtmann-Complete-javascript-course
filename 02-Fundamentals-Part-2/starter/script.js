'use strict';

function describeCountry(country, population, capitalCity) {
    const result = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return result;
};

/*
const unitedKingdom = describeCountry('United Kingdom', '70 000 000', 'London');
console.log(unitedKingdom);

const france = describeCountry('France', '60 000 000', 'Paris');
console.log(france);

const brazil = describeCountry('Brazil', '214 000 000', 'Brasilia');
console.log(brazil);
*/

// Function declarations vs. expressions

// Function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const populationBrazil = percentageOfWorld1(214);
const populationFrance = percentageOfWorld1(60);
const populationUK = percentageOfWorld1(70);
console.log(populationBrazil, populationFrance, populationUK);

// Function expression
const percentageOfWorld2 = function percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const popBrazil = percentageOfWorld1(214);
const popFrance = percentageOfWorld1(60);
const popUK = percentageOfWorld1(70);

console.log(popBrazil, popFrance, popUK);

// Arrow functions
const percentageOfWorld3 = population => (population / 7900) * 100;
const brazil = percentageOfWorld3(214);
console.log(brazil);