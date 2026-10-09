gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
  smoothTouch: 0.1,
  effects: true
});

gsap.to("h1", {
  y: 400,
  scrollTrigger: {
    trigger: ".pai",
    start: "0% 0%",
    end: "100% 0%",
    scrub: true
  }
});

const toggleBtn = document.getElementById('toggle-theme');
const themeIcon = toggleBtn.querySelector('i');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  let theme = 'light';
  
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    theme = 'dark';
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

  localStorage.setItem('theme', theme);
});

const modaloverlay = document.querySelector(".overlay");

function alternarmodal(){
    modaloverlay .classList.toggle("hide")
}