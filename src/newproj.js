let isBoxSpawned = false;

const container = document.createElement('div');
const newProjectBtn = document.createElement('button');

container.appendChild(newProjectBtn);

// Build the form to add additional projects.
const projectForm = document.createElement('form');
projectForm.setAttribute('onsubmit', 'event.preventDefault(); formSubmit()');

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
projTitleInput.setAttribute('value', 'Project 3');
addNewProj.appendChild(projTitleInput);

const addDiv = document.createElement('div');
projectForm.appendChild(addDiv);

const addButton = document.createElement('button');
addButton.setAttribute('type', 'submit');
addButton.textContent = 'add';
addDiv.appendChild(addButton);

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

/*
CURRENTLY HAVING ISSUES WITH THE FUNCTION TO ADD PROJECT

function formSubmit() {
  console.log('Submitting form for new Project');
  // new Project(projTitleInput.value);
  projTitleInput.value = '';
} */

newProjectBtn.textContent = 'NEW PROJECT';

newProjectBtn.onclick = () => spawnBox();

export default container;
