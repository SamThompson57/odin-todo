/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import mainTable from "./maintable.js";
import projForm from "./projectcontrols.js";

// This will be the main hub for the todo list

const content = document.getElementById('content');

content.appendChild(mainTable);

content.appendChild(projForm)


// Main hub will be a list of all ongoing projects with title, description, Due date.