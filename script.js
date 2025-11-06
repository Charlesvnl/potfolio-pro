const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (!target) return;
target.scrollIntoView({ behavior: 'smooth' });
});
});
