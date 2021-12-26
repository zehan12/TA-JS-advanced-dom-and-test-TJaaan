let form = document.querySelector("form");

let info = {};

function handelClick(event){
    event.preventDefault();
    console.log(event)
    info.text = form.elements.text.value;
    let block = document.
}

form.addEventListener("submit",handelClick)