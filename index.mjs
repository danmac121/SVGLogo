import fs from "fs"
import inquirer from 'inquirer'
import {Shape, Circle, Square, Triangle} from "./lib/shapes.js"
import Svg from "./lib/svg.js"

let {shape, shapeColor, textColor, text} = await inquirer
    .prompt([
        { type: "list",
        name: "shape",
        message: "Please choose the shape you would like to use.",
        choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Please enter a color or it's equivalent hexidecimal value which will be applied to the shape."
        },
        {
            type: "input",
            name: "textColor",
            message: "Please enter a color or it's equivalent hexidecimal value which will be applied to the text within the shape."
        },
        {
            type: "input",
            name: "text",
            message: "Please enter up to 3 characters to display on your logo."
        }
    ])

let chosenShape;

if (shape === "Triangle") {
    chosenShape = new Triangle(shapeColor)
}
if (shape === "Circle") {
    chosenShape = new Circle(shapeColor)
}
if (shape === "Square") {
    chosenShape = new Square(shapeColor)
}


let example = new Svg(chosenShape, textColor, text)


fs.writeFile("shape.svg", example.generateSVG(), function(err){
    if (err) {
        console.log(err)
        
    }
})