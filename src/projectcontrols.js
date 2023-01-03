const controls = document.createElement('div')
const newProject = document.createElement('button')
const showAll = document.createElement('button')

newProject.textContent = 'New Project'
showAll.textContent = 'Show All Tasks'

newProject.setAttribute('class', 'newproj')

const projForm = document.createElement('form')
projForm.setAttribute('class', 'addNewProj')
projForm.setAttribute('onsubmit', 'event.preventDefault(); formSubmit()')

const formHeading = ['Title', 'Description', 'Start Date', 'Delivery Date', 'Outstanding Tasks', 'Priority']

formHeading.forEach(element => {
    const section = document.createElement('div')
    section.setAttribute('class', 'section')
    const label = document.createElement('label')
    label.setAttribute('for', element.toLowerCase()) //may need to split and join
    label.textContent = element
    section.appendChild(label)
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', element.toLowerCase())
    input.setAttribute('required','true')
    section.appendChild(input)
    projForm.appendChild(section)
});

const subButton = document.createElement('div')
subButton.setAttribute('class', 'subbutton')
const submit = document.createElement('button')
submit.setAttribute('type', 'submit')
submit.setAttribute('id', 'submit')
submit.textContent = 'Submit'
subButton.appendChild(submit)

projForm.appendChild(subButton)

export default projForm

/*
const sectionTitle = document.createElement('div')
const titleLabel = document.createElement('label')
titleLabel.setAttribute('for','book_title')
titleLabel.textContent = 'Title'
const inputTitle = document.createElement('')
*/
/*
        <div class="subbutton">
            <button type="submit" id="submit">Submit</button>
        </div>    
*/
