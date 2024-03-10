gsap.registerPlugin(Flip);

let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll('.project_card');
let btncont = document.querySelectorAll('.article-container');
let clickableElements = document.querySelectorAll('a, button, .clickable-element, [onclick]'); // Sélectionne tous les éléments cliquables



window.addEventListener('mousemove', cursor);

var typed = new Typed('#multiple-text', {
    strings: ['Voici mon Portfolio !'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}


clickableElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    });
    element.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    });
});

navlinks.forEach(link => {
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove("link-grow");
    });
});

btncont.forEach(link => {
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove("link-grow");
    });
});


const cards = document.querySelectorAll('.project_card');

cards.forEach((card, index)=>{
    card.addEventListener('click',()=>{
        const state = Flip.getState(cards);

        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherIndex)=>{
            otherCard.classList.remove("active");
            otherCard.classList.remove("is-inactive");
            if(!isCardActive && index !== otherIndex){
                otherCard.classList.add("is-inactive");
            }
        });
        if(!isCardActive) card.classList.add("active");


        Flip.from(state, {
            duration: 1,
            ease: "expo.out",
            absolute: true,
            // onComplete: () => {
            //     gsap.to('.project_card p', {y : 500})
            // }
        });
    });
});