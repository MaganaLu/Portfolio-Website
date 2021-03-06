const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',() =>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation = '';
        }else{
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 3}s';
            }
        });
        //burger animation
        burger.classList.toggle('toggle');


    });


    
}

let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

const app = () => {
    navSlide();
}

app();