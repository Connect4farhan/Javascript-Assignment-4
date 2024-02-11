//JavaScript Assignment 4 


//Q-1

// var corr_pass = 'tigerwar2003'
// var user_pass = prompt("Enter Your Password Here : ")

// if (user_pass === "") {
//     console.log("please enter a password");
// }
// else if (user_pass === corr_pass) {
//     console.log("Correct! The password you entered matches the original password")
// }
// else {
//     console.log("Incorrect password")
// }


//Q-2

// var greeting = prompt("Enter the current time");
// var hour = 13;
// if (hour > 18) {
//     greeting = "Good Day";
// }
// else {
//     greeting = "Good Evening";
// }
// console.log(greeting);


//Q-3

// var student_names = [];
// var student_names = new Array();
// var strings_array = ["Farhan", "Husain", "Zeeshan"];
// var numbers_array = [10, 20, 30, 40, 50];
// var boolean_array = [true, false];
// var mixed_array = ["Sameer", 10, false];
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


//Q-4

//var colors = ["Red", "Green", "Blue","orange"];
// document.write("Colors in array are: " + colors + "<br>");
// var colorAtStart = prompt("Enter the color you want to add to the beginning:");
// colors.unshift(colorAtStart);
// document.write("Array after adding color at the beginning: " + colors + "<br>");
// var colorAtEnd = prompt("Enter the color you want to add at the end:");
// colors.push(colorAtEnd);
// document.write("Array after adding color at the end: " + colors+ "<br>");
// colors.unshift("golden", "silver");
// document.write("Array after adding two more colors at the beginning: " + colors+ "<br>");
// colors.shift();
// document.write("Array after deleting the first color: " + colors + "<br>");
// colors.pop();
// document.write("Array after deleting the last color: " + colors + "<br>");
// var index_no =+prompt("Enter the index where you want to add a color:");
// var colorToAdd = prompt("Enter the color you want to add at index " + index_no + ":");
// colors.splice(index_no, 0, colorToAdd);
// document.write("Array after adding color at index " + index_no + ": " + colors + "<br>");
// var index_no_Del = +prompt("Enter the index from which you want to delete colors:");
// var ColorsToDel_num = +prompt("Enter the number of colors you want to delete:");
// colors.splice(index_no_Del, ColorsToDel_num);
// document.write("Array after deleting " +  ColorsToDel_num +  " colors from index " +index_no_Del + ": " + colors);


//Q-5

// var stdScores = [85, 72, 93, 65, 78];
// stdScores.sort(function(a, b) {
//     return a - b;});
// document.write("Sorted student scores are : " + stdScores);


//Q-6

// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var selectMenu = "<select id='phoneSelect'>";
// for (var i = 0; i < phones.length; i++) {
//     selectMenu += "<option value='" + phones[i] + "'>" + phones[i] + "</option>";
// }
// selectMenu += "</select>";
// document.write(selectMenu);


//Q-7

// var Num = +prompt("Enter the number for multiplication table:");
// var Length = +prompt("Enter the length of the table:");
// document.write("Multiplication table of " + Num + ":<br>");
// for (var i = 1; i <= Length; i++) {
//     document.write(Num + " * " + i + " = " + (Num * i) + "<br>");
// }

//Q-8

// // a. Counting: 1, 2, 3, ..., 15
// var counting = '';
// for (var i = 1; i <= 15; i++) {
//   counting += i + ', ';
// }
// console.log(counting);

// // b. Reverse counting: 10, 9, 8, ..., 1
// var reverseCounting = '';
// for (var j = 10; j >= 1; j--) {
//   reverseCounting += j + ', ';
// }
// console.log(reverseCounting);

// // c. Even: 0, 2, 4, ..., 20
// var even = '';
// for (var k = 0; k <= 20; k += 2) {
//   even += k + ', ';
// }
// console.log(even);

// // d. Odd: 1, 3, 5, ..., 19
// var odd = '';
// for (var l = 1; l <= 19; l += 2) {
//   odd += l + ', ';
// }
// console.log(odd);

//  // e. Series: 2k, 4k, 6k, ..., 20k
//  var series = '';
//  for (var m = 2; m <= 20; m += 2) {
//    series += m + 'k, ';
//  }
//  console.log(series);


//Q-9

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Search for an item:");
// var found = false;
// for (var i = 0; i < items.length; i++) {
//     if (userInput.toLowerCase() === items[i]) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     document.write("Yes, '" + userInput + "' is found in the list.");
// } else {
//     document.write("Sorry, '" + userInput + "' is not found in the list.");
// }


//Q-10

// var user = prompt("Enter a string:");
// var titleCaseString = user.toLowerCase().split(' ').map(function(word) {
// return word.charAt(0).toUpperCase() + word.slice(1);});
// document.write(titleCaseString);


//Q-11

// var userInput = prompt("Enter Any Word To Change The UperCase.");
// var upperCase = userInput.toUpperCase().split(' ').map(function (word) {
// return word.charAt(0).toUpperCase() + word.slice(1);});
// document.write(upperCase);


//Q-12
// var numberValue = +("472");
// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof(numberValue));
