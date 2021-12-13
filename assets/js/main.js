let container = null;
let prevIndicator = null;

function createContainer() {
  elem = document.createElement('div');
  elem.setAttribute('id', 'carousel');
  elem.setAttribute('class', 'carousel');
  elem.querySelectorAll('body').appendChild('elem');
  container = document.querySelector('#carousel');
}

function createSlides(n) {
slidesContainer = document.createElement('ul');
slidesContainer.setAttribute('class', 'slides');
for (i = 0; i < n; i++) {
  let slideItem = document.createElement('li');
  let slideLink = document.createElement('a');
  slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
  slideLink.setAttribute('href', '#');
  slideItem.appendChild(slideLink);
  slidesContainer.appendChild(slideItem);
}
container.appendChild(slidesContainer);
}

function createIndicators(n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');
  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');
    indicatorsItem.setAttribute('class', i === 0 ? 'indicator__item active' : 'indicator__item');
    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);
  }
  container.appendChild(indicatorsContainer);
}

