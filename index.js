const fs = require('fs')
const {Shape, Circle, Square, Triangle} = require("./lib/shapes")
let Svg = require("./lib/svg")
const { default: inquirer } = require('inquirer')








let example = new Svg(new Triangle("green"), "white", "Dan")


fs.writeFile("shape.svg", example.generateSVG(), function(err){
    if (err) {
        console.log(err)
        
    }
})