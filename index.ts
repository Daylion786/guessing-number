#! /usr/bin/env node

import inquirer from "inquirer";



let comp_guess_Number = Math.floor(Math.random() * 6+1)

let user_Guess_Number = await inquirer.prompt([
    {message: "Enter your guess number:", type: "number", name: "guessnumber"}
])

if (user_Guess_Number.guessnumber == comp_guess_Number){
    console.log("CongratulationS! you won a super bike!!");
}else{
    console.log("better luck be better next time :(");
};
