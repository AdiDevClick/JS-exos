// importScripts("exos.js")
// import calculateAvg from ('exos.js')

/* const calculateAvg = (n) => {
    let sum = 0
    n.forEach(i => {
        sum += i / n.length  
    })   
    return sum  
} */

/* const moyenne = (notes) => {
    let sum = 0
    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}  */

class Student 
{
    static moyenne = 10
    ecole = 'Jules Ferry'
    _notes = []

    constructor(lastname, firstname) {
        this.lastname = lastname
        this.firstname = firstname
    }

    set notes(value) {
        if (Array.isArray(value)) {
            this._notes = value
        }        
    }

    get notes() {
        console.log(this._notes);
    }
    
    // get ecole() {
    //     return this._ecole
    // }

    // get avg() {
    //     return this._moyenne
    // }

    get name() {
        return `${this.lastname} ${this.firstname}`
    }

    canPass() {
        console.log( calculateAvg(this._notes) >= Student.moyenne);
    }
}

function calculateAvg(n) {
    return n.reduce((acc, note) => acc + note / n.length, 0)  // Calcul avec reduce
}

// function calculateAvg(n) {           // Façon conventionnelle de calculation
//     let sum = 0
//     n.forEach(i => {
//         sum += i / n.length  
//     })   
//     return sum   
// }

function wait(duration) {                       // Time synchroneous. 
    const time = Date.now()                     // Do not use it :
    while (Date.now() - time < duration) {      // block the code until it can execute the order
        //
    }
}