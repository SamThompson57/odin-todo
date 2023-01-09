/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import myProjects from './projects';
import container from './newproj';

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

function displayTasks(name) {
  // const id = name.tasks.length - 1;
  console.log(`Displaying tasks for ${name.title}`);
  for (const prop in name.tasks) {
    for (const item in name.tasks[prop]) {
      console.log(name.tasks[prop][item]);
    }
  }
}

function displayProjects() {
  for (const prop in myProjects) {
    const menuItem = document.createElement('ul');
    menuItem.textContent = myProjects[prop].title;
    navBar.appendChild(menuItem);
    console.log(`Displaying ${prop.indexOf}`);
  }
  navBar.appendChild(container);
}

displayProjects();

displayTasks(myProjects[0]);

/*
FUNCTIONS
    -   Create new project
    -   Create new task in the current project
    -   Edit Tasks (Close, Cancel, Delete) */
