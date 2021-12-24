let form = document.querySelector("form");
let div = document.querySelector(".div");

let userInfo = {};

function handelSubmit(event){
    event.preventDefault();
    userInfo.text = form.elements.text.value;
    userInfo.option = form.elements.option.value;
    console.log(userInfo);
    let box = document.createElement("div")
    // box.classList.add();
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    
}

form.addEventListener('submit',handelSubmit);

