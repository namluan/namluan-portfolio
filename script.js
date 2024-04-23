// Init
gsap.registerPlugin(ScrollTrigger) 
// body
const mouseCursor = document.querySelector(".cursor");
let clickableElements = document.querySelectorAll('a, button, .clickable-element, [onclick]'); // Sélectionne tous les éléments cliquables
const splitTypes = document.querySelectorAll('.about-content')


window.addEventListener("scroll", function() {
    var elementTarget = document.querySelector(".profile");
    const nav = document.querySelector('.nav-links');
    const nav2 = document.querySelector('.logo');
    if (window.scrollY > ((elementTarget.offsetTop -20 ) + elementTarget.offsetHeight)) {
        nav.classList.add('scrolled');
        nav2.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        nav2.classList.remove('scrolled');
    }
  });
  
window.addEventListener('mousemove', (e)=> {
    let x = e.pageX;
    let y = e.pageY;

    mouseCursor.style.top = y + "px";
    mouseCursor.style.left = x + "px";
});

// var typed = new Typed('#multiple-text', {
//     strings: ['Voici mon Portfolio !'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

// splitTypes.forEach((char, i) => {
//     const text = new SplitType(char, { types: 'chars'})

//     gsap.from(text.chars,{
//         scrollTrigger: {
//             trigger: char,
//             start: 'top 80%',
//             end: 'top 20%',
//             scrub: false,
//             markers: true,
//         },
//         y:100,
//         opacity: 0.2,
//         stagger: 0.1
//     })
// })

// gsap.to(".about-content", {
//     scrollTrigger: ".about-content", // start animation when ".box" enters the viewport
//     x: 500,
    
//   });

function revealfun(){
    window.sr = ScrollReveal({ duration:(900), distance:'350px', easing:'ease-out'});
    sr.reveal('.profile h1', {origin:'left', reset:true});
    sr.reveal('.profile h2', {origin:'right', reset:true});
    sr.reveal('.timeline');
};

window.addEventListener('load', ()=>{
    revealfun();
})


clickableElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    });
    element.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    });
});

// navlinks.forEach(link => {
//     link.addEventListener('mouseover', ()=>{
//         mouseCursor.classList.add("link-grow");
//     });
//     link.addEventListener('mouseleave', ()=>{
//         mouseCursor.classList.remove("link-grow");
//     });
// });

// btncont.forEach(link => {
//     link.addEventListener('mouseover', ()=>{
//         mouseCursor.classList.add("link-grow");
//     });
//     link.addEventListener('mouseleave', ()=>{
//         mouseCursor.classList.remove("link-grow");
//     });
// });


// let navlinks = document.querySelectorAll('.project_card');
// const cards = document.querySelectorAll('.project_card');
// let btncont = document.querySelectorAll('.article-container');
// cards.forEach((card, index)=>{
//     card.addEventListener('click',()=>{
//         const state = Flip.getState(cards);

//         const isCardActive = card.classList.contains("active");
//         cards.forEach((otherCard, otherIndex)=>{
//             otherCard.classList.remove("active");
//             otherCard.classList.remove("is-inactive");
//             if(!isCardActive && index !== otherIndex){
//                 otherCard.classList.add("is-inactive");
//             }
//         });
//         if(!isCardActive) card.classList.add("active");


//         Flip.from(state, {
//             duration: 1,
//             ease: "expo.out",
//             absolute: true,
//             // onComplete: () => {
//             //     gsap.to('.project_card p', {y : 500})
//             // }
//         });
//     });
// });