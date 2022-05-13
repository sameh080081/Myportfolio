const projects = [{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gpngain+Glory',
  tags: ['Ruby on rails','css','JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.jbg',
  btnSource: './images/icons/Vector.jbg',
},
{
  image: './images/snap/2.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails','css','JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.jbg',
  btnSource: './images/icons/Vector.jbg',
},
{
  image: './images/snap/3.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails','css','JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.jbg',
  btnSource: './images/icons/Vector.jbg',
},
{
  image: './images/snap/4.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails','css','JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.jbg',
  btnSource: './images/icons/Vector.jbg',
},
{
  image: './images/snap/1.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags: ['Ruby on rails','css','JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.jbg',
  btnSource: './images/icons/Vector.jbg',
},
{
  image: './images/snap/2.png',
  title: 'Multi-Post Stories Gain+Glory',
  tags :['Ruby on rails','css','JavaScript'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 60s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btnLive: './images/icons/see-live-icon.jbg',
  btnSource: './images/icons/Vector.jbg',
},
];

const projectsBtn = document.querySelectorAll('.projects');
for(let i=0;i<projectsBtn.length;i++){
    projectsBtn[i].addEventListener('click' ,() => seeProjects(i));
}

function seeProjects(index){
    const {image,title,tags,description,btnLive,btnSource,} = projects[index];
    const container = document.createElement('div');
    container.classList.add('popup-container');
    container.innerHTML =
    `<img src=${image}  class="popup-project-img1">
    <img src="./images/icons/Iconx.png"  class="close-icon">
    <h1 class="title">${title}</h1>
    <div class="tags-container">
    <div class="tag">${tags[0]}</div>
    <div class="tag">${tags[1]}</div>
    <div class="tag">${tags[2]}</div>
    </div>
    <p>${description}</p>
    <div class="btn-container">
    <button type="button" class="btnLive">See Live<img src="./images/icons/see-live-icon.png"></button>
    <button type="button" class="btnSource">See Source<img src="./images/icons/Vector.png"></button>
    </div>`;
    console.log(document.body);
    document.body.appendChild(container);
    container.style.display = 'block';
    
    const btnclose = container.querySelector('.close-icon');
    btnclose.addEventListener('click' ,closemethod);
    function closemethod(){
        container.style.display = "none";
    }
}