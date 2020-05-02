function showMessage(message, id, color){
    document.getElementById(id).textContent = message;
    document.getElementById(id).style.color = color;
}

function clickButton(message, id){
    document.getElementById(id).addEventListener('click', function () {
        alert(message);
    });
}
