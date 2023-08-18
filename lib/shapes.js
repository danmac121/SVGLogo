

class Shape{
    constructor(fill){

        this.fill = fill;
        

    }
    render(){
        throw new Error("shape render method not working")
    }

    setColor(fill){
        this.fill = fill
    }
}


class Square extends Shape{

    constructor(fill){
        super(fill)
    }
    render(){
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }
   

}

class Circle extends Shape{

    constructor(fill){
        super(fill)
       
    }
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.fill}" />`
    }
}

class Triangle extends Shape{ 

    constructor(fill){
        super(fill)
    }
    render(){
        return `<polygon points="0,200 300,200 150,0" fill="${this.fill}" />`
    }
}
module.exports = {Shape, Circle, Square, Triangle}

