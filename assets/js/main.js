
let todo;
const olTodoList = document.getElementById('olTodoList');
let divTodoInput = document.getElementById('todoInput');


function fn_new_entries() {

    todos = divTodoInput.value;
    olTodoList.innerHTML = olTodoList.innerHTML + `<li class="listItem">${todos}</li>`;

}
