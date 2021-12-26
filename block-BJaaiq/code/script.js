var script = document.createElement("script");
script.src = "quotes.js"
document.head.append("script");

console.log(quotes);

document.body.style.fontFamily = "sansSerif";
document.body.style.lineHeight = "1"
document.body.style.marginTop = "100px"
document.querySelector("div").style.padding = "100px"
document.querySelector("div").style.margin = "200px"




document.addEventListener("DOMContentLoaded", function(){
    alert(`The content of the DOM is loaded`);
    
    for(let i = 0 ; i < 3 ; i ++){
        let h2 = document.createElement("h2");
h2.innerText = quotes[i].quoteText;

let p = document.createElement("p");
p.innerText = quotes[i].quoteAuthor;

document.querySelector("body").append(document.querySelector("div"));
document.querySelector("div").append(h2,p);

    }
})


window.addEventListener('scroll',()=>{
    const scrollable = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    console.log(scrollable , scrolled);

    if ( scrollable <= 990 ){
        quotes.forEach((ele)=>{
            let h2 = document.createElement("h2");
            h2.innerText = ele.quoteText;
        
            let p = document.createElement("p");
            p.innerText = ele.quoteAuthor
            
            document.querySelector("body").append(document.querySelector("div"));
            document.querySelector("div").append(h2,p);
        })
    }

})