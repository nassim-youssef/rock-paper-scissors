//the following function return the following:"Rock, Paper, Scissors" from the user
function getUserWeapon(){
  let userWeapon = prompt("Choose your Weapon: \"Rock, Paper, Scissors\"");
  userWeapon = userWeapon.toUpperCase();

  //if the user enter something else than "Rock, Paper, Scissors",
  //keep asking until Choosing the Right Word
  while((userWeapon !== "ROCK") && (userWeapon !== "PAPER") && (userWeapon !== "SCISSORS"))
  {
    userWeapon = prompt("Invalid Weapon, please choose from the following:\n\"Rock, Paper, Scissors\" ")
    userWeapon = userWeapon.toUpperCase();
  }
  return userWeapon;
}

