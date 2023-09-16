// Personal Message
let person_name: string = "Qammar Zaman";
console.log(`Hello ${person_name}, would you like to learn some Python today?`);

// Name Cases
// Upper Case
let person_lowerCase: string = person_name.toLowerCase(); // lower
let person_UpperCase: string = person_name.toUpperCase(); // uppercase
console.log(`Upper Case => ${person_UpperCase}`);
console.log(`Lower Case => ${person_lowerCase}`);
let TitleCase: string = person_lowerCase
  .split(" ")
  .map((l: string) => l[0].toUpperCase() + l.substring(1))
  .join(" "); //
console.log(`Title Case => ${TitleCase}`);

let famouseQuote: string = "It is also a charity to utter a good word";
let quoteAuthor: string = "Prophet Muhammad (P.B.U.H)";
console.log(`${quoteAuthor} said, "${famouseQuote}"`);
let message: string =
  "The ultimate aim of the ego is not to see something, but to be something.";
let famousePerson: string = "Allama Muhammad Iqbal";
console.log(`${famousePerson} said, "${message}"`);

let personeName: string = "\t Muhammad Ali \t";
console.log(`With WhiteSpaces=> "${personeName}"`);
console.log(`Without WhiteSpaces => "${personeName.trim()}"`);

// Number Eight
console.log(
  "================================================================================================"
);
console.log("Addition 8+5=", 8 + 5);
console.log(
  "================================================================================================"
);
console.log("Multiplication 8*5=", 8 * 5);
console.log(
  "================================================================================================"
);
console.log("Subtraction 8-5=", 8 - 5);
console.log(
  "================================================================================================"
);
console.log("Division 8/4=", 8 / 5);
console.log(
  "================================================================================================"
);

// Print your favourite number
const favoriteNumber: number = 8;
const FavouriteNumberMessage: string = `My favorite number is: ${favoriteNumber}`;
console.log(FavouriteNumberMessage);

// Store Friends names in array
let friends = ["Usman", "Faisal", "Azam", "Tayyab"];
friends.map((friend: string) => console.log(friend));
friends.map((friend: string) => console.log("\n", friend, "is my best friend"));

let favouriteTransport: string[] = [
  "Honda Motorcycle",
  "Ford Car",
  "Range Rover",
  "Yamaha Bike",
];
favouriteTransport.map((transport: string) =>
  console.log(`I would like to own a ${transport}.`)
);

let guestList: string[] = ["Ali", "Sarfraz", "Rehan"];
let indexOfGuest = guestList.indexOf("Rehan");
if (guestList.indexOf("Rehan") > -1) {
  guestList[indexOfGuest] = "Abneer";
}
// guestList.push("Abneer");
guestList.map((guest: string) => console.log(`Inviting ${guest} to dinner`));

console.log(`\n`);
guestList.map((guest: string) => {
  console.log(`${guest} is coming to dinner`);
});

guestList.unshift("Javaad");
let middleOfGuestList: number = Math.floor(guestList.length / 2);
guestList.splice(middleOfGuestList, 0, "Iqbal");
guestList.push("Ahsan");

guestList.forEach((guest: string) =>
  console.log(`Hey ${guest}, I've found a bigger dinner table.`)
);

console.log(
  "Hello Everyone, Dinner table won’t arrive in time for the dinner and I can invite only two people for dinner."
);

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

// Define an array of places to visit
const placesToVisit: string[] = [
  "Paris",
  "Tokyo",
  "Venice",
  "New York",
  "Sydney",
];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("\nOriginal Order After Sorting (not modified):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("\nOriginal Order After Sorting (not modified):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to return it to the original order
placesToVisit.reverse();
console.log("\nOriginal Order After Double Reversal:");
console.log(placesToVisit);

// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order and print it
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);

// Create an array of dinner guests
const dinnerGuests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print the number of people you are inviting to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
// Create an array of countries
const countries: string[] = ["USA", "Canada", "Japan", "Germany", "Australia"];
// Create objects for different cars
const car1 = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

const car2 = {
  make: "Honda",
  model: "Civic",
  year: 2021,
};
const fruits: string[] = ["apple", "banana", "cherry"];

const fruit = fruits[3]; // This will produce an "undefined" error

// To correct the error, make sure to access a valid index:
const validFruit = fruits[1]; // Accessing index 1 (banana)
console.log(validFruit); // This will print "banana"
