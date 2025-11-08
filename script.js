// Select elements
const mailBox = document.querySelector('.mail-png');
const openBtn = document.querySelector('.open-mail');
const styleBtn = document.querySelector('.change-style');

// Variables
let isOpen = false;
let designIndex = 0;
const designs = ['mail1.png', 'mail2.png', 'mail3.png'];

// Set default background
mailBox.style.backgroundImage = `url('${designs[designIndex]}')`;

// 🔹 Handle Open/Close Mail
openBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  mailBox.classList.toggle('open', isOpen);
  openBtn.textContent = isOpen ? 'Close Mail' : 'Open Mail';

  // ✅ Fix: Hide the background when mail is open
  if (isOpen) {
    mailBox.style.backgroundImage = 'none';
  } else {
    mailBox.style.backgroundImage = `url('${designs[designIndex]}')`;
  }
});

// 🔹 Handle Change Style
styleBtn.addEventListener('click', () => {
  // Only change style if the mail is closed
  if (!isOpen) {
    designIndex = (designIndex + 1) % designs.length;
    mailBox.style.backgroundImage = `url('${designs[designIndex]}')`;
  }
});
