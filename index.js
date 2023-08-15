// To Install package `npm i spr_censorify`
var censor = require("spr_censorify"); // To Import The Package

console.log("\n PreDefine  Censored Words : ");
console.log(censor.getCensoredWords());

// Censor a sample text
console.log(`\n ${censor.censor("Some very sad, bad and mad text.")}`);

// Add a custom censored word
console.log("\n To Add a Custom Censored Word :");
censor.addCensoredWord("gloomy");

// Output the updated list of censored words
console.log(censor.getCensoredWords());

// Censor another sample text

console.log(`\n ${censor.censor("A very gloomy day.")} \n`);
