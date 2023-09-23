let count = 1;


function submitViaEnter(event) {
    let keyCode = event.keyCode;
    const enterKey = "13"
    if(keyCode == enterKey) {
        getInput()
    }
}


function getInput() {
    const inputBar = document.getElementById("searchBar")

    if (inputBar.value === '') {
        return alert("you must type something!");
    }

    if (count >= 12) {
        return alert("too many tasks");
    }

    addTask(inputBar.value)
    inputBar.value = ''
}


function addTask(value) {
    const itemContainer = document.getElementById("itemContainer")

    let listItem = document.createElement('li')
    listItem.innerText = value
    listItem.onclick = function() {removeItem(listItem)}

    for (let i = 0; i < 12; i++) {
        if (localStorage.getItem("task" + i) === null) {
            listItem.id = "task" + i;
            break
        }
    }

    saveTask(listItem)
    itemContainer.appendChild(listItem)
    count++;
}


function removeItem(listItem) {
    deleteTask(listItem.id)
    listItem.remove();
    count--
}


function saveTask(listItem) {
    localStorage.setItem(listItem.id, listItem.innerText)
}


function deleteTask(itemId) {
    localStorage.removeItem(itemId)
}


function loadTasks() {
    const itemContainer = document.getElementById("itemContainer")

    for (let i = 0; i < 12; i++) {
        if (localStorage.getItem('task' + i) !== null) {
            let listItem = document.createElement('li')
            listItem.innerText = localStorage.getItem('task' + i)
            listItem.onclick = function() {removeItem(listItem)}
            listItem.id = 'task' + i
            itemContainer.appendChild(listItem)
            count++
        }
    }
}


document.addEventListener("DOMContentLoaded", loadTasks());
