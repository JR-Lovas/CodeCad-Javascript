const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Error. Please type: paper, rock or scissors.";
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie.";
  }

  if (userChoice === "bomb") {
    return "You won.";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won.";
    } else {
      return "You won.";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won.";
    } else {
      return "You won.";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won.";
    } else {
      return "You won.";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You: " + userChoice);
  console.log("Computer: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();







