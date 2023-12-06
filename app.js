import { TodoList } from "./components/TodoList2.js"
import { showMessage } from "./classes/app.js"
import { fetchJSON } from "./functions/api.js"

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos) 
    showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Chargement...')
    list.appendTo(document.querySelector('#todolist'))
    document.querySelector('.alert').remove()
} catch (error) {
    showMessage('#liveAlertPlaceholder','alert alert-danger', error.message + {cause: error}, '' )
}
