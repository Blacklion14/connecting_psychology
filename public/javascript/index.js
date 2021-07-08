// Down Scrol
const DownScroll = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    var head = document.querySelector(".nav-header");
    var link = document.querySelectorAll(".navbar-light .navbar-nav .nav-link");
    var butt = document.querySelector(".navbar-light .navbar-toggler");
    butt.classList.toggle("nav-button", window.scrollY > 0);
    head.classList.toggle("nav-head", window.scrollY > 0);
    header.classList.toggle("shadow", window.scrollY > 0);
    header.classList.toggle("fixed", window.scrollY > 0);
  });
}

DownScroll();

// On Click Nav

function fonclick() {
  var coll = document.querySelector(".collapse");
  coll.classList.remove("show");
}



// Cursor
// let mouse = document.querySelector(".cursor");

// window.addEventListener('mousemove', cursor);

// function cursor(e) {
//   mouse.style.top = e.pageY + 'px';
//   mouse.style.left = e.pageX + 'px';
// }





// GSAP
const head_img = document.querySelector('.header_img');
const head_text = document.querySelector('.head-text');
const slide = document.querySelector('.slider_image');
// const hamburger = document.querySelector('.hamburger');
// const headline = document.querySelector('.headline');

const tl = new TimelineMax();

const gsap = () => {
  tl.fromTo(head_img, 1, {
      height: "50%"
    }, {
      height: "80%",
      ease: Power2.easeInOut
    })
    .fromTo(head_img, 1.2, {
      width: "50%"
    }, {
      width: "50%",
      ease: Power2.easeInOut
    })
    .fromTo(head_text, 1.2, {
      x: "-100%"
    }, {
      x: "0%",
      ease: Power2.easeInOut
    }, "-=1.2")
   
}

const slider = () => {
   tl.fromTo(slide, 0.5, {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0
    }, "-=0.5")
}



gsap();

// .fromTo(logo, 0.5, {
//   opacity: 0,
//   x: -50
// }, {
//   opacity: 1,
//   x: 0
// }, "-=0.5")
// .fromTo(hamburger, 0.5, {
//   opacity: 0,
//   x: -50
// }, {
//   opacity: 1,
//   x: 0
// }, "-=0.5")
// .fromTo(headline, 0.5, {
//   opacity: 0,
//   x: -50
// }, {
//   opacity: 1,
//   x: 0
// }, "-=0.5");