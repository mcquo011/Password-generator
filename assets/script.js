let generateBtn = document.querySelector("#generate");
let passwordField = document.querySelector("#password");
let uppercaseChar = "BCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
let numbersChar = "0123456789";
let symbolsChar = "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";


// Write password to the #password input
function writePassword() {
  // Prompt the user for the password length
 let password = generatePassword();
  passwordField.value = password;
}
// Generate a password
function generatePassword() {
  // Prompt the user for the password length
  let length = Number(prompt("Enter the password length (8-128 characters):"));

  // Check if the user entered a valid password length
  if (length >= 8 && length <= 128) {
    // Prompt the user for the character sets to include in the password
    let uppercase = confirm("Would you like to have uppercase letters?");
    let lowercase = confirm("Would you like to have lowercase letters?");
    let numbers = confirm("Would you like to have numbers?");
    let symbols = confirm("Would you like to have special characters?");
    let characterSet = "";
    if (uppercase) {
      characterSet += uppercaseChar;
    }
    if (lowercase) {
      characterSet += lowercaseChar;
    }
    if (numbers) {
      characterSet += numbersChar;
    }
    if (symbols) {
      characterSet += symbolsChar;
    }
    if (uppercase || lowercase || numbers || symbols) {
    

    // Define a string containing all possible uppercase letters, lowercase letters, numbers, and symbols

    // Initialize the password as an empty string
    let password = "";
    console.log(characterSet)
    // Repeat the following process length times:
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * characterSet.length);
      password += characterSet[index];
    }

    // Return the generated password
    return password;
    // Update the password field with the generated password
    // At least one of the arguments is true
  } else {
  alert("Select at least one character set!");
  generatePassword()
  // All of the arguments are false

}
alert("You must choose a password length between 8-128")
generatePassword()
} }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
