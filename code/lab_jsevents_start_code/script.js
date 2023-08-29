const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const dateButton = document.querySelector("#date-button");
const completedList = document.querySelector("#completed-list");
// input.addEventListener("input", (event) => {
// })

// date button
dateButton.addEventListener("click",()=>{
    dateButton.innerText = Date();
    setTimeout(()=> {dateButton.innerText = "Today's Date";},5000);
})


// toDo list
const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = content;
    list.appendChild(newListItem);
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    list.appendChild(completeButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    list.appendChild(deleteButton);
    deleteButton.onclick = () => {
        list.removeChild(newListItem);
        list.removeChild(deleteButton);
        list.removeChild(completeButton);
    }

    completeButton.onclick = () => {
        list.removeChild(newListItem);
        list.removeChild(deleteButton);
        list.removeChild(completeButton);
        completedList.appendChild(newListItem);
        // completedList.appendChild(deleteButton);
        // box.setAttribute("style",`background-color: ${newColour}`);
        completedList.setAttribute("style",`text-decoration: line-through`)
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
