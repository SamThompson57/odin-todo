/* eslint-disable no-unused-vars */
import container from './newproj';

const myProjects = [];

function Project(title) {
  this.title = title;
  this.tasks = [];
  myProjects.push(this);
  // Function to refresh list of
}

function Activity(parent, task, description, dueDate, priority, notes) {
  this.title = task;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  parent.tasks.push(this);
}

// eslint-disable-next-line no-unused-vars
function formSubmit() {
  console.log('Submitting form for new Project');
  // eslint-disable-next-line no-new
  new Project(projTitleInput.value);
  projTitleInput.value = '';
}

const project1 = new Project('Project1');
const project2 = new Project('Project2');

const defaultTaskOne = new Activity(project1, 'Default Task', 'A Default Task', '10/01/23', '4', 'Notes go here');

export default myProjects;
