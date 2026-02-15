let todoList = [{
    name: 'make dinner',
    dueDate: '2024-06-01'
}, {
    name: 'wash plates',
    dueDate: '2024-06-01'
}
];
        

        function renderTodoList() {
            let todoListHTML = '';
            for (let i = 0; i <todoList.length; i++) {
                const todoObject = todoList[i];
                //const name = todoObject.name;
                //const dueDate = todoObject.dueDate;
                const { name, dueDate} =todoObject;
               
                const html = `
                
                    ${name} ${dueDate}
                    <button onclick="
                        todoList.splice(${i}, 1)
                        renderTodoList();
                    ">Delete</button>
                </p>
                `;
                todoListHTML += html
            }

            const result = document.querySelector('.js-todo-list')
            result.innerHTML = todoListHTML
        }
        renderTodoList()
    
        function addTodo() {
            const inputElement = document.querySelector('.js-name-input');
            const name = inputElement.value;
            console.log(name);

            const dateInputElement = document.querySelector('.js-due-date');
            const dueDate = dateInputElement.value;


            todoList.push({
                //name: name,
                //dueDate: dueDate,
                name,
                dueDate
            });
    
            console.log(todoList);
            inputElement.value = '';

            renderTodoList()

        }

        