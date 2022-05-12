const projects = [{
    image:'./images/snap/1.jpg' ,
    title:'Multi-Post Stories Gain+Glory' ,
    tags:['rubyOnrails','css','javascript'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    btnLive:'./images/icons/see-live-icon.jbg',
    btnSource:'./images/icons/Vector.jbg',
},
{
    image:'./images/snap/1.jpg' ,
    title:'Multi-Post Stories Gain+Glory' ,
    tags:['rubyOnrails','css','javascript'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    btnLive:'./images/icons/see-live-icon.jbg',
    btnSource:'./images/icons/Vector.jbg',
},
{
    image:'./images/snap/1.jpg' ,
    title:'Multi-Post Stories Gain+Glory' ,
    tags:['rubyOnrails','css','javascript'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    btnLive:'./images/icons/see-live-icon.jbg',
    btnSource:'./images/icons/Vector.jbg',
},
{
    image:'./images/snap/1.jpg' ,
    title:'Multi-Post Stories Gain+Glory' ,
    tags:['rubyOnrails','css','javascript'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    btnLive:'./images/icons/see-live-icon.jbg',
    btnSource:'./images/icons/Vector.jbg',
},
{
    image:'./images/snap/1.jpg' ,
    title:'Multi-Post Stories Gain+Glory' ,
    tags:['rubyOnrails','css','javascript'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    btnLive:'./images/icons/see-live-icon.jbg',
    btnSource:'./images/icons/Vector.jbg',
},
{
    image:'./images/snap/1.jpg' ,
    title:'Multi-Post Stories Gain+Glory' ,
    tags:['rubyOnrails','css','javascript'],
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    btnLive:'./images/icons/see-live-icon.jbg',
    btnSource:'./images/icons/Vector.jbg',
},
];

const projectsBtn = document.querySelectorAll('.projects');
for(let i=0;i<projectsBtn.length;i++){
    projectsBtn[i].addEventListener('click' ,() => seeProjects(i));
}

function seeProjects(index){
    const works = document.querySelector('.works');
    const container = document.querySelector('.popup-container');
    container.style.display = 'block';

    projectsBtn[index].style.background = 'black';
    container.style.background = 'black';

    container.innerHTML = `
    <img src=${projectsBtn[index].image} alt="popup-project-img" class="project-img">
    <h1 class="title">${projectsBtn[index].title}</h1>
    <div class="tags-container">
    <div class="tag">${projectsBtn[index].tags[0]}</div>
    <div class="tag">${projectsBtn[index].tags[1]}</div>
    <div class="tag">${projectsBtn[index].tags[2]}</div>
    </div>
    <p class="description">${projectsBtn[index].description}</p>
    <div class="btn-container">
    <button class="live-demo">See Live<img src=${projectsBtn[index].btnLive}></button>
    <button class="see-source">See Source<img src=${projectsBtn[index].btnSource}></button>
    </div>
    `;
}



