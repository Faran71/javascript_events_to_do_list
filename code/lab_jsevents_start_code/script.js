const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");

// input.addEventListener("input", (event) => {
// })


const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = content;
    list.appendChild(newListItem);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    list.appendChild()

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
