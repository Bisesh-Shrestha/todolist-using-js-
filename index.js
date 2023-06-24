const inputText = document.getElementById("newTodo");
const todoList = document.getElementById("todo-list");

function keyPressed(event) {
  if (event.key === "Enter") {
    addTask();
  }
}
function addTask() {
  if (inputText.value !== "") {
    const listDiv = document.createElement("div");
    listDiv.classList.add("listDiv-styling");
    const list = document.createElement("p");
    list.innerHTML = inputText.value;
    list.classList.add("list-styling");

    let isCompleted = false;
    list.addEventListener("click", () => {
      isCompleted = !isCompleted;
      if (isCompleted) {
        list.style.textDecoration = "line-through";
        list.style.color = "gray";
      } else {
        list.style.textDecoration = "none";
        list.style.color = "black";
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "";
    deleteButton.classList.add("deleteBtn");
    deleteButton.addEventListener("click", () => {
      list.remove();
      deleteButton.remove();
    });

    listDiv.appendChild(list);
    listDiv.appendChild(deleteButton);
    todoList.append(listDiv);

    inputText.value = "";
  }
}
