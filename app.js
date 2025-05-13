let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencomchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranidx = Math.floor(Math.random() * 3);
  return options[ranidx];
};

const drawgame = () => {
  // console.log("game was DRAW.");
  msg.innerText = "Game was draw Play again !";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, comptchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText=userscore;
    msg.innerText = `you won! your ${userchoice} beats ${comptchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText=compscore;
    msg.innerText = `you lose! your ${comptchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  // console.log("user choice is ", userchoice);
  const comptchoice = gencomchoice();
  // console.log("computer choice is :", comptchoice);
  if (userchoice == comptchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = comptchoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      userwin = comptchoice === "scissors" ? false : true;
    } else {
      userwin = comptchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, comptchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
