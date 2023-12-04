import {Rectangle, promptRectangle} from './Rectangle.js'
import Square from './Square.js'
// export {default as Square} from './Square.js'
// export {default as Rectangle} from './Rectangle.js'

// const rectangle = new Rectangle(20,10)
// const rectangle = new promptRectangle()
const square = new Square(100)

// console.log(rectangle.perimeter);

document.querySelector('.rectangle').innerHTML = `
    Périmètre du rectangle: ${rectangle.perimeter} </br>
    Le périmètre du carré: ${square.perimeter} </br>
    Est-il plus grand que le carré ? : ${rectangle.isBiggerThan(square)}` 
       
function ShowShapeAnswer(rectangle, square) {
    if (square.isBiggerThan(rectangle)) {
        return 'Non'
    } else {
        return 'Oui'
    }
}


