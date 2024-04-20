#!/usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "n1",
        message: "what is your name",
        type: "input"
    },
    {
        name: "n2",
        message: "what is your gender",
        type: "list",
        choices: ["male", "female", "other"]
    },
    {
        name: "n3",
        message: "enter your number",
        type: "number"
    },
    {
        name: "n4",
        message: "your favourite food",
        type: "list",
        choices: ["biryani", "korma", "pizza"]
    }
]);
console.log(`Hello ${answer.n1}, how are you? Your gender is ${answer.n2}`, `And your favourite number is ${answer.n3}`, `And your favorite food is ${answer.n4}`);
