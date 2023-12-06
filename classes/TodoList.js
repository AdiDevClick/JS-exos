// import { Item } from "./item.js"

import { addClass, createTodo, createTodos, hideElements, removeClass, showMessage } from "./app.js"
import { Item } from "./item.js"

export class TodoList 
{
    #list = []

    addTodo(todo) {
        // this.list.push(todo)
        this.list.push(new Item(todo))
        // this.list.push(new Item(todo.title, todo.completed))
    }

    addTodos(todos) {
        // this.list.title = todos.title
        // this.list.completed = todos.completed
        // this.list.completed = todos.completed
        this.list.push(...todos)
    }

    addTodos2(todos) {
        for (const element of todos) {
            // this.addTodo(new Item(element.title, element.completed)) 
            this.list.push(new Item(element.title, element.completed))
            // this.addTodo(element)  
        }
        // this.list.push(...todos)
    }

    get list() {
        return this.#list
    }

    // get title() {
    //     return this.list.title
    // }

    // set title(value) {
    //     if (Array.isArray(value)) {
    //         this.list = value
    //     } 
    // }

    modifyStatus() {
        const selectAll = document.querySelector('button[data-filter="all"]')
        const filteredByAll = selectAll.classList.contains('active')
        let listCheckBoxes = document.querySelectorAll('input[type="checkbox"]') ; // les boutons checkbox
        listCheckBoxes.forEach(box => {
            box.addEventListener("change", (event) => {    // On écoute les btn checkbox
                const checkedBox = event.target
                if (checkedBox) {
                    this.list.filter((el) =>  {
                        if ('todo-'+el?.id === checkedBox.id && checkedBox.checked === true) {
                            // checkedBox.checked === true
                            el.completed = true
                            checkedBox.classList.add('active') 
                            checkedBox.setAttribute('checked', '')
                            if (!filteredByAll) {
                                hideElements('#todo-wrapper-'+el.id)
                            } 
                        }
                        if ('todo-'+el?.id == checkedBox.id && checkedBox.checked === false) {
                            el.completed = false
                            checkedBox.classList.remove('active') 
                            checkedBox.removeAttribute('checked')
                            if (!filteredByAll) {
                                hideElements('#todo-wrapper-'+el.id)
                            } 
                        }
                    })
                }
        })

        // let icons = document.getElementsByClassName('bi-trash')
        // for (const icon of icons) {
        //     icon.addEventListener('click', (event) => {
        //         const activeIcon = event.currentTarget
        //         if (activeIcon) {
        //             this.list.filter((el) => {
        //             if (el) {
        //                 if (el?.id == activeIcon?.id) {
        //                 // delete this.list[el.id]
        //                     this.list[el.id] = undefined
        //                     const alert = document.querySelector('.alert')
        //                     const doc = document.getElementById('todo-wrapper-'+activeIcon.id)
        //                     doc.remove()
        //                     if (alert) {
        //                         alert.remove()
        //                     }                            
        //                     }                        
        //                 }                    
        //             })
        //         }
        // for (let i = 0;
        //          i < listCheckBoxes.length;
        //          i++) {
        //             listCheckBoxes[i].addEventListener("change", (event) => {    // On écoute les btn radio
        //                 console.log(event.target.value)
                        
                        // if (event.target.value === typeMots) {                          // Si le mot correspond
                        //     propositions = listeMots
                        // } else {
                        //     propositions = listePhrases
                        // }
                        // afficherLeMot(propositions[i]);                                 // On affiche le prochain mot/phrase
                    //})
                })
        //this.completed
    }

