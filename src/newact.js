import { Activity } from './projects';
import { activities, currentProject } from '.';
import actRefresh from './actrefresh';

const controls = document.createElement('div');

let isBoxSpawned = false;

const newActBtn = document.createElement('button');
controls.appendChild(newActBtn);
newActBtn.setAttribute('class', 'navButton');

// Build the form to add additional projects.
const actForm = document.createElement('form');
actForm.setAttribute('onsubmit', 'event.preventDefault()');
controls.appendChild(actForm);

//ACT NAME
const addNewAct = document.createElement('div');
addNewAct.setAttribute('class', 'input');
actForm.appendChild(addNewAct);

const actTitleLabel = document.createElement('label');
actTitleLabel.setAttribute('for', 'act_title');
actTitleLabel.textContent = 'Task Name:';
addNewAct.appendChild(actTitleLabel);

const actTitleInput = document.createElement('input');
actTitleInput.setAttribute('type', 'text');
actTitleInput.setAttribute('id', 'act_title');
actTitleInput.setAttribute('required', 'true');
actTitleInput.setAttribute('value', 'Task3');
addNewAct.appendChild(actTitleInput);

//PRIORITY (Should be a drop down Fix Later)
const newActPriority = document.createElement('div');
newActPriority.setAttribute('class', 'input');
actForm.appendChild(newActPriority);

const priorityLabel = document.createElement('label');
priorityLabel.setAttribute('for', 'priority');
priorityLabel.textContent = 'Priority:'
newActPriority.appendChild(priorityLabel)

const priorityInput = document.createElement('input')
priorityInput.setAttribute('type', 'text')
priorityInput.setAttribute('id', 'priority')
newActPriority.appendChild(priorityInput)

//DUE DATE (Shoould be a calendar selection)
const newActDate = document.createElement('div');
newActDate.setAttribute('class', 'input');
actForm.appendChild(newActDate);

const dateLabel = document.createElement('label');
dateLabel.setAttribute('for', 'date');
dateLabel.textContent = 'Due Date:'
newActDate.appendChild(dateLabel)

const dateInput = document.createElement('input')
dateInput.setAttribute('type', 'text')
dateInput.setAttribute('id', 'date')
newActDate.appendChild(dateInput)

//The submit Button

const addDiv = document.createElement('div');
actForm.appendChild(addDiv);

const addButton = document.createElement('button');
addButton.setAttribute('type', 'submit');
addButton.textContent = 'ADD';
addDiv.appendChild(addButton);
addButton.setAttribute('class', 'navButton');
actForm.setAttribute('style', 'visibility: hidden;');

function spawnActBox() {
  console.log('Gonna Spawn a box');
  if (isBoxSpawned) {
    console.log('Box is already existing');
    newActBtn.textContent = 'NEW ACTIVITY';
    actForm.setAttribute('style', 'visibility: hidden;');
    isBoxSpawned = false;
  } else {
    console.log("I'm pretending to spawn a box");
    actForm.setAttribute('style', 'visibility: visible;');
    newActBtn.textContent = 'HIDE';
    isBoxSpawned = true;
  }
}

function actFormSubmit() {
  //Need to add validation to make sure no empty fields are submitted
  new Activity(currentProject, actTitleInput.value, '', dateInput.value, priorityInput.value, '');

  console.log(currentProject)
  actRefresh()
  spawnActBox()
  
  
}

newActBtn.textContent = 'NEW ACTIVITY';

addButton.addEventListener('click', actFormSubmit);

newActBtn.onclick = () => spawnActBox();

export default controls;
