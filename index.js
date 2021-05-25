const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCabinet = food.split(',').sort(); console.log(foodCabinet);
equipmentCabinet = equipment.split(',').sort(); console.log(equipmentCabinet);
petsCabinet = pets.split(',').sort(); console.log(petsCabinet);
sleepAidsCabinet = sleepAids.split(',').sort(); console.log(sleepAidsCabinet);


//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [ [foodCabinet], [equipmentCabinet], [petsCabinet], [sleepAidsCabinet]];
console.log(cargoHold);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
let number = input.question("Please choose a cabinet number 0-3 ");

console.log('Choices: ' + cargoHold.join(','));

let item = input.question("Please choose an item from lists above ");
if (number <= 3){
  console.log('The cabinet you chose has ' + cargoHold[number]);
} else {
  console.log('Error, your choice was invalid');
}
if (cargoHold[number].includes(item)){
  console.log(`Cabinet # ${number} contains ${item}`);
} else {
  console.log(`Cabinet # ${number} does not contain ${item}`);
}

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.



//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
