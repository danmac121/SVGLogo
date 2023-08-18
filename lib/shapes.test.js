const {Shape, Circle, Square, Triangle} = require("./shapes.js") 


describe('Circle', () => {
    describe('render', () => {
      it('should change the string in render to match the circle return', () => {
        const expectedCircle = `<circle cx="150" cy="100" r="100" fill="${this.fill}" />`
        const circle = new Circle();
        expect(circle.render()).toEqual(expectedCircle);
      });
    });
  });


  describe('Square', () => {
    describe('render', () => {
      it('should change the string in render to match the square return', () => {
        const expectedSquare = `<rect width="100%" height="100%" fill="${this.fill}" />`
        const square = new Square();
        expect(square.render()).toEqual( expectedSquare);
      });
    });
  });


  describe('Triangle', () => {
    describe('render', () => {
      it('should change the string in render to match the triangle return', () => {
        const expectedTriangle = `<polygon points="0,200 300,200 150,0" fill="${this.fill}" />`
        const triangle = new Triangle();
        expect(triangle.render()).toEqual( expectedTriangle);
      });
    });
  });
  
  describe('Triangle', () => {
    describe('setColor', () => {
      it('should change the fill in the return to match blue', () => {
        const color = `<polygon points="0,200 300,200 150,0" fill="blue" />`
        const triangle = new Triangle();
        triangle.setColor("blue")
        const actualColor = triangle.render()
        expect(actualColor).toEqual(color);
      });
    });
  });