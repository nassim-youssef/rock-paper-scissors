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

//Generate computer's choice: Rock/Paper/Scissors Randomly
function getComputerWeapon(){
  let arbitraryNum = (Math.random())*100;
  if(arbitraryNum >= 0 && arbitraryNum < 100/3)
  {
    return "ROCK";
  }
  else if(arbitraryNum >= 100/3 && arbitraryNum < 200/3)
  {
    return "PAPER";
  }
  else {
    return "SCISSORS";
  }
}

//compare user/computer weapon, and return one of: user, computer, tie
function getRoundWinner(userWeapon, computerWeapon) {
  if(userWeapon === computerWeapon){
    return "tie";
  }
  else if((userWeapon === "ROCK") && (computerWeapon === "SCISSORS"))
  {
    return "user";
  }
  else if((userWeapon === "ROCK") && (computerWeapon === "PAPER"))
  {
    return "computer";
  }
  else if((userWeapon === "PAPER") && (computerWeapon === "ROCK"))
  {
    return "user";
  }
  else if((userWeapon === "PAPER") && (computerWeapon === "SCISSORS"))
  {
    return "computer";
  }
  else if((userWeapon === "SCISSORS") && (computerWeapon === "PAPER"))
  {
    return "user";
  }
  else if((userWeapon === "SCISSORS") && (computerWeapon === "ROCK"))
  {
    return "computer";
  }
}
