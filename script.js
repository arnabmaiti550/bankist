'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
console.log(document.documentElement)
console.log(document.body)
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((el) => {
  el.addEventListener('click', openModal)
})
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message')
message.textContent = 'We use cookies for improved functionality and analytics'
message.innerHTML = `We use cookies for improved 
functionality and analytics,
<button class="btn btn--close-cookie">Got it!</button>`;
header.prepend(message);
// header.append(message);
//header.append(message.cloneNode(true));

document.querySelector('.btn--close-cookie').
  addEventListener('click', function () {
    message.remove();
  })

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// document.documentElement.style.setProperty('--color-secondary', 'yellow');

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo);

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords, e.target.getBoundingClientRect());
  // console.log("current page offset (X/Y)", window.pageXOffset, window.pageYOffset);
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   top: s1coords.top + window.scrollY,
  //   left: s1coords.left + window.scrollX,
  //   behavior: 'smooth'
  // });
  section1.scrollIntoView({ behavior: 'smooth' })
})

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', () => {
//   alert('on mouse enter, great!')
// })
function alertH1(e) {
  alert('Hare Krishna!');
  h1.removeEventListener('mouseenter', alertH1);
}
// h1.onmouseenter = (e) => {
//   alert('Hare Krishna!');
// }

h1.addEventListener('mouseenter', alertH1);

