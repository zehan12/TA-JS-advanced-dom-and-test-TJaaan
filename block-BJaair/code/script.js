let form = document.querySelector("form");
let div = document.querySelector(".div");
div.style.heigth = "100vh";
div.style.display = "flex";
div.style.flexWrap = "wrap";


let userInfo = {};

function handelSubmit(event){
    event.preventDefault();
    userInfo.text = form.elements.text.value;
    userInfo.option = form.elements.option.value;
    console.log(userInfo);
    let box = document.createElement("div")
    box.style.padding = "50px 70px";
    // box.classList.add();
    // let input = document.createElement('input');
    // input.setAttribute('type', 'text');
    let h2 = document.createElement("h2");
    h2.innerText = userInfo.text;
    let p = document.createElement("p");
    p.innerText = userInfo.option;
    box.append(h2,p);
    div.prepend(box)
}

form.addEventListener('submit',handelSubmit);

