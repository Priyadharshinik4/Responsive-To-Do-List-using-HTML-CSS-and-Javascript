// Function to add a task
function add() {
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    if (input.value.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        var inputfield = document.createElement("input");
        inputfield.setAttribute("type", "text");
        inputfield.setAttribute("value", input.value);
        document.body.appendChild(inputfield);

        const deletebutton = document.createElement('button');
        deletebutton.innerText = ' Delete';
        deletebutton.onclick = function () {
            result.removeChild(taskDiv);
        };

        taskDiv.appendChild(inputfield);
        taskDiv.appendChild(deletebutton);

        result.appendChild(taskDiv);
        result.appendChild(document.createElement('br')); // Add a line break after each task

        input.value = '';
    }
}
