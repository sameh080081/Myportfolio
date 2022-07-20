const projects = [{
  image: './images/snap/1.jpg',
  title: 'ZAMALEK FC Election Event',
  tags: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Microverse module capstone requierd aproject,so I intended to creat website election event for ZAMALEK FC the most titled club on the 20th century, the web contains main page and about page you can navigate from one to the another smoothly,check the design and inspect for any suggested modifications',
  btnLive: './images/icons/see-live-icon.png',
  btnSource: './images/icons/Vector.png',
  liveLink: 'https://sameh080081.github.io/Zamalek-site/',
  sourceLink: 'https://github.com/sameh080081/Zamalek-site',
},
{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.png',
  btnSource: './images/icons/Vector.png',
  liveLink: 'https://sameh080081.github.io/Myportfolio/',
  sourceLink: 'https://github.com/sameh080081/Zamalek-site',
},
{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.png',
  btnSource: './images/icons/Vector.png',
  liveLink: 'https://sameh080081.github.io/Myportfolio/',
  sourceLink: 'https://github.com/sameh080081/Zamalek-site',
},
{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.png',
  btnSource: './images/icons/Vector.png',
  liveLink: 'https://sameh080081.github.io/Myportfolio/',
  sourceLink: 'https://github.com/sameh080081/Zamalek-site',
},
{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.png',
  btnSource: './images/icons/Vector.png',
  liveLink: 'https://sameh080081.github.io/Myportfolio/',
  sourceLink: 'https://github.com/sameh080081/Zamalek-site',
},
{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails', 'css', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 60s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.png',
  btnSource: './images/icons/Vector.png',
  liveLink: 'https://sameh080081.github.io/Myportfolio/',
  sourceLink: 'https://github.com/sameh080081/Zamalek-site',
},
];

function seeProjects(index) {
  if (window.matchMedia('(min-width: 768px)').matches) {
    projects[index].image = './images/snap/1.jpg';
  }
  const {
    image, title, tags, description, btnLive, btnSource,liveLink,sourceLink,
  } = projects[index];
  const container = document.createElement('div');
  container.classList.add('popup-container');
  container.innerHTML = `<img src=${image}  class="popup-project-img1">
  <img src="./images/icons/Iconx.png"  class="close-icon">
  <h1 class="title">${title}</h1>
  <div class="tags-container">
  <div class="tag">${tags[0]}</div>
  <div class="tag">${tags[1]}</div>
  <div class="tag">${tags[2]}</div>
  <div class="tags-container2">
  <div class="tag">${tags[3]}</div>
  <div class="tag">${tags[4]}</div>
  <div class="tag">${tags[5]}</div>
  </div>
  </div>
  <p>${description}</p>
  <div class="btn-container">
  <button type="button" class="btnLive" onclick="window.location.href='${liveLink}';">See Live<img src=${btnLive}></button>
  <button type="button" class="btnSource" onclick="window.location.href='${sourceLink}';">See Source<img src=${btnSource}></button>
  </div>`;
  function closemethod() {
    container.style.display = 'none';
  }
  document.body.appendChild(container);
  container.style.display = 'flex';
  const btnclose = container.querySelector('.close-icon');
  btnclose.addEventListener('click', closemethod);
}

const projectsBtn = document.querySelectorAll('.projects');
for (let i = 0; i < projectsBtn.length; i += 1) {
  projectsBtn[i].addEventListener('click', () => seeProjects(i));
}
