//task 1
// Install Node.js, TypeScript and VS Code on your computer.
// installed
//task 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let person = "Eric";
// console.log(`Hello ${person}, would you like to learn some Python today?`)
//task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let person = "Eric";
// console.log(person.toUpperCase());
// console.log(person.toLowerCase());
// console.log(person.charAt(0).toUpperCase() + person.slice(1).toLowerCase())
// task 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')
//task 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person = "Albert Einstein";
// let message = 'once said, “A person who never made a mistake never tried anything new.”'
// console.log(`${famous_person} ${message}`)
//task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let personName = "\t\t\tjohn Doe \t\t\t"
// console.log(personName);
// console.log(personName.trim());
//task 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Addition operation
// console.log(5 + 3);
// Subtraction operation
// console.log(10 - 2);
// Multiplication operation
// console.log(2 * 4);
// Division operation
// console.log(16 / 2);
//task 8
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// let line = "\n____________________________________________________________________________________________________________________\n";
// console.log(`${line}${5+3}${line}`);
// console.log(`${line}${5+3}${line}`);
// console.log(`${line}${5+3}${line}`);
// console.log(`${line}${5+3}${line}`);
// task 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favoriteNum = 33;
// let message = `my favourate number is ${favoriteNum}`;
// console.log(message);
// task 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// task 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names= ["Alice", "Bob", "Charlie", "David"];
// for (let i of names) {
//   console.log(i);
// }
//task 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let names = ["Alice", "Bob", "Charlie", "David"];
// let message= "Hello,";
// for (let i of names) {
//     console.log(`${message} ${i}`);
// }
//task 13
// let transportationModes = ["car", "motorcycle", "bicycle", "train"];
// for (let i of transportationModes) {
//     let mode = i;
//     if (mode === "car") {
//         console.log("I would like to own a BMW " + mode + ".");
//     } else if (mode === "motorcycle") {
//         console.log("I would like to own a Honda " + mode + ".");
//     } else if (mode === "bicycle") {
//         console.log("I enjoy riding my " + mode + ".");
//     } else if (mode === "train") {
//         console.log("I like traveling by " + mode + ".");
//     }
// }
//task 14 
// let guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// for (let i of guestList) {
//   console.log("Dear " + i + ", you are cordially invited to dinner. We would be honored to have your presence.");
// }
//task 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
guestList[2] = "ADAM";
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var i = guestList_1[_i];
    console.log("Dear " + i + ", you are cordially invited to dinner. We would be honored to have your presence.");
}
