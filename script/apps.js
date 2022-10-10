const nav_links = document.getElementById("nav_links");
const hamburger = document.getElementById("hamburger");


function toggleButton(){
    nav_links.classList.toggle("active_nav")
}
hamburger.onclick = toggleButton


// const modalButtonsArr = document.querySelectorAll(".open-modal");

// modalButtonsArr.forEach((button)=>{
//     console.log(button)
//     button.onclick= (e)=>{
//         console.log(e.target)
//         e.target.classList.add("open")
//     }
// })

const modal_wrapper = document.getElementById("modal_wrapper")
const modalOpen = document.getElementById("modal_opener")
const modalClose = document.getElementById("modal_closer")

function modalOpener(){
    modal_wrapper.classList.add("modal__active")
    console.log("hello");
}
function modalCloser(){
    modal_wrapper.classList.remove("modal__active")
};

 
modalOpen.addEventListener("click", modalOpener);

modalClose.addEventListener("click", modalCloser)