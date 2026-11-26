// Program Article Preview Card interactivity from scratch
const btn = document.getElementById('shareBtn');
const share = document.getElementById('shareMenu');

btn.addEventListener('click', () => {
  shareMenu.classList.toggle('hidden');
});
