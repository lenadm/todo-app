let count = 1;

function submitViaEnter(event) {
    let keyCode = event.keyCode;
    const enterKey = "13"
    if(keyCode == enterKey) {
        addTask()
    }
}

function addTask() {
    const inputBar = document.getElementById("searchBar")
    const itemcontainer = document.getElementById("itemContainer")

    if (inputBar.value === '') {
        alert("you must type something!")
    }

    if (count > 12) {
        alert("too many tasks")
    }

    let listItem = document.createElement('li')
    listItem.innerText = inputBar.value
    itemcontainer.appendChild(listItem)
    listItem.onclick = function() {removeTask(listItem)}
    count++;
    inputBar.value = ''
}

function removeTask(listItem) {
    listItem.remove();
    count--;
}