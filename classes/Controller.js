import { showMessage } from "./app.js";
import { Item, newTodo } from "./item.js";
import { TodoList } from "./TodoList.js";

const item = new TodoList()
// item.removeTodo()
item.fetchData()
// item.addTodos([
//     new Item('test1', true),
//     new Item('test2', true),
//     new Item('test3', true)
// ])

item.newTodos()
const test = new Item('')
// item.addTodo(test)
// item.addTodo(newTodos())
// const r = newTodos()
// addTodos(r)

// console.log(item.list.title)

// console.log(item.findTodos())
// console.log(item.findAllByTitle())
item.findAllByTitle()
item.findTodos()
item.findDone()

// console.log(item.findDone())
// console.log(item.list[0].title)


