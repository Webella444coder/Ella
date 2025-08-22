
gsap.from('.zoom-animate', {
    duration: 2.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
    });



gsap.from('.zoom-element', {
scrollTrigger: {
trigger: '.zoom-element',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});




gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom-ele', {
scrollTrigger: {
trigger: '.zoom-ele',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.element', {
scrollTrigger: {
trigger: '.element',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom-elem', {
scrollTrigger: {
trigger: '.zoom-elem',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate', {
scrollTrigger: {
trigger: '.animate',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom-eleml', {
scrollTrigger: {
trigger: '.zoom-eleml',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});




gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom-elemle', {
scrollTrigger: {
trigger: '.zoom-elemle',
start: 'top 80%', // Adjust as needed
end: 'bottom 20%', // Adjust as needed
toggleActions: 'play none none none'
},
scale: 0,
duration: 2.5,
ease: 'power1.inOut'
});


document.addEventListener('DOMContentLoaded', function() {
    var options = {
    strings: ['IF YOU CAN THINK IT','IF YOU CAN THINK IT','WE CAN PRINT IT'],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
    };
    var typed = new Typed("#typed", options);
    });


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
    navbar.style.backgroundColor = 'black'; // New background color
    } else {
    navbar.style.backgroundColor = 'transparent'; // Original background color
    }
    });
        
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    item.classList.toggle('active');
    });
    });
    });
    



    

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonialsPerView = 3; // Number of testimonials to show at a time

function showNextTestimonial() {
currentIndex++;
if (currentIndex >= totalTestimonials - testimonialsPerView) {
testimonialsContainer.style.transition = 'none';
currentIndex = 0;
testimonialsContainer.style.transform = `translateX(0)`;
setTimeout(() => {
testimonialsContainer.style.transition = 'transform 1.18s ease-in-out';
currentIndex++;
testimonialsContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
}, 50);
} else {
testimonialsContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
}
}

setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds

// Initially set the container width to accommodate all testimonials
testimonialsContainer.style.width = `${totalTestimonials * 300}px`;

// Set each testimonial width to be 400px
testimonials.forEach(testimonial => {
testimonial.style.width = '300px';
});









//let currentInde = 0;
//const testimonia = document.querySelectorAll('.testimonia');
//const totalTestimonia = testimonia.length;
//const testimonialsCon = document.querySelector('.testimonial-con');
//const testimoniaPerView = 3; // Number of testimonials to show at a time
//
//function showNextTestimonia() {
//currentInde++;
//if (currentInde >= totalTestimonia - testimoniaPerView) {
//testimonialsCon.style.transition = 'none';
//currentInde = 0;
//testimonialsCon.style.transform = `translateX(0)`;
//setTimeout(() => {
//testimonialsCon.style.transition = 'transform 1.18s ease-in-out';
//currentInde++;
//testimonialsCon.style.transform = `translateX(-${currentInde * 300}px)`;
//}, 50);
//} else {
//testimonialsCon.style.transform = `translateX(-${currentInde * 300}px)`;
//}
//}

//setInterval(showNextTestimonia, 3000); // Change testimonial every 3 seconds

//// Initially set the container width to accommodate all testimonials
//testimonialsCon.style.width = `${totalTestimonia * 300}px`;

//// Set each testimonial width to be 400px
//testimonia.forEach(testimonia => {
//testimoniaa.style.width = '300px';
//});
