// import { Item } from "./item.js"

/**
 * @async
 * Fetch Json API articles et crer un élément HTML avec loading message
 * @returns {Error} Erreur avec couleur au choix
 */
async function fetchPosts() {    
    try {
        showMessage('.error', 'loader', 'Chargement...')
        const newPosts = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }) 
        if (!newPosts.ok) {
            throw new Error('Impossible de récupérer les données', {cause: newPosts})
        }    
        const posts = await newPosts.json()   
        document.querySelector('#loader').remove()
        // const doc = document.contains('#loader')
        // doc.remove()     
        createPostsWithText('#lastPosts', 'article', 'h2', 'p', posts)        
    } catch(error) {
        showMessage('.error', 'error', error.message, 'red')
        return
    }
}
// fetchPosts()

// export function hideElements(wrapperSelector, filteredElements) {
//     const test = document.querySelector(wrapperSelector)
//     filteredElements.forEach((element) => {
//         element.test.classList.toggle('hidden')
//         // element++
//         // test.forEach(element => {
//         //     console.log(element)
//         // })
//         console.log(test)
//         // hideWrappers(test)
//     })
    
//     // return wrapper
// }

/**
 * Permet de retirer un ou plusieurs éléments du DOM
 * @param {HTMLElement} wrapperSelector 
 */
export function hideElements(wrapperSelector) {
    const wrappers = document.querySelectorAll(wrapperSelector)
    wrappers.forEach(wrapper => {
        wrapper.remove()
    })
}

export function removeClass(select, classes) {
    const selector = document.querySelector(select)
        selector.classList.remove(classes)
}

export function addClass(select, classes) {
    const selector = document.querySelector(select)
        selector.classList.add(classes)
}




// export function hideElement(Selector) {
//     const wrapper = document.querySelector(Selector)
//     wrapper.remove()
// }
// export function hideWrappers(wrapperSelector) {
//     const wrappers = document.querySelectorAll(wrapperSelector)
//     wrappers.forEach(wrapper => {
//         wrapper.classList.toggle('hidden')
//     })
// }
// export function hideElements(wrapperSelector, arrElements) {
//     const wrapper = document.querySelector(wrapperSelector)   
//     arrElements.forEach(element => {
//         wrapper.classList.toggle('hidden')
//     })  
//     return wrapper
// }

export function createTodos(wrapperSelector, tagName, checkbox, label, icon, arrElements) {
    const wrapper = document.querySelector(wrapperSelector)  
    for (const arrElement of arrElements) {
        if  (arrElement) {
            
            let li_object = {
                id: 'todo-wrapper-'+arrElement.id,
                class: 'todo list-group-item d-flex align-items-center'
            }
            let checkbox_object = {
                type: 'checkbox',
                id: 'todo-'+arrElement.id,
                class: 'form-check-input'
            }
            let label_object = {
                for: 'todo-'+arrElement.id,
                class: 'ms-2 form-check-label'
            }
            let icon_object = {
                class: 'bi-trash ms-auto btn btn-danger btn-sm',
                id: arrElement.id
            }

            const newTodoList = createElements(tagName, li_object)
            const newCheckbox = createElements(checkbox, checkbox_object)
            const newLabel = createElements(label, label_object)
            const newIcon = createElements(icon, icon_object)

            if (arrElement?.completed == true) {
                newCheckbox.setAttribute('checked', '')
            }

            newLabel.innerText = arrElement.title

            newTodoList.appendChild(newCheckbox)
            newTodoList.appendChild(newLabel)
            newTodoList.appendChild(newIcon)

            wrapper.append(newTodoList)  
        }         
    }   
    return wrapper
}

export function createTodo(wrapperSelector, tagName, checkbox, label, icon, arrElements) {
    const wrapper = document.querySelector(wrapperSelector)   
    let ids = ''
    // let isCompleted = ''
    for (const element of arrElements) {
        ids = element?.id
        // if (element?.completed == true) {
        //     // isCompleted = true
        //     console.log('true')
        // }
    }

    let icon_object = {
        class: 'bi-trash ms-auto btn btn-danger btn-sm',
        id: ids
    }

    let li_object = {
        class: 'todo list-group-item d-flex align-items-center',
        id: 'todo-wrapper-'+ids
    }
    let checkbox_object = {    
        type: 'checkbox',
        id: 'todo-'+ids,
        class: 'form-check-input'
    }
    let label_object = {
        for: 'todo-'+ids,
        class: 'ms-2 form-check-label'
    }

    const newTodoList = createElements(tagName, li_object)
    const newCheckbox = createElements(checkbox, checkbox_object)
    const newLabel = createElements(label, label_object)
    const newIcon = createElements(icon, icon_object)

    // const checkedValue = newCheckbox.setAttribute('checked', '')

    if (arrElements) {
        for (const arrElement of arrElements) {  
            newLabel.innerText = arrElement?.title          
            // if (arrElement.completed === false) {
            // // if (isCompleted && newCheckbox) {
            //     newCheckbox.setAttribute('checked', '')
            // }
        } 
    }
    

    // newLabel.innerText = labels
    newTodoList.appendChild(newCheckbox)
    newTodoList.appendChild(newLabel)
    newTodoList.appendChild(newIcon)

    wrapper.append(newTodoList)    
    return wrapper
}

