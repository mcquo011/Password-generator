let generateBtn = document.querySelector("#generate");
let passwordField = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  // Prompt the user for the password length
  let length = Number(prompt("Enter the password length (8-128 characters):"));

  // Check if the user entered a valid password length
  if (length >= 8 && length <= 128) {
    // Prompt the user for the character sets to include in the password
    let uppercase = confirm("Would you like to have uppercase letters?");
    let lowercase = confirm("Would you like to have lowercase letters?");
    let numbers = confirm("Would you like to have numbers?");
    let symbols = confirm("Would you like to have special characters?");

    // Generate a password
    let password = generatePassword(
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    );

    // Update the password field with the generated password
    passwordField.value = password;
  } else {
    // The user entered an invalid password length
    alert("Please enter a valid password length (8-128 characters)");
  }
}

// Generate a password
function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  // Check if at least one character set is selected
  if (uppercase || lowercase || numbers || symbols) {
    // At least one of the arguments is true
  } else {
    alert("Select at least one character set!");
    // All of the arguments are false
  }

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
