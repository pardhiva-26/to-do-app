let todo_list = JSON.parse(localStorage.getItem('todo')) || [];
display_items();

function add_to_list() {
    let inputElement = document.querySelector('#todo_input');
    let dateElement = document.querySelector('#todo_date');
    let element = inputElement.value;
    let key = dateElement.value;
    if (element === '' || key === '') {
        alert('enter both date and item'); 
        return;// Do nothing if the input or date is empty
    }
    todo_list.push({item: element, dueDate: key});
    localStorage.setItem('todo', JSON.stringify(todo_list));
    inputElement.value = '';
    dateElement.value = '';
    
    display_items();
}

function display_items() {
    let todo_item = document.querySelector('#items_container');
    let innerhtml = '';
    todo_list = JSON.parse(localStorage.getItem('todo')) || [];

    for (let i = 0; i < todo_list.length; i++) {
        let {item, dueDate} = todo_list[i];
        innerhtml += `
          
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="butts_delete" onclick="delete_item(${i})">Delete</button>
        `;
    }
    todo_item.innerHTML = innerhtml;
}

function delete_item(index) {
    todo_list.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todo_list));
    display_items();
}
