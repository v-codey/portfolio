// Header scroll

let nav = document.querySelector(".navbar");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});


let hover = document.querySelector("#addhover").getElementsByClassName("col-md-4");
let hoverEffect = document.querySelector(".hover-effect");
let listSkill = ["HTML 5", "CSS3", "ES6/Javascript", "jQuery", "Bootstrap 5", "Node.js", "Express" , "mongoDB" , "Github"];
for(let i = 0; i< hover.length; i++){
    hover[i].addEventListener("mouseover", ()=>{
        hoverEffect.innerHTML = `<h2 class="text-center text-secondary">${listSkill[i]}</h2>`;
    });
}