/**
 * Create HTML Elements with 3 levels (exemple: div > h2 > p) 
 * and insert a title and a body from the array/object
 * @param {Node} wrapperSelector 
 * @param {HTMLElement} tagName 
 * @param {{title: string, body: string}} arrElements
 * @param {Array} arrElements 
 */
export function createPostsWithText(wrapperSelector, tagName, title, subElement, arrElements) {
    const selector = document.querySelector(wrapperSelector)    
    for (const arrElement of arrElements) {
        const newArticle = document.createElement(tagName)
        const newBody = document.createElement(subElement)
        const newTitle = document.createElement(title)

        newTitle.innerText = arrElement.title
        newBody.innerText = arrElement.body

        newArticle.appendChild(newTitle)
        newArticle.appendChild(newBody)

        selector.append(newArticle)   
    }    
    return selector
}

// function createArticle(content) {
//     const article = document.createElement('article')
//     article.append(createElementWithText('h2', content.title))
//     article.append(createElementWithText('p', content.body))
//     return article
// }

function createPostsWithTexts(selector, tagName, firstChild, subChild, arrElements) {
    const select = document.querySelector(selector)
    for (const arrElement of arrElements) {
        select.append(createArticle(arrElement, tagName, firstChild, subChild))
    }
}

/**
 * Crée un élément HTML représentant un article 
 * @param {{title: string, body: string}} arrContent 
 * @param {Node} tagName 
 * @param {ChildNode} firstChild 
 * @param {ChildNode} subChild 
 * @returns {HTMLElement}
 */
function createArticle(arrContent, tagName, firstChild, subChild) {
    const article = document.createElement(tagName)
    article.append(createElementWithText(firstChild, arrContent.title))
    article.append(createElementWithText(subChild, arrContent.body))
    return article
}

// function createTodos(arrContent, tagName, firstChild, subChild) {
//     const article = document.createElement(tagName)
//     article.append(createElementWithText(firstChild, arrContent.title))
//     article.append(createElementWithText(subChild, arrContent.body))
//     return article
// }

/**
 * 
 * @param {*} tagName 
 * @param {*} content 
 * @returns {HTMLElement}
 */
function createElementWithText(tagName, content) {
    const element = document.createElement(tagName)
    element.innerText = content
    return element
}

function createPost(tagName, element, subElement) {
    const selector = document.querySelector(tagName)
    const newDiv = document.createElement(element)
    const newBody = document.createElement(subElement)
    newDiv.appendChild(newBody)
    selector.append(newDiv)
}

/**
 * Crer une Div avec une couleur à définir
 * pour afficher un message d'erreur ou loader
 * Il ne peut y avoir qu'une seule instance du message, il sera supprimé à chaque appel
 * @param {Node} wrapperSelector 
 * @param {HTMLElement} selector 
 * @param {string} message 
 * @param {HTMLStyleElement} color 
 * @returns {HTMLElement}
 */
export function showMessage(wrapperSelector, selector, message, color = '') {
    let newSpan = document.querySelector(selector)
    const createdSpan = document.querySelector('.alert')
    // const createdBtn = document.querySelector('.btn-close')
    const wrapper = document.querySelector(wrapperSelector)
    if (createdSpan) {
        createdSpan.remove()
        // createdBtn.remove()
    }

    if (!newSpan) {
        let input_objectSpan = {
            role:"alert"
        }
        newSpan = createElements('div', input_objectSpan)
        let input_object = {
            type: 'button',
            class: 'btn-close',
            'data-bs-dismiss': 'alert',
            'aria-label': 'Close'
        }
        let newButton = createElements('button', input_object)
        newSpan.classList = `${selector} alert-dismissible fade show`
        // newSpan.insertAdjacentElement("beforebegin", newButton)
        newSpan.innerText = message
        newSpan.style.color = color
        newSpan.append(newButton)
        // span.appendChild(newButton)
        // wrapper.append(newButton)
        wrapper.append(newSpan)
    }   
    return newSpan
}

function createElements(name, options) {
    let element = document.createElement(name);
    for (let key in options) {
        element.setAttribute(key, options[key]);
    }
    return element
}