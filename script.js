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

let userScore = 0;
let computerScore = 0;
function updateScore(winner){
  if(winner === "tie") {
    //do update nothing since it is a tie game
  }else if(winner === "user")
  {
    ++userScore;
  }
  else {
    ++computerScore;
  }
}

function displayGameData(userScore, computerScore, userWeapon, computerWeapon,roundWinner){
  let dataToBeDisplayed = '';
  if(userScore === 5)
  {
    dataToBeDisplayed = `\t### You Are The Winner, CONGRATULATIONS TO YOU MISTER USER ###
    User Score: 0${userScore}\tComputer Score: 0${computerScore}`;
    console.log(dataToBeDisplayed);
  } else if (computerScore === 5) {
    dataToBeDisplayed = `\t!!!!! YOU LOST !!!!!
    User Score: 0${userScore}\tComputer Score: 0${computerScore}`;
    console.log(dataToBeDisplayed);
  }
  else if(roundWinner === "user")
  {
    dataToBeDisplayed = `\t# You Are The Round Winner #
    ${userWeapon} BEATS ${computerWeapon}
    User Score: 0${userScore}\tComputer Score: 0${computerScore}`;
    console.log(dataToBeDisplayed);
  }
  else if(roundWinner === "computer")
  {
    dataToBeDisplayed = `\t!!! You LOST The Round !!!
    ${computerWeapon} BEATS ${userWeapon}
    User Score: 0${userScore}\tComputer Score: 0${computerScore}`;
    console.log(dataToBeDisplayed);
  }
  else if (roundWinner === "tie") {
    dataToBeDisplayed = `\tIt Is A Tie_Round
    User Score: 0${userScore}\tComputer Score: 0${computerScore}`;
    console.log(dataToBeDisplayed);
  }
}

// //Bellow is the game logic that connect and use all the previous parts "functions"
// let userWeapon = '';
// let computerWeapon = '';
// let roundWinner = '';


// while(true) {
//   userWeapon = getUserWeapon();
//   computerWeapon = getComputerWeapon();
//   roundWinner = getRoundWinner(userWeapon, computerWeapon);
//   updateScore(roundWinner);
//   displayGameData(userScore, computerScore, userWeapon, computerWeapon, roundWinner);
//   if(userScore === 5 || computerScore === 5){
//     break;
//   }
// }