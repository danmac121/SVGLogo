
const {Shape, Circle, Square, Triangle} = require("./shapes.js") 




class Svg{
    constructor(shape, textColor, text ){
        
        this.shape = shape;
        this.textColor = textColor;
        this.text = text;
    }
   






    generateSVG(){ return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 

    ${this.shape.render()}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`}

}

module.exports = Svg