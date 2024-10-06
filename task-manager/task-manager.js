const todolist = [];

function  addTask() {
     const tasks = document.querySelector('.todo-task');
     todolist.push(tasks.value);
     tasks.value = '';
     console.log(todolist);
     displayTask();
}

function displayTask() {
    let html = '';

    for(let i =0;i<todolist.length;i++) {
        html +=  `<p>${todolist[i]}<button>Delete</button></p>`;
    }
    document.querySelector('.display').innerHTML = html;
}

