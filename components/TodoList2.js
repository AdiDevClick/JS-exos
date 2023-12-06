import { showMessage } from "../classes/app.js"
import { createElement } from "../functions/dom2.js"

/**
 * @typedef {object} Todo
 * @param {number} id
 * @param {string} title
 * @param {boolean} completed
 */
export class TodoList 
{

    /** @type {Todo[]} */
    #todos = []

    /** @type {HTMLUListElement[]} */
    #listElement = []

    /** @param {Todo[]} todos */
    constructor(todos)
    {
        this.#todos = todos
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        element.innerHTML = `
        <form class="d-flex p-4">
        <input class="form-control" type="text" name="title" placeholder="Acheter des patates..." data-com.bitwarden.browser.user-edited="yes">
        <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
    <main>
        <div class="btn-group mb-4" role="group">
            <button class="btn btn-outline-primary active" type="button" data-filter="all">Toutes</button>
            <button class="btn btn-outline-primary" type="button" data-filter="todo">A faire</button>
            <button class="btn btn-outline-primary" type="button" data-filter="done">Faites</button>
        </div>

        <ul class="list-group"> 
        </ul>
    </main>
        `
        this.#listElement = element.querySelector('.list-group')
        this.#todos.forEach(todo => {
            const newTodo = new TodoListItem(todo)
            this.#listElement.append(newTodo.element)
        })
        element.querySelector('form').addEventListener('submit', e => this.#onSubmit(e))
        element.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', event => this.#toggleFilter(event))
        })
    }

    /**
     * @param {SubmitEvent} e 
     */
    #onSubmit(e) {
        try {
            e.preventDefault()
            const form = e.currentTarget
            const title = new FormData(form).get('title').toString().trim()
            if (title === '') {
                throw new Error (`Le champ est vide`, {cause: e})
            }
            const todo = {
                id: Date.now(),
                title: title,
                completed: false
            }
            const item = new TodoListItem(todo)
            this.#listElement.prepend(item.element)
            showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Todo ajouté avec succès !')
            form.reset()
        } catch (error) {
            showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message, '') 
        }        
    }

    /**
     * @param {PointerEvent} e 
     */
    #toggleFilter(e) {
        e.preventDefault()
        const target = e.currentTarget
        const filter = target.getAttribute('data-filter')
        target.classList.add('active')
        // if (filter.contains('all')) {
            console.log(filter)
        // }
    }
}

class TodoListItem 
{

    #element = []

    /** @type {Todo} */
    constructor(todo) 
    {
        const ids = todo.id
        const li = createElement('li', {
            id: 'todo-wrapper'+ids,
            class: 'todo list-group-item d-flex align-items-center'
        })
        this.#element = li
        const checkbox = createElement('input', {
            type: 'checkbox',
            id: 'todo-'+ids,
            class: 'form-check-input',
            checked: todo.completed ? '' : null
        })
        const label = createElement('label', {
            class: 'ms-2 form-check-label',
            for: 'todo-'+ids            
        })
        const button = createElement('button', {
            class: 'ms-auto btn btn-danger btn-sm',
            id: 'button-'+ids
        }) 
        
        label.innerText = todo.title
        button.innerHTML = '<i class="bi-trash"></i>'

        li.append(checkbox)
        li.append(label)
        li.append(button)
        this.toggle(checkbox)

        button.addEventListener('click', e => this.remove(e))
        checkbox.addEventListener('change', e => this.toggle(e.currentTarget)) 
    }

    /**
     * @return {HTMLElement} element 
     */
    // appendTo(element) {        
    //     element.append(this.#element)
    // }
    get element() {        
        return this.#element
    }

    /**
     * @param {PointerEvent} e 
     */
    remove(e) {
        e.preventDefault()
        this.#element.remove()
    }

    /**
     * Change l'état "Fait/A faire" de la tâche
     * @param {HTMLInputElement} checkbox 
     */
    toggle(checkbox) {
        if (checkbox.checked) {
            this.#element.classList.add('is-completed')
        } else {
            this.#element.classList.remove('is-completed')
        }
    }
}