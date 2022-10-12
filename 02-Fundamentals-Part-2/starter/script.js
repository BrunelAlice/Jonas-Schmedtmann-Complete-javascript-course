'use strict';

function describeCountry(country, population, capitalCity) {
    const result = `${country} has ${population} people and its capital city is ${capitalCity}.`;
    return result;
};

const unitedKingdom = describeCountry('United Kingdom', '70 000 000', 'London');
console.log(unitedKingdom);

const france = describeCountry('France', '60 000 000', 'Paris');
console.log(france);

const brazil = describeCountry('Brazil', '214 000 000', 'Brasilia');
console.log(brazil);