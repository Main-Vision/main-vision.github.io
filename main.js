
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title-color',{delay: 400}); 
sr.reveal('.button',{delay: 300}); 
sr.reveal('#flip',{delay: 100}); 
sr.reveal('.home__titles',{delay: 300});
sr.reveal('.home__subtitles',{delay: 300});
sr.reveal('.home__img',{delay: 200}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.footer__icon',{ interval: 200}); 

// /*SCROLL ABOUT*/
// sr.reveal('.about__img',{interval:100}); 
// // sr.reveal('.about__subtitle',{delay: 400}); 
// sr.reveal('.about__text',{interval: 300}); 

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
// sr.reveal('.skills__data',{interval: 200}); 
// sr.reveal('.skills__img',{delay: 600});

// /*SCROLL WORK*/
// sr.reveal('.work__img',{interval: 200}); 

// /*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200}); 


//COPY ON CLIBOARD
function copyEmail() {
    /* Get the text field */
    //copied email
    var copyText = document.getElementById("myInput");
    //copied phone number
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("This is copied: " + copyText.value);
}

// Get the button and the dropdown content
var dropbtn = document.querySelector('.dropbtn');
var dropdownContent = document.getElementById("myDropdown");

// Toggle the dropdown content when the button is clicked
dropbtn.onclick = function() {
  dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
}
