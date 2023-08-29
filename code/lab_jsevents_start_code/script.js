const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const dateButton = document.querySelector("#date-button");

// input.addEventListener("input", (event) => {
// })

// date button
dateButton.addEventListener("click",()=>{
    dateButton.innerText = Date();
})


// toDo list
const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = content;
    list.appendChild(newListItem);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    list.appendChild(deleteButton);
    deleteButton.onclick = () => {
        list.removeChild(newListItem);
        list.removeChild(deleteButton);
    }

}

newInput = null;
input.addEventListener("input", (event) => {
    newInput = event.target.value;
})

enter.addEventListener("click", (input) => {
    createAndAppendListItem(newInput);
})


// make a delete button 
// make that delete button come up when you add an item 
// make the delete button functional (when pressed the item is removed)
