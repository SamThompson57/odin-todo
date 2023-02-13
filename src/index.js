/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-cycle */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import myProjects from './projects';
import container from './newproj';
import vpGen from './activityview';
import controls from './newact';

const content = document.getElementById('content');

// Main Page will be broken into a nav bar with the list of projects.
const navBar = document.createElement('div');
export const veiwPort = document.createElement('div');

const navBarTitle = document.createElement('div');
navBarTitle.textContent = 'PROJECTS';
navBarTitle.setAttribute('class', 'navtitle');

navBar.setAttribute('class', 'navigation');
veiwPort.setAttribute('class', 'veiwport');

content.appendChild(navBar);
content.appendChild(veiwPort);
navBar.appendChild(navBarTitle);
// GOING TO DISPLAY ALL OUTSTANDING TASKS

// Create a div to contain the project list

const projDiv = document.createElement('div');
projDiv.setAttribute('class', 'projDiv');
navBar.appendChild(projDiv);

export let currentProject = myProjects[0];
export let activities = vpGen(currentProject);

veiwPort.appendChild(activities);
veiwPort.appendChild(controls);

function displayProjects() {
  while (projDiv.firstChild) {
    projDiv.removeChild(projDiv.firstChild);
  }
  navBar.removeChild(container);
  for (const prop in myProjects) {
    const id = prop;
    const menuItem = document.createElement('ul');
    menuItem.textContent = myProjects[prop].title;
    projDiv.appendChild(menuItem);
    // Add the funtion for if the project is selected
    menuItem.onclick = () => {
      veiwPort.removeChild(activities);
      currentProject = myProjects[id];
      activities = vpGen(myProjects[id]);
      veiwPort.insertBefore(activities, controls);
    };
  }
  navBar.appendChild(container);
}
navBar.appendChild(container);
displayProjects();

export default displayProjects;

/*
WHATS LEFT
  -   Edit Tasks (Close, Cancel, Delete)
  -   Symbol for not completed.
  */
