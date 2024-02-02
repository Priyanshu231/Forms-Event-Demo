//TODO: contents of the list item must be the input given in the text box
//TODO: when the user clicks the button, the input must be added to the list
//TODO: if the input is empty, it must not be added to the list
//TODO: the input field must be cleared after the input is added to the list
let button = document.getElementById('addTodo')
let input = document.getElementById('todo')
let list = document.getElementById('todoList')
button.onclick = function () {
    if (input.value !== '') {
        let listValue = document.createElement('li')
        listValue.innerHTML = input.value
        list.appendChild(listValue)
    }
}