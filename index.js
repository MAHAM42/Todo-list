#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "todoitem",
            type: "input",
            message: chalk.bgRedBright.whiteBright `"ADD TODO ITEM IN LISTING?"`
        },
        {
            name: "addMore",
            type: "list",
            message: chalk.bgGreen.yellowBright `"DO YOU WANT TO ADD MORE?"`,
            choices: ["yes", "no"]
        },
    ]);
    const { todoitem, addMore } = input;
    todos.push(todoitem);
    if (addMore == "no") {
        console.log("Todolist");
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        break;
    }
}
