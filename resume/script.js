'use strict';

let projects;
let currentProject;

showProjects();

document.addEventListener('keydown', e => {
    if (e.keyCode == 27) { // ESC
        closeImage();
    }
});

document.querySelector('#overlay').addEventListener('click', function(e) {
    closeImage();
});

function showProjectImages(name, event) {
    currentProject = projects.find(p => p.name == name)
    currentProject.currentIndex = 0;
    document.querySelector('#overlay').style.display = 'block';
    document.querySelector('.container').style.display = 'flex';
    showImage();

    if (event) {
        event.preventDefault();
    }
}

function showImage() {
    document.querySelector("#expandedImg").src = currentProject.imgs[currentProject.currentIndex];
}

function closeImage() {
    document.querySelector('.closebtn').parentElement.style.display='none';
    document.querySelector('#overlay').style.display = 'none';
}

function nextImage() {
    if (currentProject.currentIndex < currentProject.imgs.length - 1) {
        currentProject.currentIndex++;
    } else {
        currentProject.currentIndex = 0;
    }
    showImage();
}

function previousImage() {
    if (currentProject.currentIndex > 0) {
        currentProject.currentIndex--
    } else {
        currentProject.currentIndex = currentProject.imgs.length - 1;
    }
    showImage();
}

function showProject(project) {
    let projectHTML = `
    <div class="project">
        <div>
            <h4>${project.name}</h4>
            <div>`;

    if (project.github) {
        projectHTML +=  `<a target="_blank" href="${project.github}"><i class="fab fa-github"></i> ${project.github}</a>`;
    }
    if (project.link) {
        projectHTML +=  `<a target="_blank" href="${project.link}"><i class="fas fa-link"></i> Link</a>`;
    }
    if (project.imgs) {
        projectHTML +=  `<a target="_blank" href="https://virmak.github.io" onclick="showProjectImages('${project.name}', event)"><i class="fas fa-images"></i> Screenshots</a>`;
    }
           

    projectHTML += `</div>
        </div>
        <div><ul>`;
    
    for (let task of project.tasks) {
        projectHTML += `<li>${task}</li>`;
    }
    projectHTML += `
        </ul>
        </div>
        <div class="stack">`;
    for (const item of project.stack) {
        projectHTML += `<div class="stack-item">${item}</div>`
    }
    projectHTML += `</div>
    </div>`;

    document.querySelector('#projects-container').innerHTML += projectHTML;
}

async function showProjects() {
    const res = await fetch('/my-portfolio/src/projects.json');
    portfolio = await res.json();
    portfolio.projects.forEach(showProject);
}