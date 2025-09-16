'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModals = document.querySelectorAll('.show-modal');
let message = '';
let count = 0;
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
//event listener for every button on the page to open de modal
for (let i = 0; i < btnsOpenModals.length; i++) {
  btnsOpenModals[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  count++;
  if (count > 6) {
    message = '';
    count = 0;
  }
  if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } else {
    message = `${message}` + `${event.key}`;
    console.log(message);

    if (message == 'ariana') {
      console.log(message);
      for (let i = 0; i < btnsOpenModals.length; i++) {
        btnsOpenModals[i].innerHTML = 'ARIANA';
      }
    }
  }
});

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
