// This will be the content of the view port will be generated,

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
    emptyProject.textContent = 'There is nothing here use the button below to add tasks to this project.'
  }
  for (const prop in project.tasks) {
    const activityLine = document.createElement('div')
    actTable.appendChild(activityLine)
    activityLine.setAttribute('class', 'actLine')
    for (const item in project.tasks[prop]) {
      const col = document.createElement('div')
      col.textContent = project.tasks[prop][item]
      activityLine.appendChild(col)
    }
  }
  return taskView;
}

export default vpGen;
