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
// Define an array of places to visit
const placesToVisit = [
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
const dinnerGuests = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print the number of people you are inviting to dinner
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
// Create an array of countries
const countries = ["USA", "Canada", "Japan", "Germany", "Australia"];
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
const fruits = ["apple", "banana", "cherry"];
const fruit = fruits[3]; // This will produce an "undefined" error
// To correct the error, make sure to access a valid index:
const validFruit = fruits[1]; // Accessing index 1 (banana)
console.log(validFruit); // This will print "banana"
let num1 = 5;
let num2 = 10;
let str1 = "hello";
let str2 = "world";
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let obj1 = { country: "Pakistan" };
let obj2 = { country: "Pakistan" };
// Test 1:
// Equality test for numbers
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);
// Test 2:
// Equality test for strings
console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);
// Test 3:
// Equality test for arrays (reference comparison)
console.log("Is arr1 == arr2? I predict False.");
console.log(arr1 == arr2);
// Test 4:
// Equality test for objects (reference comparison)
console.log("Is obj1 == obj2? I predict False.");
console.log(obj1 == obj2);
// Test 5:
// Inequality test for numbers
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);
// Test 6:
// Inequality test for strings
console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);
// Test 7:
// Inequality test for arrays
console.log("Is arr1 != arr2? I predict True.");
console.log(arr1 != arr2);
// Test 8:
// Inequality test for objects
console.log("Is obj1 != obj2? I predict True.");
console.log(obj1 != obj2);
// Test 9:
// Logical AND test
console.log("Is (num1 < num2) && (str1 === 'hello')? I predict True.");
console.log(num1 < num2 && str1 === "hello");
// Test 10:
// Logical OR test
console.log("Is (num1 > num2) || (str1 === 'hello')? I predict True.");
console.log(num1 > num2 || str1 === "hello");
// 24:- More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
const string1 = "apple";
const string2 = "banana";
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);
console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);
// Tests using the lower case function
const lowercaseString = "HELLO USMAN";
console.log("Is lowercaseString in lowercase 'HELLO USMAN'? I predict True.");
console.log(lowercaseString.toLowerCase() == "hello usman");
// Numerical tests
const numA = 10;
const numB = 5;
console.log("Is numA > numB? I predict True.");
console.log(numA > numB);
console.log("Is numA < numB? I predict False.");
console.log(numA < numB);
console.log("Is numA >= numB? I predict True.");
console.log(numA >= numB);
console.log("Is numA <= numB? I predict False.");
console.log(numA <= numB);
// Tests using "and" and "or" operators
const isSunny = true;
const isWarm = true;
console.log("Is it sunny AND warm? I predict True.");
console.log(isSunny && isWarm);
console.log("Is it sunny OR warm? I predict True.");
console.log(isSunny || isWarm);
// Test whether an item is in an array
const fruitsArray = ["apple", "banana", "cherry", "date"];
const searchFruit = "banana";
console.log(`Is ${searchFruit} in the fruitsArray? I predict True.`);
console.log(fruitsArray.includes(searchFruit));
// Test whether an item is not in an array
const veggiesArray = ["carrot", "broccoli", "spinach", "kale"];
const searchVeggie = "zucchini";
console.log(`Is ${searchVeggie} NOT in the veggiesArray? I predict True.`);
console.log(!veggiesArray.includes(searchVeggie));
// 25:- Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Here's a program with two versions: one that passes the if test (green alien) and another that fails (non-green alien):
// Version 1 (Passes the if test, green alien):
var alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
//In this version, the alien_color is 'green', so the condition in the if statement (alien_color === 'green') is true, and the message is printed.
// Version 2 (Fails the if test, non-green alien):
alien_color = "red"; // Change to 'yellow' for the yellow alien
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
alien_color = "yellow"; // Change to 'yellow' for the yellow alien
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
}
// 26:- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
if (alien_color !== "green") {
    console.log("Player just earned 10 points.");
}
if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// 27:- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
//
// • If the alien is yellow, print a message that the player earned 10 points.
//
// • If the alien is red, print a message that the player earned 15 points.
//
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color === "green") {
    console.log("Player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points");
}
else if (alien_color === "red") {
    console.log("Player earned 15 points");
}
if (alien_color === "green") {
    console.log("Player earned 5 points");
}
if (alien_color === "yellow") {
    console.log("Player earned 10 points");
}
if (alien_color === "red") {
    console.log("Player earned 15 points");
}
// 28:- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
//
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//
// • If the person is age 65 or older, print a message that the person is an elder.
const age = 30; // Replace this with the person's age
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 29:- Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
//
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favorite_fruits = ["banana", "apple", "strawberry"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
// 30:- Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const usernames = ["admin", "Usman", "Hassan", "Hussain", "Ali"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
// 31:- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
//
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames.splice(0, usernames.length);
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// 32:- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
//
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
const current_users = ["Usman", "Hassan", "Hussain", "Saad", "Akbar"];
// List of new users
const new_users = ["Talha", "Subtain", "Hassan", "Hussain", "Yasir"];
// Function to check if a username is already used (case-insensitive)
function isUsernameTaken(username) {
    const lowercaseUsername = username.toLowerCase();
    return current_users.some((user) => user.toLowerCase() === lowercaseUsername);
}
// Loop through new_users and check for username availability
for (var i = 0; i < new_users.length; i++) {
    if (isUsernameTaken(new_users[i])) {
        console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Username '${new_users[i]}' is available.`);
    }
}
// 33:- Ordinal Numbers: Ordinal numbers indicate their position in a array,
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
//
// • Loop through the array.
//
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = `${number}th`;
    }
    console.log(ordinal);
}
// 34:- Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
const favoritePizzas = ["Chicken Tika", "Malai boti", "Special"];
// Printing pizza names using a for loop
console.log("My favorite pizzas:");
favoritePizzas.forEach((pizza) => {
    console.log(pizza);
});
// Printing sentences about each pizza
console.log("I like these pizzas:");
favoritePizzas.forEach((pizza) => {
    console.log(`I like ${pizza} pizza.`);
});
// A statement about your love for pizza
console.log("I really love pizza!");
// 35:- Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!
const animals = ["Dog", "Cat", "Rabbit"];
// Printing the names of animals using a for loop
console.log("List of animals:");
animals.forEach((animal) => {
    console.log(animal);
});
// Printing statements about each animal
console.log("Statements about each animal:");
animals.forEach((animal) => {
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat is a lovely companion.");
            break;
        case "Rabbit":
            console.log("A rabbit is an adorable pet.");
            break;
        default:
            console.log(`A ${animal} would be an interesting choice.`);
    }
});
// A sentence about what these animals have in common
console.log("Any of these animals would make a great pet!");
// 36:- T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and
// the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message: "${message}"`);
}
// Calling the function with example values
make_shirt("Medium", "I love TypeScript!");
//37:- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt_new(size = "Large", message = "I love TypeScript") {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message: "${message}"`);
}
// Create a large shirt with the default message
make_shirt_new();
// Create a medium shirt with the default message
make_shirt_new("Medium");
// Create a small shirt with a different message
make_shirt_new("Small", "TypeScript is awesome!");
//38:- Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York"); // Uses the default country
describe_city("Paris", "France");
// 39:- City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with three city-country pairs
const location1 = city_country("Lahore", "Pakistan");
const location2 = city_country("New York", "USA");
const location3 = city_country("Sydney", "Australia");
console.log(location1);
console.log(location2);
console.log(location3);
// 40:- Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing
// these two pieces of information. Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // Including the number of tracks
const album3 = make_album("Artist3", "Album Title 3");
// Print each return value to show that the objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// 41:- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Magician names copied from this site https://www.rogerlapin.co.uk/famous-magicians/famous-magicians-top-10/
// Create an array of magician's names
const magicianNames = [
    "Shin Lim",
    "Chris Angel",
    "Jeff McBride",
    "Siegfried & Roy",
];
// Call the show_magicians() function to print the names
show_magicians(magicianNames);
// 42:- Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    const greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(`${magicians[i]} the Great`);
    }
    return greatMagicians;
}
// Call make_great() to modify the array and store the modified array
const greatMagicianNames = make_great(magicianNames);
// Call show_magicians() to see the modified list
show_magicians(greatMagicianNames);
// 43:- Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.
// Create a copy of the array for the original names
const originalMagicianNames = magicianNames;
// Call make_great() with a copy of the array to create the modified array
const greatMagicianNamesNew = make_great(magicianNames);
// Call show_magicians() to display the original and modified arrays
console.log("Original Magicians:");
show_magicians(originalMagicianNames);
console.log("Great Magicians:");
show_magicians(greatMagicianNamesNew);
// 44:- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana");
// 45:- Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure
// all the information was stored correctly.
function createCar(manufacturer, model, ...extras) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const [key, value] of extras) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
console.log(carInfo);
