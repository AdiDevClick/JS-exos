import { createElement } from "../functions/dom.js"

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */
export class TodoList 
{

    /** @type {Todo[]} */
    #todos = []

    /**
     * @param {Todo[]} todos 
     */
    constructor(todos) 
    {
        this.#todos = todos
        // this.id = id
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        element.innerHTML = `<form class="d-flex p-4">
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
    </main>`
    const list = element.querySelector('.list-group')
        this.#todos.forEach(todo => {
            const newTodo = new TodoListItem(todo)
            newTodo.appendTo(list)
        })
    }
}

class TodoListItem 
{

    #element = []

    /**
     * @type {Todo} todo 
     */
    constructor(todo) {
        const id = `todo-${todo.id}`
        const li = createElement('li', {
            class: 'todo list-group-item d-flex align-items-center'
        })
        const checkbox = createElement('input', {
            type: 'checkbox',
            id,
            class: 'form-check-input'
        })
        const label = createElement('label', {
            class: 'ms-2 form-check-label',
            for: id
        })
        label.innerText = todo.title
        const button = createElement('button', {
            class: 'ms-auto btn btn-danger btn-sm'
        })        
        button.innerHTML = '<i class="bi-trash"></i>' 

        li.append(checkbox)
        li.append(label)
        li.append(button)
        this.#element = li
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element) {
        element.append(this.#element)
    }
}