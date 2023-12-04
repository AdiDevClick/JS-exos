// import { showMessage } from "./app.js"
// import { TodoList } from "./todoList.js"
// import { TodoList } from "./TodoList.js"

import { showMessage } from "./app.js"
import { TodoList } from "./todoList.js"

export class Item 
{
    // list = []
    static _id = -1
    constructor(title, completed = false) 
    {
        this.title = title
        this.completed = completed
        this.id < Item._id ? this.id = Item._id : this.id = Item._id ++         
    }

    // addTodo(todo) {
    //     return this.list.push(todo)
    // }

    // get list() {
    //     return this.list
    // }

    get isRemoved() {
        return this._removed
    }
    
    set isRemoved(value) {
        return this._removed = value
    }

    // get list() {
    //     if (Array.isArray(value)) {
    //         return this.#list = value
    //     }
    // }

    // get items() {
    //     return this._items
    // }

    // removeTodo(todo) {
    //     return this.list.splice(todo.id, 1)
    // }
}

function formListener() {
    const doc = document.querySelector('form')
        doc.addEventListener('submit', (onSubmitEvent) => {
            return doc
        })
}
// function formListener() {
//     const data = document.querySelector('form')
//     data.addEventListener('submit', (event)  => {
//         if (onSubmitEvent(event, 'title') === '') {
//             event.preventDefault()
//             throw new Error ('Le champ est vide')
//         } 
//     const input = onSubmitEvent(event, 'title')            
//     return input               
//     })
// }


// function onSubmitEvent(event) {
//     const form = event.currentTarget
//     const data = new FormData(form)
//     const inputData = data.get('title')
//     return inputData
// }
function onSubmitEvent(event, input) {
    const form = event.currentTarget
    const data = new FormData(form)
    const inputData = data.get(input)
    try {
        if (inputData === '') {
            event.preventDefault()
            throw new Error ('Le champ est vide')
        }  
    } catch(error) {
        showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message, '')
        return
    }
    return inputData                       
        // errorMessage = 'Le champ est vide', {cause: newTodo}
}


function test() {
    document.querySelector('form')
        .addEventListener('submit', (event)  => {
            let title = onSubmitEvent(event, 'title')
            event.preventDefault()
            // const bla = new TodoList()
            // bla.addTodo(ra)
            // console.log(bla.list)
            return new Item(title)
        })
}

async function sendData(data) {
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            // Accept: 'application/json',
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    })  
    if (!postData.ok) {
        throw new Error("Impossible d'envoyer les données", {cause: postData})
    } 
    const posts = await postData.text()  
    console.log(posts)
    showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Les données ont été envoyées correctement !')
}


export async function newTodo() {
        
    //try {
        // document.querySelector('form')
        //     .addEventListener('submit', (event)  => {
        //         const title = onSubmitEvent(event, 'title')
            // const form = event.currentTarget
        const newTodo = document.querySelector('form')
        newTodo.addEventListener('submit', (event) => {
            const data = new FormData(newTodo)
            const title = data.get('title') 
            // let todos = {}  
            try {
                if (title === '') {
                event.preventDefault()
                throw new Error (`Le champ title est vide`, {cause: event})
            //     // errorMessage = 'Le champ est vide', {cause: newTodo}
            } 
        
            showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Ajout du Todo...')
            event.preventDefault()            
            const i = new Item(title)
            addTodo(i)
            // console.log(i)
            // sendData(i)        
            // console.log(item.findTodos())   
            } catch(error) {
                showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message, '') 
            }            
            // return error    
        // const todo = new Item(e.value, 'todo')
        // // this.list.push(todo)        
        })
        // return todos
        // return todos
        // throw new Error('Le champ est vide', {cause: newTodo})
    //} catch (error) {
        // console.log(error.message)
        //showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message, '') 
    //} 
}  
// async function newTodo() {
//     //try {
//         // document.querySelector('form')
//         //     .addEventListener('submit', (event)  => {
//         //         const title = onSubmitEvent(event, 'title')
//             // const form = event.currentTarget
//         const newTodo = document.querySelector('form')
//         newTodo.addEventListener('submit', (event) => {
//             const data = new FormData(newTodo)
//             const title = data.get('title') 
//             // let todos = {}           
//             try {
//                 if (title === '') {
//                 event.preventDefault()
//                 throw new Error (`Le champ title est vide`, {cause: event})
//             //     // errorMessage = 'Le champ est vide', {cause: newTodo}
//             } 
//             event.preventDefault()
//             const i = new Item(title)
//             // r.list.push(r)
//             const t = new TodoList()
//             // console.log(r.list)
//             t.addTodo(i)
//             return t
//             //     return todos.push(todo)             
//             } catch(error) {
//                 showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message, '') 
//             }            
//             // return error    
//         // const todo = new Item(e.value, 'todo')
//         // // this.list.push(todo)
        
//         })
//         // return todos
//         // return todos
//         // throw new Error('Le champ est vide', {cause: newTodo})
//     //} catch (error) {
//         // console.log(error.message)
//         //showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message, '') 
//     //} 
// }  




// const te = newTodo()
// console.log(te)



// const l = new Item()
// const test = new Item('test')
// const newtest = new Item('test2')
// const newtest2 = new Item('test3')
// const newtest3 = new Item('test4')
// console.log(newtest)
// console.log(test)
// console.log(newtest2)
// console.log(newtest3)

// newtest3.status = 'done'
// console.log(newtest3)

// // addTodo(list)
// l.content = 'test'
// console.log(l)
