document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  const leadForm = document.querySelector('#lead-form');
  const thankYou = document.querySelector('#thank-you');
  leadForm.addEventListener('submit', event => {
    event.preventDefault();
    // Normally here you'd send the data to a server/API,
    // but for this demo, we'll just show a thank-you message.
    leadForm.hidden = true;
    thankYou.hidden = false;
  });
});
