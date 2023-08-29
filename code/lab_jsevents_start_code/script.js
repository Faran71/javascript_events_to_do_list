const enter = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");

// input.addEventListener("input", (event) => {

// })


const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = content;
    list.appendChild(newListItem);
}

input.addEventListener("input", (event) => {
    console.log(event.target.value);
})

// enter.addEventListener("click", (input) => {
//     const newInput = input.target.value;
//     createAndAppendListItem(newInput);
// })