import {Rectangle} from "./Rectangle.js";

export default class Square extends Rectangle 
{
    constructor(height = 10) 
    {
        super(height, height)
    }

    // get perimeter() {
    //     return this.isValid ? 
    //         (this.height + this.height) * 2 : 
    //             'Ce n\'est pas un périmètre valide, vérifiez vos mesures'
    // }
}