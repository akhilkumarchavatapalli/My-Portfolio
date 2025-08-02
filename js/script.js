const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  header.classList.toggle('sticky', window.scrollY > 50);
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal({
  distance: '0px',
  duration: 2500,
  reset: true
});
sr.reveal('.home, .project-title', {delay:190, origin: 'bottom' });
sr.reveal('.about, .projects, .career, .contact, .project-description, .project-key-features, .my-contributions, .results', { delay:200,origin: 'bottom' }); 

// Form default subject

document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    const subjectInput = document.getElementById('subject');
    if (!subjectInput.value.trim()) {
        subjectInput.value = 'Webpage Form Submission'; // Set default value if the field is empty
    }
});

// static page scrolling
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("a[data-scroll]");

  navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          const target = link.getAttribute("data-scroll");

          // Check if we're already on the homepage
          if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
              e.preventDefault();

              // Scroll to target
              const section = document.querySelector(target);
              if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  history.pushState("", document.title, window.location.pathname);
              }
          }
      });
  });
});


