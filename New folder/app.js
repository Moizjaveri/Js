
function q23_3() {
  const word = "Pakistani";
  console.log("Index of 'n':", word.indexOf("n"));
}

function q23_4() {
  const text = "Hello World";
  console.log("Last index of 'l':", text.lastIndexOf("l"));
}

function q23_5() {
  const word = "Pakistani";
  console.log("Character at 3rd index:", word.charAt(3));
}

// ================================
// Chapter 24: String (Replacing Characters)
// ================================

// Q7: Replace "Hyder" with "Islam"
function q24_7() {
  const city = "Hyderabad";
  console.log(city.replace("Hyder", "Islam"));
}

// Q8: Replace all "and" with "&"
function q24_8() {
  const msg = "Ali and Sami are best friends. They play cricket and football together.";
  console.log(msg.replace(/and/g, "&"));
}

// ================================
// Chapter 25: String (Converting Strings)
// ================================

// Q9: Convert string "472" to number
function q25_9() {
  const str = "472";
  const num = Number(str);
  console.log("Value:", num, "Type:", typeof num);
}

// Q10: Convert input to uppercase
function q25_10() {
  const input = prompt("Enter text:");
  console.log("Uppercase:", input.toUpperCase());
}

// Q11: Convert input to Title Case
function q25_11() {
  const input = prompt("Enter text:");
  const titleCase = input
    .toLowerCase()
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  console.log("Title Case:", titleCase);
}

// Q12: Remove dot from 35.36 -> "3536"
function q25_12() {
  const num = 35.36;
  console.log(num.toString().replace(".", ""));
}
// ================================
// Chapter 26–30: Math Methods
// ================================

// Q1: Positive integer - round, floor, ceil
function q26_1() {
  const num = +prompt("Enter a positive integer:");
  console.log("Number:", num);
  console.log("Round off:", Math.round(num));
  console.log("Floor:", Math.floor(num));
  console.log("Ceil:", Math.ceil(num));
}

// Q2: Negative floating number - round, floor, ceil
function q26_2() {
  const num = +prompt("Enter a negative floating number:");
  console.log("Number:", num);
  console.log("Round off:", Math.round(num));
  console.log("Floor:", Math.floor(num));
  console.log("Ceil:", Math.ceil(num));
}

// Q3: Absolute value
function q26_3() {
  const num = +prompt("Enter a number:");
  console.log("Absolute value:", Math.abs(num));
}

// Q4: Dice simulation (1–6)
function q26_4() {
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log("Dice value:", dice);
}

// Q5: Coin toss simulation (Heads/Tails)
function q26_5() {
  const toss = Math.floor(Math.random() * 2) + 1;
  if (toss === 1) {
    console.log("1 → Tails");
  } else {
    console.log("2 → Heads");
  }
}

// Q6: Random number (1–100)
function q26_6() {
  const rand = Math.floor(Math.random() * 100) + 1;
  console.log("Random number (1–100):", rand);
}

// Q7: Parse weight input
function q26_7() {
  const input = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
  const weight = parseFloat(input); // extract number from string
  console.log("The weight of user is:", weight, "kilograms");
}

// Q8: Secret number game (1–10)
function q26_8() {
  const secret = Math.floor(Math.random() * 10) + 1;
  const guess = +prompt("Guess a number between 1 and 10:");
  if (guess === secret) {
    console.log("Congratulations! You guessed the secret number:", secret);
  } else {
    console.log("Try again. The secret number was:", secret);
  }
}
