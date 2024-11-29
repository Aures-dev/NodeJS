console.log("Hello World");

const math = require("./math.js");
const aireSurface = require("./aireSurface.js");

// const freezingPointC = 0;
// const boilingPointC = 100;

// const freezingPointF = math.celsiusToFahrenheit(freezingPointC);
// const boilingPointF = math.celsiusToFahrenheit(boilingPointC);

// console.log(`The freezing point of water in Fahrenheit is ${freezingPointF} `);
// console.log(`The boiling point of water in Fahrenheit is ${boilingPointF} `);

// console.log(math.add(6, 10));

console.log(aireSurface.aireCarré(6));
console.log(aireSurface.aireCercle(5));
console.log(aireSurface.aireRectangle(2, 3));
