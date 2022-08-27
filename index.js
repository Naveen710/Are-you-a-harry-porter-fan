//player details
const readlineSync = require("readline-sync")
var chalk = require('chalk');


console.log(chalk.cyanBright.italic("Hi This is Naveen"));
var playerName = readlineSync.question("What's your name ? ");
console.log(chalk.cyanBright.italic(`Welcome ${playerName} let's see how well you know me`));

//Score data
var playerScore = 0;

var highscores = [
  {
    name: "Snehit",
    score: 3,

  },
  {
    name: "Anudeep",
    score: 4,
  },
  {
    name: "Nikhil",
    score: 3,
  },
  {
    name: "Jashwanth",
    score: 2,
  }
]

//questions data
var questions = [{
  question: "Which Harry Potter word is now in the Oxford English Dictionary? \na.Hogwartz \nb.Muggle \nc.Voldemort \n",
  answer: "b"
},

{
  question: "Who were Harry's parents? \na.Henry and Maggie Potter \nb.William and Elizabeth Potter \nc.James and Lily Potter \n ",
  answer: "c"
},
{
  question: "Which of these Hogwarts professors teaches Transfiguration? \na.Snape \nb.Sprout \nc.McGonagall \n",
  answer: "c"
}, {
  question: "At the end of Harry Potter and the Sorcerer's Stone, which professor removes his turban to reveal Voldemort on the back of his head? \na.Quirrell \nb.Lockhart \nc.snape \n",
  answer: "a"
},
{
  question: "Who first shows Harry the diary of Tom Riddle? \na.Moaning Myrtle \nb.Fawkes \nc.Nearly headless nick \n",
  answer: "a"
}
];

//Play Function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct!"))
    playerScore = playerScore + 1

  }
  else {
    console.log(chalk.redBright("Bzzztt Wrong Answer ❌"));
  }
  console.log(chalk.cyanBright.italic("Your current score is " + playerScore));
}

//Passing  questions to function
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log("-------------");
console.log(`You scored ${playerScore} points`);

let maxScore = 0;
//calc highest score currently

highscores.forEach(player => {
  maxScore = player.score > maxScore ? player.score : maxScore
}
)
console.log("Currently the highest score on this quiz is " + maxScore);


if (playerScore >= maxScore) {
  console.log("Congratulations! You have achieved new high score 🔥")
  console.log("Please send me a screen shot!")
}

else {
  console.log("You missed it by " + (maxScore - playerScore) + " points 😔")
}
