let notesArray = JSON.parse(localStorage.getItem("data"));

if (notesArray) {
    let taskId = 0;
    for (let i = 0; i < notesArray.length; i++) {
        let noteDiv = generateNewNote();
        noteDiv.setAttribute("id", taskId)
        displayData(noteDiv, notesArray[i]);
        let removeIcon = document.createElement("span");
        generatRemoveIcon(noteDiv, removeIcon);
        addEventToIcon(removeIcon, taskId);
        taskId++;
    }
}


function onSave() {

    let taskInput = document.getElementById("task");
    let dateInput = document.getElementById("date");
    let timeInput = document.getElementById("time");

    let data = {
        task: taskInput.value,
        date: dateInput.value,
        time: timeInput.value
    };


    let storedNotesArray = JSON.parse(localStorage.getItem("data"));
    if (!storedNotesArray) {
        storedNotesArray = [];
    }

    try {
        let errorMessage = "";
        validateFillFields(errorMessage);

        storedNotesArray.push(data);
        let noteId = storedNotesArray.length - 1;

        let noteDiv = generateNewNote();

        noteDiv.setAttribute("id", noteId)

        displayData(noteDiv, data);

        let removeIcon = document.createElement("span");
        generatRemoveIcon(noteDiv, removeIcon);
        addEventToIcon(removeIcon, noteId);


        localStorage.setItem("data", JSON.stringify(storedNotesArray));

        onDelete();
    }
    catch (e) {
        alert(e.message);
    }
}


function onDelete() {
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

}


function validateFillFields(errorMessage) {
    if (!document.getElementById("task").value) {
        errorMessage = "the task field must be fill !";
    }

    if (!document.getElementById("date").value) {
        errorMessage = errorMessage + "the date field must be fill !";
    }

    if (!document.getElementById("time").value) {
        errorMessage = errorMessage + "the time field must be fill !";
    }

    if (errorMessage) {
        throw new Error(errorMessage);
    }
}


function generateNewNote() {
    let noteDiv = document.createElement("div");
    noteDiv.setAttribute("class", "note");

    let containerDiv = document.getElementById("container");
    containerDiv.append(noteDiv);
    return noteDiv;
}


function displayData(noteDiv, data) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");
    taskDiv.innerHTML = data.task;
    noteDiv.append(taskDiv);


    let dateDiv = document.createElement("div");
    dateDiv.setAttribute("class", "date");
    dateDiv.innerHTML = data.date;
    noteDiv.append(dateDiv);

    let timeDiv = document.createElement("div");
    timeDiv.setAttribute("class", "time");
    timeDiv.innerHTML = data.time;
    noteDiv.append(timeDiv);
}


function generatRemoveIcon(noteDiv, removeIcon) {
    removeIcon.setAttribute("class", "glyphicon glyphicon-remove");
    removeIcon.setAttribute("id", "removeIcon")
    noteDiv.append(removeIcon);
}


function addEventToIcon(removeIcon, noteId) {
    removeIcon.setAttribute("onclick", `removeNote(${noteId})`);
}

function removeNote(noteId) {
    let storedNotesArray = JSON.parse(localStorage.getItem("data"));

    if (storedNotesArray) {
        storedNotesArray.splice(noteId, 1);
    }

    document.getElementById("container").innerHTML = "";


    let taskId = 0;
    for (let i = 0; i < storedNotesArray.length; i++) {
        let noteDiv = generateNewNote();
        noteDiv.setAttribute("id", taskId)
        displayData(noteDiv, storedNotesArray[i]);
        let removeIcon = document.createElement("span");
        generatRemoveIcon(noteDiv, removeIcon);
        addEventToIcon(removeIcon, taskId);
        taskId++;
    }
    localStorage.setItem("data", JSON.stringify(storedNotesArray));
}