"use strict";
// Personal Message
let person_name = "Qammar Zaman";
console.log(`Hello ${person_name}, would you like to learn some Python today?`);
// Name Cases
// Upper Case
let person_lowerCase = person_name.toLowerCase(); // lower
let person_UpperCase = person_name.toUpperCase(); // uppercase
console.log(`Upper Case => ${person_UpperCase}`);
console.log(`Lower Case => ${person_lowerCase}`);
let TitleCase = person_lowerCase
    .split(" ")
    .map((l) => l[0].toUpperCase() + l.substring(1))
    .join(" "); //
console.log(`Title Case => ${TitleCase}`);
let famouseQuote = "It is also a charity to utter a good word";
let quoteAuthor = "Prophet Muhammad (P.B.U.H)";
console.log(`${quoteAuthor} said, "${famouseQuote}"`);
let message = "The ultimate aim of the ego is not to see something, but to be something.";
let famousePerson = "Allama Muhammad Iqbal";
console.log(`${famousePerson} said, "${message}"`);
let personeName = "\t Muhammad Ali \t";
console.log(`With WhiteSpaces=> "${personeName}"`);
console.log(`Without WhiteSpaces => "${personeName.trim()}"`);
// Number Eight
console.log("================================================================================================");
console.log("Addition 8+5=", 8 + 5);
console.log("================================================================================================");
console.log("Multiplication 8*5=", 8 * 5);
console.log("================================================================================================");
console.log("Subtraction 8-5=", 8 - 5);
console.log("================================================================================================");
console.log("Division 8/4=", 8 / 5);
console.log("================================================================================================");
// Print your favourite number
const favoriteNumber = 8;
const FavouriteNumberMessage = `My favorite number is: ${favoriteNumber}`;
console.log(FavouriteNumberMessage);
// Store Friends names in array
let friends = ["Usman", "Faisal", "Azam", "Tayyab"];
friends.map((friend) => console.log(friend));
friends.map((friend) => console.log("\n", friend, "is my best friend"));
let favouriteTransport = [
    "Honda Motorcycle",
    "Ford Car",
    "Range Rover",
    "Yamaha Bike",
];
favouriteTransport.map((transport) => console.log(`I would like to own a ${transport}.`));
let guestList = ["Ali", "Sarfraz", "Rehan"];
let indexOfGuest = guestList.indexOf("Rehan");
if (guestList.indexOf("Rehan") > -1) {
    guestList[indexOfGuest] = "Abneer";
}
// guestList.push("Abneer");
guestList.map((guest) => console.log(`Inviting ${guest} to dinner`));
console.log(`\n`);
guestList.map((guest) => {
    console.log(`${guest} is coming to dinner`);
});
guestList.unshift("Javaad");
let middleOfGuestList = Math.floor(guestList.length / 2);
guestList.splice(middleOfGuestList, 0, "Iqbal");
guestList.push("Ahsan");
guestList.forEach((guest) => console.log(`Hey ${guest}, I've found a bigger dinner table.`));
console.log("Hello Everyone, Dinner table won’t arrive in time for the dinner and I can invite only two people for dinner.");
// Continue removing guests until only two names remain
while (guestList.length > 2) {
    // Remove the last guest from the list using pop()
    const removedGuest = guestList.pop();
    // Print a message to the removed guest
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to the dinner!`);
});
while (guestList.length > 0) {
    guestList.pop();
}
console.log("guestList =>", guestList);
