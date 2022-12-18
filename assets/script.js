let generateBtn = document.querySelector("#generate");
let passwordField = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // Limiting password length from 8-128
  let length = Number(
    prompt("How many characters would you like your password to be?")
  );
  while (length < 8 || length > 128)
    length = Number(
      prompt(
        "Length must be 8-128 characters. How many characters would you like your password to be?"
      )
    );

  let uppercase = confirm("Would you like to have uppercase letters?");
  let lowercase = confirm("Would you like to have lowercase letters?");
  let numbers = confirm("would you like to have numbers?");
  let symbols = confirm("would you like to have special characters?");

  // Generate a password
  let password = generatePassword(uppercase, lowercase, numbers, symbols);

  // Display the generated password in an alert
  alert(`Your password is: ${password}`);

  // Update the password field with the generated password
  passwordField.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(uppercase, lowercase, numbers, symbols) {
  // Define a string containing all possible uppercase letters, lowercase letters, numbers, and symbols
  let characterSet = "";
  if (uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characterSet += "0123456789";
  if (symbols) characterSet += "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";

  // Initialize the password as an empty string
  let password = "";

  // Repeat the following process length times:
  for (let i = 0; i < length; i++) {
    // Generate a random index in the range 0 to the length of characterSet - 1
    let index = Math.floor(Math.random() * characterSet.length);
    // Append the character at the index to the password
    password += characterSet[index];
  }

  // Return the generated password
  return password;
}
