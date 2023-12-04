const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi...`

const regex = /[,!:?«».']/gi
const regex2 = /[’']/gi
const newStr = phrase.replaceAll(regex, '') 
const newStr2 = newStr.replaceAll(regex2, ' ') 

const loweredCasedStr = newStr
    .toLowerCase()
    .split(' ')

const occurences = {}

for (const word of loweredCasedStr) {
    if (word === '') {
        // throw new Error('Empty string not allowed');
    } else if (occurences[word]) {
        occurences[word]++
    } else {
        occurences[word] = 1
    }
}    

const displayOccurencies = (occurences, nombre) => {
    return `Le mot ${occurences} apparaît ${nombre} fois`
}

for (const wordd in occurences) {
    if (occurences[wordd] > 8) {
        console.log(
        `Voici les mots qui se répètes :
        ${displayOccurencies(wordd, occurences[wordd])}
    `);
    }    
}
// function getMatchedWords(newStr) {
//     const loweredCasedStr = newStr
//         .toLowerCase()
//         .split(' ')
//         // console.log(loweredCasedStr === newStr.toLowerCase());
// }

// console.log(getMatchedWords(newStr));

let arrayWords = []
const organizedOccurrencies = [] 

for (const k in occurences) {
    if (organizedOccurrencies) {
        organizedOccurrencies.push({
            word: k,
            count: occurences[k]
        })  
    }
}
organizedOccurrencies.sort((a, b) => b.count - a.count)

const displayTop3 = (organizedOccurrencies) => {
    return `"${organizedOccurrencies.word}" avec un nombre de ${organizedOccurrencies.count} fois`
}

console.log(`Voici le top 3 des mots les plus utilisés : 
1: ${displayTop3(organizedOccurrencies[0])}

2: ${displayTop3(organizedOccurrencies[1])}

3: ${displayTop3(organizedOccurrencies[2])}`
)

// const getEachWords = () => { 
//     const arrayWords = []    
//     for (const word of loweredCasedStr) {    
//         // arrayWords.push(word)
//         if (word === '') {
//             console.error('Empty string not allowed');
//         } else if (arrayWords[word]) {
//             arrayWords[word] ++
//         } else {
//             arrayWords[word] = 1
//         }                
//         // console.log(arrayWords);
//         // console.log(arrayWords === loweredCasedStr);
//     }
//     return arrayWords
// }

const getEachWords = () => { 
    const arrayWords = []    
    let count = 0
    for (const word of loweredCasedStr) {  
        // arrayWords.push(word)
        if (word === '') {
            console.error('Empty string not allowed');
        } else {
            arrayWords.push([
                arrayWords.word = word,
                arrayWords[word] = arrayWords.count++
            ])                   
        }                
        // console.log(count);
        // console.log(arrayWords === loweredCasedStr);
    }
    return arrayWords
}

arrayWords = getEachWords();
// console.log(arrayWords);



// arrayWords.sort(sortWords)
// const sortedStudent = students.sort((a, b) => b.moyenne - a.moyenne)
// console.log(arrayWords);


// for (const wordd in arrayWords) {
//     // newArray = arrayWords.sort((a, b) => arrayWords.wordd - arrayWords.wordd)
//     // console.log(arrayWords)
//     if (arrayWords[wordd] > 8) {
//         console.log(
//         `Voici les mots qui se répètes :
//         ${displayOccurencies(wordd, arrayWords[wordd])}
//     `);   
//     } 
// }    


// return newWord.toLowerCase() === word.toLowerCase()
// loweredCasedStr.split(' ')

// On doit compter le nombre de mots 
// for (let i = 0; i < arrayWords.length; i++) {
//     let nombre = 0
//     const element = arrayWords[i];
//     if (element !== element) {
//         console.error(`le mot ${element} ne correspond pas à ${element}`)
//     } else {
//         nombre ++
//         element[i].nombre < 2
//         console.log(`GG le mot ${element} apparaît ${nombre} fois`)
//     }
// }
// let i = 0
// while (i < arrayWords.length) {
//     if (arrayWords > 8) {
//         i++
//         console.log(`GG le mot ${arrayWords[i]} apparaît ${i} fois`)
//     }    
// }

