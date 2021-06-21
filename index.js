var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score=0;
console.log(chalk.black.bgGreen.underline("Welcome to HOW WELL YOU KNOW ME quiz "));
console.log(chalk.blue("Hey,great to have you onboard"+"\n"+"Lets check How well you know Vishal !"));

console.log(chalk.keyword("orange")("Enter your Name!"));
var playerName=readlineSync.question(playerName);
console.log(chalk.cyan("Welcome "+ playerName + " Let's Begin!"));

function questionBank(question,answer){
    console.log(chalk.keyword('orange')(question));
    var playerAnswer=readlineSync.question(playerAnswer);
    console.log("Your Answer: "+ playerAnswer);

    if(playerAnswer.toUpperCase() === answer.toUpperCase()){
       console.log(chalk.green("Correct Answer!"));
       score=score + 1;
    }else{
        console.log(chalk.red("Wrong Answer!"));
       score=score - 1;
    }

    console.log("-------------"); 
    console.log("Current Score:"+ score);
}



questionBank("1. what is Vishal's favourite sport?","Cricket");
questionBank("2. What do Vishal prefer tea or coffee?","coffee");
questionBank("3. Did Vishal play any sports in high school or college?","yes");
questionBank("4. what is Vishal's favourite TV Show?","game of thrones");



if(score===4){
    console.log("Your Final Score:",score);
  console.log(chalk.cyanBright("Congratulations," + playerName +" you are a TRUE friend of mine. "));
}else{
console.log("Your Final Score:",score);
}