    async fetchData() {
        try {
            showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Chargement...')
            const newPosts = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            }) 
            if (!newPosts.ok) {
                throw new Error('Impossible de récupérer les données', {cause: newPosts})
            }    
            const posts = await newPosts.json()   
            document.querySelector('.alert').remove()
            // const te = () => {
            //     for (const element of posts) {
            //         // this.addTodo(new Item(element.title, element.completed)) 
            //         this.addTodo(element)  
            //     }
            // }
            // te()
            this.addTodos2(posts) 
            // const doc = document.contains('#loader')
            // doc.remove()     
            createTodos('.list-group', 'li', 'input', 'label', 'i', this.list) 
            this.removeTodo()
            this.modifyStatus()
        } catch(error) {
            console.log({cause: error})
            showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message + {cause: error}, '')
            return
        }
    }
    async postData(url="", data = this.list) {
        try {
            showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Chargement...')
            const newPosts = await fetch('http://127.0.0.1:5500/index2.html', {
                method: 'POST',
                headers: {
                    // Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            }) 
            if (!newPosts.ok) {
                throw new Error('Impossible de récupérer les données', {cause: newPosts})
            }    
            const posts = await newPosts.json()   
            document.querySelector('.alert').remove()
            const te = () => {
                for (const element of posts) {
                    // this.addTodo(new Item(element.title))                    
                    this.addTodo(element.title)                    
                }
            }
            te()
            // console.log(this.list[0])
            console.log(this.list)
            // console.log(te())
            // this.addTodo(te()) 
            // console.log(this.list)  
            // console.log(this.list[0].completed)
            // console.log(posts)
            // console.log(posts[0].completed)

            // this.removeTodo(5)
            // const doc = document.contains('#loader')
            // doc.remove()     
            createTodos('.list-group', 'li', 'input', 'label', 'i', this.list) 
        } catch(error) {
            console.log({cause: error})
            showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message + {cause: error}, '')
            return
        }
    }

    async newTodos() {        
        //try {
            // document.querySelector('form')
            //     .addEventListener('submit', (event)  => {
            //         const title = onSubmitEvent(event, 'title')
                // const form = event.currentTarget
            const newTodo = document.querySelector('form')
            newTodo.addEventListener('submit', (event) => {
                const data = new FormData(newTodo)
                let title = data.get('title') 
                event.preventDefault()
                try {
                    if (title === '') {                        
                        throw new Error (`Le champ title est vide`, {cause: event})
                    }         
                    this.addTodo(title)
                    showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Todo ajouté avec succès !')
                    // sendData(i)
                    createTodo('.list-group', 'li', 'input', 'label', 'i', this.list)
                    document.querySelector('input[name="title"]').value = ''
                    // document.querySelector('.alert').remove()
                    // 'input[type="radio"][name="optionSource"]
                    this.removeTodo()
                    this.modifyStatus()
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

    findAllByTitle() {
        document.querySelector('button[data-filter="all"]')
            .addEventListener('click', () => {
                removeClass('button[data-filter="done"]', 'active')
                removeClass('button[data-filter="todo"]', 'active')
                addClass('button[data-filter="all"]', 'active')
                hideElements('.todo')
                createTodos('.list-group', 'li', 'input', 'label', 'i', this.list)
                this.removeTodo()
                this.modifyStatus()
            })                
    }    

    findTodos() {
        document.querySelector('button[data-filter="todo"]')
            .addEventListener('click', () => {
                removeClass('button[data-filter="done"]', 'active')
                removeClass('button[data-filter="all"]', 'active')
                addClass('button[data-filter="todo"]', 'active')
                const filteredElements = this.list.filter((el) =>  el?.completed == false)                
                if (filteredElements) {
                    hideElements('.todo')
                    createTodos('.list-group', 'li', 'input', 'label', 'i', filteredElements)
                    this.removeTodo()
                    this.modifyStatus()
                }                
            })
        // Sends all the results from the array        
        // return this.list.filter((el) => el.status.toLowerCase().includes('todo'.toLowerCase()))
    }

    findDone() {
        document.querySelector('button[data-filter="done"]')
            .addEventListener('click', () => {
                removeClass('button[data-filter="todo"]', 'active')
                removeClass('button[data-filter="all"]', 'active')
                addClass('button[data-filter="done"]', 'active')
                const filteredElements = this.list.filter((el) => el?.completed === true)
                if (filteredElements) {
                hideElements('.todo')
                createTodos('.list-group', 'li', 'input', 'label', 'i', filteredElements)
                this.removeTodo() 
                this.modifyStatus()
                }   
                // console.log(this.list.filter((el) => el.completed === true))
            }) 
        // Sends all the results from the array
        // return this.list.filter((el) => el.status.toLowerCase().includes('done'.toLowerCase()))
    }

    findByWord(word) {
        // Sends all the results from the array
        return this.list.filter((el) => el.title.toLowerCase().includes(word.toLowerCase()))
    }

    removeTodo() {        
        // document.addEventListener("DOMContentLoaded", (event) => {
        let icons = document.getElementsByClassName('bi-trash')
        for (const icon of icons) {
            icon.addEventListener('click', (event) => {
                const activeIcon = event.currentTarget
                if (activeIcon) {
                    this.list.filter((el) => {
                    if (el) {
                        if (el?.id == activeIcon?.id) {
                        // delete this.list[el.id]
                            this.list[el.id] = undefined
                            const alert = document.querySelector('.alert')
                            const doc = document.getElementById('todo-wrapper-'+activeIcon.id)
                            doc.remove()
                            if (alert) {
                                alert.remove()
                            }                            
                            }                        
                        }                    
                    })
                }
                // const filteredElements = this.list.filter((el) => el.id == activeIcon.id)
                
                // const filteredElements = this.list.filter((el) => {
                //     if (el.id == activeIcon.id) {
                //         // delete el[el.id]
                //         console.log(this.list[el.id])
                //         this.list[el.id] = undefined
                //         // delete this.list[el.id]
                //     }
                
                // if (filteredElements) {
                //     filteredElements.splice(0, 1)
                
                // }
                // console.log(filteredElements)
                // filteredElements.splice(0, 1)
                // delete filteredElements[0]
                // this.list.forEach(id => {
                //     if (id.id == activeIcon.id) {
                //         console.log(this.id)
                //         delete this.list[id.id]
                //         // Reflect.deleteProperty(id, id)
                //         // console.log('Nous avons lId')
                //         // id.pop()
                //     }
                // })
                // const todo = this.list.find((todo) => todo.id === Item.id)

                // TodoList.list.pop()
            })
        }    
    }
}

function toggleRevealTodos() {
    todos.forEach(todo => todo.classList.toggle('hidden')
    )
}

function removeTodo() {        
    // window.addEventListener("DOMContentLoaded", (event) => {
        let icons = document.getElementsByClassName('bi-trash')
        for (const icon of icons) {
            icon.addEventListener('click', (event) => {
                const activeIcon = event.currentTarget
                console.log(Object.list.id)
                // const todo = TodoList.list.find((todo) => todo.id.includes(activeIcon))
                // console.log(todo)
                // TodoList.list.pop()
            })
        }
        // iconsArray.forEach(element => {
        //     element.addEventListener('click', () => {
        //         console.log(this)
        //     })
        // })
        // if (icons) {
        //     for (const item of icons) {
        //     console.log(item)
        //     // item.addEventListener('click', (e) => {
        //     //     console.log(e.currentTarget)
        //     //})
        //     }
        // }
        
        // icons.forEach(element => {
        //         element.addEventListener('click', (e) => {
        //             console.log(e)
        //         })
        //     })
          
    // })

    // icons.forEach(element => {
    //     element.addEventListener('click', (e) => {
    //         console.log(e)
    //     })
    // })
    // const removeTodo = document.querySelector('input[name="title"]')
    // const test = Array.from(items)
    // console.log(test)
    // let element = ''
    // for (let i = 0; i < items.length; i++) {
    //     // const element = removeTodo[i];
    //     element += items[i].innerHTML
    //     return element
    // }
    // console.log(element)
    // removeTodo.addEventListener('click', (event) => {
    //     console.log(event)
    // })
    // removeTodo.forEach(element => {
    //     element.addEventListener('click', (e) => {
    //         console.log(e.currentTarget)
    //         // this.list.find((todo) => todo.id.includes(todoId))
    //         // this.list.pop()
    //     })
    // })
    // removeTodo.addEventListener('click', (e) => {
    //         console.log(e.currentTarget)
    //         this.list.find((todo) => todo.id.includes(todoId))
    //         this.list.pop()
    //     })
}