
// Cache out buttons container, and all of the panels
const buttons = document.querySelector('.setting-buttons');
const panels = document.querySelectorAll('.panel');

// Add an event listener to the buttons container
buttons.addEventListener('click', handleClick);

// When a child element of `buttons` is clicked
function handleClick(e) {
  if (e.target.matches('button')) {
    panels.forEach(panel => panel.classList.remove('show'));
     const { id } = e.target.dataset;

 
    const selector = `.panel[id="${id}"]`;
    document.querySelector(selector).classList.add('show');
  }
}