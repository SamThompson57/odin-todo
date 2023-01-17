/* eslint-disable import/no-cycle */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import myProjects from './projects';
import container from './newproj';
import vpGen from './activityview';

const content = document.getElementById('content');

// Main Page will be broken into a nav bar with the list of projects.
const navBar = document.createElement('div');
const veiwPort = document.createElement('div');

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

function displayProjects() {
  while (projDiv.firstChild) {
    projDiv.removeChild(projDiv.firstChild);
  }
  navBar.removeChild(container);
  for (const prop in myProjects) {
    const menuItem = document.createElement('ul');
    menuItem.textContent = myProjects[prop].title;
    projDiv.appendChild(menuItem);
    console.log(`Displaying ${prop.indexOf}`);
  }
  navBar.appendChild(container);
}
navBar.appendChild(container);
displayProjects();

veiwPort.appendChild(vpGen(myProjects[0]));

export default displayProjects;

/*
WHATS LEFT
  -   Task list layout (Should only display title and Due by date)
  -   Select projects from the menu
  -   Button to Create a new task in the current project
  -   Edit Tasks (Close, Cancel, Delete)
  -   Message for an empty project */
