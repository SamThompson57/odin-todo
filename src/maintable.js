import projectList from "./projects";

const mainTable = document.createElement('div');
mainTable.setAttribute('class', 'mainTable')

const title = document.createElement('div');
const desc = document.createElement('div');
const startDate = document.createElement('div');
const cdd = document.createElement('div');
const tasks = document.createElement('div');

mainTable.appendChild(title);
mainTable.appendChild(desc);
mainTable.appendChild(startDate);
mainTable.appendChild(cdd);
mainTable.appendChild(tasks);

title.textContent = 'TITLE'
desc.textContent = 'DESCRIPTION'
startDate.textContent = 'START DATE'
cdd.textContent = 'DELIVERY DATE'
tasks.textContent = 'OUTSTANDING TASKS'

// Will need a function here to refresh the table for initial start up and when additional projects are added.

projectList.forEach(element => {
    const headdings = Object.values(element);
    headdings.forEach(value => {
        const div = document.createElement('div')
        div.textContent = value
        mainTable.appendChild(div)
    })
    
});

export default mainTable