function add(){
    const cel = String(document.getElementById("input").value)
    const result = document.getElementsByClassName("result")[0];
    result.innerHTML = cel;

    const inputfield = document.createElement("input");
    inputfield.innerHTML = result;
    inputfield.setAttribute("type", "text");


    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onclick", "deleteButton()");
    result.appendChild(deleteButton);
    

}























