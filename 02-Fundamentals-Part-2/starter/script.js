"use strict";

/*
 
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
*/

// Function declarations vs. expressions

// Function declaration : can be used before it's declared
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationBrazil = percentageOfWorld1(214);
const populationFrance = percentageOfWorld1(60);
const populationUK = percentageOfWorld1(70);
//console.log(populationBrazil, populationFrance, populationUK);

// Function expression : function value stored in a variable
const percentageOfWorld2 = function percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const popBrazil = percentageOfWorld1(214);
const popFrance = percentageOfWorld1(60);
const popUK = percentageOfWorld1(70);
//console.log(popBrazil, popFrance, popUK);

// Arrow functions : shorter, has no 'this' keyword
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const brazil = percentageOfWorld3(214);

// Function calling function
function describePopulation(country, population) {
    return `${country} has ${population} which is about ${percentageOfWorld1(
        population
    )}% of the world`;
}

//console.log(describePopulation('Brazil', 214), describePopulation('France', 60), describePopulation('United Kingdom', 70));

//--------------ARRAYS-------------//

const populations = [214, 60, 70, 235];
//console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];

//console.log(percentages);

//--------------ARRAYS METHODS-------------//
const neighbours = ["Spain", "Germany", "Italy"];
neighbours.push("Utopia");
//console.log(neighbours);
neighbours.pop();
//console.log(neighbours);

if (neighbours.includes("Germany")) {
    //console.log("You must be in Europe!");
}

neighbours[neighbours.indexOf("Germany")] = "Belgium";
//console.log(neighbours);

//--------------OBJECTS-------------//

const myCountry = {
    country: "France",
    capital: "Paris",
    language: "French",
    population: 60,
    neighbours: ["Spain", "Germany", "Italy"],
    describe: function () {
        return `${this.country} has ${this.language}-speaking people, ${neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    //THIS WORKS
    
    checkIsland: function () {
        return (this.isIsland = this.neighbours.length === 0 ? true : false);
    },
    

    //THIS DOESN'T WORK

     /*
    checkIsland: function () {
        return this.neighbours.length === 0 ? true : false;
    },
    isIsland: this.checkIsland(), // THIS WOULD NEVER WORK 

    //WHY THIS DOESN'T WORK //
    First, assigning a calculated function to a propriety would require the object to calculate its own propriety when called which would required unecessary efforts.
    Then this keyword is used in function body, objects doesn’t have this context. this refers to an object that is calling the function with that this keyword. isIsland: this.checkIsIsland won’t work because it's not previously called, and also this refers to the global object, or undefined in strict mode and because it is an anonymous function

    */
};

// If checkIsland isn't called before, myCountry.isIsland will return undefined
console.log(myCountry.checkIsland()); // false
console.log(myCountry.isIsland); // false

/*
console.log(
    `${myCountry.country} has ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
*/

console.log(myCountry.describe());

// LECTURE: Dot vs.Bracket Notation
//console.log(myCountry.population);
myCountry.population += 2;
//console.log(myCountry.population);
//myCountry["population"] -= 2;
console.log(myCountry.population);


