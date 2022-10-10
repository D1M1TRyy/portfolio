const nav_links = document.getElementById("nav_links");
const hamburger = document.getElementById("hamburger");


function toggleButton(){
    nav_links.classList.toggle("active_nav")
}
hamburger.onclick = toggleButton