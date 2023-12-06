import { showMessage } from "./classes/app.js"
import { TodoList } from "./components/TodoList2.js"
import { fetchJSON } from "./functions/api2.js"

try {
    showMessage('#liveAlertPlaceholder', 'alert alert-success', 'Chargement...')
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
    document.querySelector('.alert').remove()

} catch (error) {
    console.log(error)
    showMessage('#liveAlertPlaceholder', 'alert alert-danger', error.message + {cause: error}, '')
}
