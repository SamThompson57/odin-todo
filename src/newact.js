import myProjects, { Activity } from './projects';
import displayProjects, { activities, currentIndex, currentProject, veiwPort } from '.';
import actRefresh from './actrefresh';

const controls = document.createElement('div');

let isBoxSpawned = false;

const newActBtn = document.createElement('button');
const deleteProject = document.createElement('button');
controls.appendChild(newActBtn);
controls.appendChild(deleteProject)
deleteProject.setAttribute('class' , 'navButton')
newActBtn.setAttribute('class', 'navButton');

deleteProject.textContent = 'DELETE PROJECT'

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
actTitleInput.setAttribute('value', 'A New Task');
addNewAct.appendChild(actTitleInput);

//PRIORITY (Should be a drop down Fix Later)
const newActPriority = document.createElement('div');
newActPriority.setAttribute('class', 'input');
actForm.appendChild(newActPriority);

const priorityLabel = document.createElement('label');
priorityLabel.setAttribute('for', 'priority');
priorityLabel.textContent = 'Priority:'
newActPriority.appendChild(priorityLabel)

const prioritySelect = document.createElement('select')
newActPriority.appendChild(prioritySelect)


const priorityInput3 = document.createElement('option')
const priorityInput2 = document.createElement('option')
const priorityInput1 = document.createElement('option')
priorityInput3.setAttribute('value', '3')
priorityInput3.setAttribute('selected', true)
priorityInput3.textContent = '3 (Low)'
priorityInput2.setAttribute('value', '2')
priorityInput2.textContent = '2'
priorityInput1.setAttribute('value', '1')
priorityInput1.textContent = '1 (High)'
prioritySelect.appendChild(priorityInput3)
prioritySelect.appendChild(priorityInput2)
prioritySelect.appendChild(priorityInput1)

//DUE DATE
const newActDate = document.createElement('div');
newActDate.setAttribute('class', 'input');
actForm.appendChild(newActDate);

const dateLabel = document.createElement('label');
dateLabel.setAttribute('for', 'date');
dateLabel.textContent = 'Due Date:'
newActDate.appendChild(dateLabel)

const dateInput = document.createElement('input')
dateInput.setAttribute('type', 'date')
dateInput.setAttribute('id', 'date')
dateInput.setAttribute('value', '2023-01-01')
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
  if (isBoxSpawned) {
    newActBtn.textContent = 'NEW ACTIVITY';
    actForm.setAttribute('style', 'visibility: hidden;');
    isBoxSpawned = false;
  } else {
    actForm.setAttribute('style', 'visibility: visible;');
    newActBtn.textContent = 'HIDE';
    isBoxSpawned = true;
  }
}

function actFormSubmit() {
  //Need to add validation to make sure no empty fields are submitted
  new Activity(currentProject, actTitleInput.value, '', dateInput.value.split('-').reverse().join(' / '), prioritySelect.value, '');

  actRefresh()
  spawnActBox()
  
  
}
export const removedProject = document.createElement('div')

deleteProject.onclick = () => {
  myProjects.splice(currentIndex, 1)
  veiwPort.removeChild(activities)
  veiwPort.removeChild(controls)
  displayProjects();
  veiwPort.appendChild(removedProject)
  removedProject.textContent = ' Project Deleted, select a new project from the left side or use the button to select a new one'
}

newActBtn.textContent = 'NEW ACTIVITY';

addButton.addEventListener('click', actFormSubmit);

newActBtn.onclick = () => spawnActBox();

export default controls;
