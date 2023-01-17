/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const myProjects = [];
const exports = {};

export function Project(title) {
  console.log(`Adding project with Title: ${title}`);
  this.title = title;
  this.tasks = [];
  myProjects.push(this);
}

function Activity(parent, task, description, dueDate, priority, notes) {
  this.title = task;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.complete = false;
  parent.tasks.push(this);
}

const project1 = new Project('Project1');
const project2 = new Project('Project2');

const defaultTaskOne = new Activity(project1, 'Task1', 'A Default Task', '10/01/23', '4', 'Notes go here');
const defaultTaskTwo = new Activity(project1, 'Task2', 'A Default Task', '10/01/23', '2', 'Notes go here');

export default myProjects;
