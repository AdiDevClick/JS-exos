// import { PromptError } from "./PromptError"
// import Square from './Square.js'
// export const Square = SquareClass
// export {default as Square} from "./Square.js"
//import {default as Square} from "./Square.js"
// export const SquareClass = Square

export class Rectangle
{
    /**
     * 
     * @param {number} height default number is 10
     * @param {number} width default number is 10
     */
    constructor(height = 10, width = 10) 
    {
        this.height = height
        this.width = width
    }

    get perimeter() {
        if (this.isValid) {            
            return (this.width + this.height) * 2 
        } else { 
            throw new Error('Code Erreur: xx01',            // Renvoie une erreur avec un message et des
                {cause: 
                {code: '404', values: `(${this.width})width & (${this.height})height`, url: 'https://index.php'}})  // Infos avec la propriété "cause" dans un objet
        }
    }
    
    // get perimeter() {
    //     return this.isValid ? 
    //         (this.width + this.height) * 2 : 
    //             Error('Ce n\'est pas un périmètre valide, vérifiez vos mesures')
    // }

    get isValid() {
        // if (this.width > 0 && this.height > 0) {
            // return true
        // if ((this.width > 0) && (this.height > 0)) {
            // console.log(`${this.width} & ${this.height}`);
            return this.width > 0 && this.height > 0
        
        // } else {
        // // console.log(`${this.height}`);
        //     return this.height
        // }
    }
    /**
     * Defines if the current object shape is bigger than the targeted one
     * @param {string} shape 
     * @returns 
     */
    isBiggerThan(shape) {
        if (this.perimeter > shape.perimeter) {
            return 'Oui'
        } else {
            return 'Non'
        }
    }
}

class PromptError extends Error 
{
    constructor(message, options) 
    {
        super(message, options);
    }
}

export function promptRectangle() {
    try {
        const width = parseInt(prompt('Largeur du rectangle'), 10)   // Fonctionne aussi avec prompt('largeur du rectangle') * 1
        const height = parseInt(prompt('Hauteur du rectangle'), 10)  // Pour spécifier un nombre entier
        const r = new Rectangle(height, width)
        return r
    } catch (e) {
        //throw new Error('Ma nouvelle erreur', {cause: e}) // Si on "rethrow" une erreur, l'objet ne contiendra pas 
                                                            // la "cause" de l'erreur.
                                                            // Il renvoie essentiellement la première partie et non 
                                                            // pas un ajout détaillé avec une "cause" par exemple
        // throw new Error('Ma nouvelle erreur', e.message)                                                    
        console.log("Erreur d'inputs : ", {cause : e});     // On peut créer un retour d'erreur dans un objet
                                                            // Qui contiendra toutes les informations de l'erreur
                                                            // Qu'on aura préalablement fournies (ie: voir l'erreur)
        if (e instanceof PromptError) {
            console.log(e.message, 'voici la cause by PromptError: ', e.cause.values, e.cause.code, e.cause.url); // On peut enchainer les informations en séparant
                                                                                                                  // par des virgules et en fournissant des proriétés
                                                                                                                  // On pourrait aussi rajouter e.cause directement 
                                                                                                                  // Pour renvoyer l'objet complet
        } else {
            console.log("Erreur d'inputs classique : ", {cause : e});
        }
                                                    
    }
}

// function promptRectangle() {
//         const width = parseInt(prompt('Largeur du rectangle'), 10)
//         const height = parseInt(prompt('Hauteur du rectangle'), 10)
//         const r = new Rectangle(height, width)
//         console.log(r.perimeter);
// }




/**
 * On peut catch les erreurs en boucle avec un switch
 * ATTENTION : 
 * Un erreur ne peut être "catch" qu'une seule fois
 * Si on rethrow une erreur, on ne pourra plus avoir tous les détails 
 * que l'on pouvait avoir lors du premier catch
 */

// try {
//     promptRectangle()
// } catch (e) {
//     switch (e.message) {
//         case 'Ma nouvelle erreur':
//             console.log(e.cause);
//             console.log('Dommage !');
//             console.log(e.message);
//             break
//         case 'Ce n\'est pas un périmètre valide, vérifiez vos mesures': 
//             console.log(e.cause);
//             console.log("C'est réellement dommage !");
//             break
//         case 'Code Erreur: xx01':
//             console.log(e.message);
//             console.log(e.cause);
//             break
//         default:
//             console.log(e.message);
//     }
// }

// try {
//     promptRectangle()
// } catch (e) {
//     switch (e.cause) {
//         case '404':
//             console.log(e.cause);
//             console.log('Dommage !');
//             console.log(e.message);
//             break
//         // case '301': 
//         //     console.log(e.cause);
//         //     console.log("C'est réellement dommage !");
//         //     break
//         // case '300':
//         //     console.log(e.message);
//         //     console.log(e.cause);
//         //     break
//         default:
//             console.log(e.message);
//     }
// }


    