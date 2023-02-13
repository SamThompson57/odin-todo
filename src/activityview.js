// This will be the content of the view port will be generated,

import editAct from "./actedit";

// Iterrate through tthe current selection of the projects Tab and for each item build a table



function vpGen(project) {

  const taskView = document.createElement('div')

  // Start by putting the Title of the project at the top of the page
  const pTitle = document.createElement('div');
  pTitle.setAttribute('class', 'ptitle');
  pTitle.textContent = project.title;
  taskView.appendChild(pTitle)

  // Add a list for all the tasks
  
  const actTable = document.createElement('div')
  taskView.appendChild(actTable);
  if (project.tasks.length === 0) {
    const emptyProject = document.createElement('div');
    emptyProject.setAttribute('class', 'emptyProj')
    emptyProject.textContent = 'There is nothing here, use the button below to add tasks to this project.'
    taskView.appendChild(emptyProject)
  } else {
    // Add the headings for the columns here: Priority, Task name, Due Date, and completion status. 
    const actViewHead = document.createElement('div');
    const prioHead = document.createElement('div');
    const taskHead = document.createElement('div');
    const dueHead = document.createElement('div');
    const compHead = document.createElement('div');
  
    prioHead.textContent = 'Priority';
    taskHead.textContent = 'Task Name';
    dueHead.textContent = 'Due Date';
    compHead.textContent = 'Current Status';

    actTable.appendChild(actViewHead)
    actViewHead.appendChild(prioHead);
    actViewHead.appendChild(taskHead)
    actViewHead.appendChild(dueHead)
    actViewHead.appendChild(compHead)
    actViewHead.setAttribute('class', 'actLine head')
  }
  for (const prop in project.tasks) {
    //Create an activity line for the Key elements: Priority, name, due, completion 
    const activityLine = document.createElement('div')
    actTable.appendChild(activityLine)
    activityLine.setAttribute('class', 'actLine')

    const actPriority = document.createElement('div')
    const actName = document.createElement('div')
    const actDue = document.createElement('div')
    const actComp = document.createElement('div')
    
    //Set the content and class of the priority
    actPriority.textContent = project.tasks[prop].priority;
    actPriority.setAttribute ('class', project.tasks[prop].priority)

    actName.textContent = project.tasks[prop].title;
    actDue.textContent = project.tasks[prop].dueDate;
    actComp.textContent = project.tasks[prop].complete;

    activityLine.appendChild(actPriority)
    activityLine.appendChild(actName)
    activityLine.appendChild(actDue)
    activityLine.appendChild(actComp)

    activityLine.onclick = () => {
      activityLine.appendChild(editAct(project.tasks[prop]))
    };

    //This is where we can add an event listener to expand the 

  }
  

return taskView
}

export default vpGen;
