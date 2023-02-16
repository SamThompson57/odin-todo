/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const myProjects = [];
const exports = {};

export function Project(title) {
  this.title = title;
  this.tasks = [];
  myProjects.push(this);
}

export function Activity(parent, task, description, dueDate, priority, notes) {
  this.title = task;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.complete = 'Not Started';
  parent.tasks.push(this);
}

const project1 = new Project('My First Project');

const defaultTaskOne = new Activity(project1, 'Add New Task', 'Use the button at the bottom of this page to add a new activity', '10 / 01 / 2023', '3', 'Notes go here');
const defaultTaskTwo = new Activity(project1, 'Add New Project', 'Use the button on the left of the screen to add a new project', '10 / 01 / 2023', '3', 'Notes go here');

export default myProjects;
