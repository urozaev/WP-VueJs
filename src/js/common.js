'use strict';

//Active elements
let setActive = el => {
  [...el.parentElement.children].forEach(sib => sib.classList.remove('active'))
  el.classList.add('active')
}

let active = [...document.body.querySelectorAll('.sort-button')]
active.forEach(el => el.addEventListener('click', e => setActive(el)))