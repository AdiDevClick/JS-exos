import { showMessage } from "./app.js"

// On ne peut pas preventDefault() sur un input
// Il faut utiliser change ou keydown, keyup pour ça


// Reveal 1 à 1 par un clic un contenu caché 
// document.querySelectorAll('.spoiler').forEach(spoiler => {
//     spoiler.addEventListener('click', () => {
//         spoiler.classList.toggle('hidden')
//     })
// })

// Reveal tous les contenus cachés en même temps
const spoilers = document.querySelectorAll('.spoiler')

spoilers.forEach(spoiler => spoiler.addEventListener('click', toggleRevealSpoilers))

function toggleRevealSpoilers() {
    spoilers.forEach(spoiler => spoiler.classList.toggle('hidden')
    )
}

function getSpoilers(arrSpoilers) {
    let elements = []
    arrSpoilers.forEach(spoiler => {
        elements.push(spoiler)
        })
    return elements
}

// spoiler.addEventListener('click', () => {
//             spoiler.classList.toggle('hidden')
// Blur permet de lancer un event quand on sort du focus
// document.querySelector('input').addEventListener('blur', (event) => {
//     console.log(event)
// })
// // Focus permet de lancer un event quand on clic sur la zone de focus
// document.querySelector('input').addEventListener('focus', (event) => {
//     console.log(event)
// })

// Permet de savoir quelles touches ont été appuyées
// document.addEventListener('keydown', (event) => {
//     if (event.ctrlKey === true && event.key === 'k')
//     showMessage('.error', 'error', `Vous venez de presser ${event.key}`, 'red')
//     // event.preventDefault()
//     console.log(event)
//     console.log(event.currentTarget.value)
// })

// document.querySelector('form').addEventListener('submit', (event) => {
//     const form = event.currentTarget
//     const data = new FormData(form)
//     const firstname = data.get('firstname')
//     if (firstname === '') {
//         event.preventDefault()
//     }
// })
// /**
//  * @param {PointerEvent} event 
//  */
// function onButtonClick(event) {
//     console.log('button click')
// }

// document.querySelectorAll('button, a').forEach(button => {
//     button.addEventListener('click', onButtonClick, {
//         once: true
//     })
// })

// bTn.addEventListener('click', (event) => {    
//     if (event.preventDefault()) {
//         console.log('a été prevent')
//         document.querySelector('#error').remove()
//     } 
//     document.querySelector('#error').remove()
//     showMessage('#lastPosts', 'error', 'error.message', 'red')
    
// })

// document.querySelector('div').addEventListener('click', (event) => {
//     console.log('click div')
//     event.stopPropagation()
// }, {
//     capture: true
// })

// document.addEventListener('scroll', (event) => {
//     event.preventDefault()
// }, {
//     passive: false
// })