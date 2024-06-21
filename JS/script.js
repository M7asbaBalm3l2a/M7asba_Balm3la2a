
function changeBg(){
    var headercolor = document.getElementById('header');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        headercolor.classList.remove('headerColor');
    } else{
        headercolor.classList.add('headerColor');
    }
}
window.addEventListener('scroll', changeBg);



var menu = document.getElementById("menu");

function openmenu(){
    menu.style.left = "0";
}
function closemenu(){
    menu.style.left = "-35%";
}