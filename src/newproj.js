/* eslint-disable import/no-cycle */
/* eslint-disable no-new */
/* eslint-disable import/no-duplicates */
// eslint-disable-next-line prefer-destructuring
import { Project } from './projects';
import myProjects from './projects';
import displayProjects from './index';

let isBoxSpawned = false;

const container = document.createElement('div');
const newProjectBtn = document.createElement('button');

container.appendChild(newProjectBtn);
newProjectBtn.setAttribute('class', 'navButton');
// Build the form to add additional projects.
const projectForm = document.createElement('form');
projectForm.setAttribute('onsubmit', 'event.preventDefault()');
container.appendChild(projectForm);

const addNewProj = document.createElement('div');
addNewProj.setAttribute('class', 'input');
projectForm.appendChild(addNewProj);

const projTitleLabel = document.createElement('label');
projTitleLabel.setAttribute('for', 'proj_title');
projTitleLabel.textContent = 'Title:';
addNewProj.appendChild(projTitleLabel);

const projTitleInput = document.createElement('input');
projTitleInput.setAttribute('type', 'text');
projTitleInput.setAttribute('id', 'proj_title');
projTitleInput.setAttribute('required', 'true');
projTitleInput.setAttribute('value', 'New Project');
addNewProj.appendChild(projTitleInput);

const addDiv = document.createElement('div');
projectForm.appendChild(addDiv);

const addButton = document.createElement('button');
addButton.setAttribute('type', 'submit');
addButton.textContent = 'add';
addDiv.appendChild(addButton);
addButton.setAttribute('class', 'navButton');
projectForm.setAttribute('style', 'visibility: hidden;');

function spawnBox() {
  console.log('Gonna Spawn a box');
  if (isBoxSpawned) {
    console.log('Box is already existing');
    newProjectBtn.textContent = 'NEW PROJECT';
    projectForm.setAttribute('style', 'visibility: hidden;');
    isBoxSpawned = false;
  } else {
    console.log("I'm pretending to spawn a box");
    projectForm.setAttribute('style', 'visibility: visible;');
    newProjectBtn.textContent = 'HIDE';
    isBoxSpawned = true;
  }
}

function formSubmit() {
  new Project(projTitleInput.value);
  projTitleInput.value = '';
  console.log(myProjects);
  displayProjects();
}

newProjectBtn.textContent = 'NEW PROJECT';

// projectForm.onsubmit(formSubmit());
addButton.addEventListener('click', formSubmit);

newProjectBtn.onclick = () => spawnBox();

export default container;
