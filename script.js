// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
}

// Small interactive beat message on the home page
const beatButton = document.getElementById('beatButton');
if (beatButton) {
  beatButton.addEventListener('click', () => {
    const message = document.getElementById('beatMessage');
    message.textContent = '♪ Turn up the music. Find your rhythm. Make every move yours! ♪';
  });
}

// Filter the dance styles by category
const styleFilter = document.getElementById('styleFilter');
if (styleFilter) {
  styleFilter.addEventListener('change', () => {
    document.querySelectorAll('.style-row').forEach(row => {
      row.hidden = styleFilter.value !== 'all' && row.dataset.type !== styleFilter.value;
    });
  });
}

// Learn-more pop-up for each dance style
const modal = document.getElementById('styleModal');
if (modal) {
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };
  document.querySelectorAll('.learn-button').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = button.dataset.style;
      document.getElementById('modalText').textContent = button.dataset.detail;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('modalDone').addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
}