// for (const word of arrayWords) {
//     let nombre = 0
//     console.log(word);
//     // if (word.includes(word)) {
//         // if (word.localeCompare(arrayWords[word], undefined, { sensitivity: 'base'})) {
//     if (word > 8) {
//         console.log(`GG le mot ${word} apparaît ${arrayWords} fois`)
//     }
// }

// arrayWords.forEach(word => {
//     console.log(word);
// });
    // if (arrayWords[word] !== arrayWords[word]) {
    // if (word[0] !== word[0]) {
    //     console.error(`le mot ${arrayWords[word]} ne correspond pas à ${arrayWords[word]}`)
    // } else {
    //     nombre++
    //     console.log(word[0])
    //     console.log(`GG le mot ${arrayWords[word]} apparaît ${nombre} fois`)
    // }

    // Si le mot est égal à un autre 
        // On le compte


// const newWord = loweredCasedStr.join('')

// console.log(arrayWords === loweredCasedStr);

/*const hello = () => {
    console.log(this)
}
 // this sera l'objet global (window dans le cas du navigateur)
 // this sera toujours l'objet global

const hello2 = (name) => {
    console.log(`Bonjour ${name}`)
}


const Adi = 'Adi'
const a = 3
    
hello2(Adi)
hello(Adi)
hello.call(3)

// const double = (n) => {
//     return 2 * n
// } 
// On peut simplifier en retournant directement en retirant les accolades
// const double = (n) => 2 * n
// Et on peut retirer les parenthèses
const double = n => 2 * n

console.log(double(3))

const words = {
    SOS: true,
    Kayak: true,
    Bonjour: false,
    kayak: true,
}
// On crer la fonction pour vérifier 
// si le mot est bien un palindrome et retournera true

function isPalindrum(word) {
    const newWord = word
    .split('')
    .reverse()
    .join('')
    return newWord.toLowerCase() === word.toLowerCase()
}
// Si le mot n'est pas un palindrome
for (const word in words) {
    if (isPalindrum(word) !== words[word]) {
        console.error(`le mot ${word} devrait renvoyer ${words[word]}`)
    } else {
        console.log('GG')
    }
}

const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

students.forEach(student => {
    // student.moyenne = students.moyenne // On peut se passer directement de la création vierge d'une moyenne 
    student.moyenne = calculateAvg(student.notes);
    
    student.maxNote = Math.max(...student.notes)
    student.lowestNote = Math.min(...student.notes)
});

// const sortedStudent = students.sort((a, b) => b.moyenne - a.moyenne)

const sortStudents = (a, b) => {
        return b.moyenne - a.moyenne
}

students.sort(sortStudents)

const displayTop3 = (students) => {
    return `${students.name} avec la moyenne de ${students.moyenne}, sa note la plus faible est de ${students.lowestNote} et sa note maximale de ${students.maxNote}`
}

console.log(`Voici le top 3 des meilleurs élèves : 
1: ${displayTop3(students[0])}

2: ${displayTop3(students[1])}

3: ${displayTop3(students[2])}`
)*/


function calculateAvg(n) {
    let sum = 0
    n.forEach(i => {
        sum += i / n.length  
    })   
    return sum   
}

/*function bestAvg(array) {
    array.forEach(element => {
        console.log(element);
        return Math.min(...array)
    })   
    
}

// for (const student of students) {
//     // Créer une moyenne pour chaque élèves
//     student.moyenne = calculateAvg(student.notes)
//     student.maxNote = Math.max(...student.notes)
//     student.lowestNote = Math.min(...student.notes)
//     // console.log(Math.max(student.moyenne).sort(sortStudents));
//     // console.log(student);
// }

// filterByTop2(students)

function filterByTop2(students) {
    for (let i = 0; i < 3;) {
        const element = students[i].moyenne
        i++
        // console.log(element)
    }
}

function filterByTop(students, limit) {
    let i = 0
    while (i < limit) {
        // element = Math.min(...students[i].moyenne)
        students[i].elementPlus = Math.max(students[i].moyenne)
        students[i].elementLow = Math.min(students[i].moyenne)
        i++
    } 
}*/





// console.log(notes.sort());

