'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');
//When use the querySelector to access multiple classes, only the first one will be enabled, and to access all the rest, use querySelectorAll
let openModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function () {
    //adding and removing classes
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log('button clicked');
  });
}

const hidePrompt = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', hidePrompt);

//if you want to instead using an existing function, you will need to eliminate the parentesis, otherwise the function will execute immediately
overlay.addEventListener('click', hidePrompt);

document.addEventListener('keydown', function (e) {
  //check if specific key is pressed
  //Only if the modal is showed, escape can be used to close the modal
  if (e.key === 'Escape' && (!overlay.classList.contains('hidden'))) hidePrompt();
});

/* document.querySelector('.show-modal').addEventListener('click', function () {
  document.querySelector('.hidden').style.display = 'on';
  console.log('button clicked');
});
`` */
