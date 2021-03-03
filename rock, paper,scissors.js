const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock" || userInput === "scissors" || userInput === "paper" || userInput === "bomb"){
    return userInput;
  } else {
    console.log("error. please input rock, paper or scissors.");
  }
};

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random()*3);
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
  if (userChoice === computerChoice){
    return "game was a tie.";
  }
  if (userChoice === "rock"){
	  if (computerChoice === "paper"){
			return "computer has won";
		} else {
			return "you have won";
		}
	}
		
	if (userChoice === "paper"){
		if (computerChoice === "scissors"){
			return "computer has won";
		} else {
			return "you have won";
		}
	}

	if (userChoice === "scissors"){
		if (computerChoice === "rock"){
			return "computer has won";
		} else {
			return "you have won";
		}
	}
  if (userChoice === "bomb"){
    return "you have won!"
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("the computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();



