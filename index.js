const hide = document.querySelectorAll('.hide');
const icon = document.querySelectorAll('.fa-angle-up');


function show1() {
    hide[1].classList.add('hidden');
    hide[2].classList.add('hidden');
    hide[3].classList.add('hidden');
    hide[0].classList.toggle('hidden');
    if (hide[0].classList.contains('hidden')) {

        icon[0].style.transform = "rotate(0deg)";
    }
    else {

        icon[1].style.transform = "rotate(0deg)";
        icon[2].style.transform = "rotate(0deg)";
        icon[3].style.transform = "rotate(0deg)";
        icon[0].style.transform = "rotate(180deg)";
    }
}
function show2() {
    hide[0].classList.add('hidden');
    hide[2].classList.add('hidden');
    hide[3].classList.add('hidden');
    hide[1].classList.toggle('hidden');
    if (hide[1].classList.contains('hidden')) {

        icon[1].style.transform = "rotate(0deg)";
    }
    else {

        icon[1].style.transform = "rotate(180deg)";
        icon[2].style.transform = "rotate(0deg)";
        icon[3].style.transform = "rotate(0deg)";
        icon[0].style.transform = "rotate(0deg)";
    }
}
function show3() {
    hide[0].classList.add('hidden');
    hide[1].classList.add('hidden');
    hide[3].classList.add('hidden');
    hide[2].classList.toggle('hidden');
    if (hide[2].classList.contains('hidden')) {

        icon[2].style.transform = "rotate(0deg)";
    }
    else {

        icon[1].style.transform = "rotate(0deg)";
        icon[2].style.transform = "rotate(180deg)";
        icon[3].style.transform = "rotate(0deg)";
        icon[0].style.transform = "rotate(0deg)";
    }
}
function show4() {
    hide[0].classList.add('hidden');
    hide[2].classList.add('hidden');
    hide[1].classList.add('hidden');
    hide[3].classList.toggle('hidden');
    if (hide[3].classList.contains('hidden')) {

        icon[3].style.transform = "rotate(0deg)";
    }
    else {

        icon[1].style.transform = "rotate(0deg)";
        icon[2].style.transform = "rotate(0deg)";
        icon[3].style.transform = "rotate(180deg)";
        icon[0].style.transform = "rotate(0deg)";
    }
}
const div = document.querySelectorAll('.div');
function sideshow1() {
    div[0].classList.toggle('hidesidebar');
    if (div[0].classList.contains('hidesidebar')) {
        icon[4].style.transform = "rotate(0deg)";
    }
    else {
        icon[4].style.transform = "rotate(180deg)";
    }
}
function sideshow2() {
    div[1].classList.toggle('hidesidebar');
    if (div[1].classList.contains('hidesidebar')) {
        icon[5].style.transform = "rotate(0deg)";
    }
    else {
        icon[5].style.transform = "rotate(180deg)";
    }
}
function sideshow3() {
    div[2].classList.toggle('hidesidebar');
    if (div[2].classList.contains('hidesidebar')) {
        icon[6].style.transform = "rotate(0deg)";
    }
    else {
        icon[6].style.transform = "rotate(180deg)";
    }
}
function sideshow4() {
    div[3].classList.toggle('hidesidebar');
    if (div[3].classList.contains('hidesidebar')) {
        icon[7].style.transform = "rotate(0deg)";
    }
    else {
        icon[7].style.transform = "rotate(180deg)";
    }
}

// const menubar = document.getElementsByClassName('menubar');
const sidebar = document.getElementById('sidebar');
function menubar(){
    sidebar.style.transform = "translateX(0)"
}
function cross(){
    sidebar.style.transform = "translateX(360px)"
}


const arrayofreviews = [
    {
        name:"Kanisk",
        source:"https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"reviewer1",
        work:"Designer",
        disc:"Support matters to me the most. Your specialists were always there to help me immediately."
    },
    {
        name:"Amaria",
        source:"https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"reviewer2",
        work:"Web Developer",
        disc:"I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance."
    },
    {
        name:"haddy",
        source:"https://images.pexels.com/photos/1793306/pexels-photo-1793306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"reviewer3",
        work:"Entrepreneur",
        disc:"Support matters to me the most. Your specialists were always there to help me immediately."
    },
    {
        name:"Jack",
        source:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"reviewer4",
        work:"Graphics and Web Designer",
        disc:"Hostinger impressed me with amazing customer experience and effortless migration from my previous hosting provider."
    },
];

let i=0;

const left = document.getElementById('left');
const right = document.getElementById('right');
const disc = document.getElementById('disc');
const work = document.getElementById('work');
const revimage = document.getElementById('revimage');
const cliname = document.getElementById('name');

right.addEventListener('click',function(){
    if(i>=3){
        i=0;
    }
    else{
        i++;
    }
    disc.textContent = arrayofreviews[i].disc;
    cliname.textContent = arrayofreviews[i].name;
    work.textContent = arrayofreviews[i].work;
    revimage.src = arrayofreviews[i].source;
    revimage.alt = arrayofreviews[i].alt;
});
left.addEventListener('click',function(){
    if(i<0){
        i=3;
    }
    else{
        i--;
    }
    disc.textContent = arrayofreviews[i].disc;
    cliname.textContent = arrayofreviews[i].name;
    work.textContent = arrayofreviews[i].work;
    revimage.src = arrayofreviews[i].source;
    revimage.alt = arrayofreviews[i].alt;
});


document.onclick = function(clickevent){
    if(!clickevent.target.classList.contains('close')){
        hide[1].classList.add('hidden');
        hide[2].classList.add('hidden');
        hide[3].classList.add('hidden');
        hide[0].classList.add('hidden');
        
        icon[1].style.transform = "rotate(0deg)";
        icon[3].style.transform = "rotate(0deg)";
        icon[2].style.transform = "rotate(0deg)";
        icon[0].style.transform = "rotate(0deg)";
    }
}
