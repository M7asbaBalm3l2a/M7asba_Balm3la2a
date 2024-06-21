
function changeBg(){
    var headercolor = document.getElementById('header');
    var scrollValue = window.scrollY;
    if(scrollValue < 60){
        headercolor.classList.remove('headerColor');
    } else{
        headercolor.classList.add('headerColor');
    }
}

window.addEventListener('scroll', changeBg);


function changeWth(){
    var sidewidth = document.getElementById('aside');
    var scrollValue = window.scrollY;
    if(scrollValue < 400){
        sidewidth.classList.remove('asideWidth');
    } else{
        sidewidth.classList.add('asideWidth');
    }
}
window.addEventListener('scroll', changeWth);




var menu = document.getElementById("menu");

function openmenu(){
    menu.style.left = "0";
}
function closemenu(){
    menu.style.left = "-35%";
}