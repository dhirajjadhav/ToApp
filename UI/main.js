
// Add Event to button
document.getElementById("addBtn").addEventListener("click", function(ev){
    var input = document.getElementById("input"); // element get
    if(input.value != "" && input.value != undefined)
    {
        createTaskElement(input.value);
        input.value  = "";
        input.placeholder  = "Add New Task";
    }
});

// Create Task
function createTaskElement(task){
    var listItem = document.createElement("div");
    listItem.classList = "card card_item";
    listItem.innerHTML = task;

    document.getElementById("ListGroup").appendChild(listItem);
}

//Initalize tasks
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Typical action to be performed when the document is ready:       
       let listTasks = JSON.parse(xhttp.response)
        for(let i = 0; i < listTasks.length; i++)
        {
            createTaskElement(listTasks[i].task);
        }
    }
};
xhttp.open("GET", "http://localhost:3000/tasks", true);
xhttp.send();
