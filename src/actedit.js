// This is where we look to create a form that users can edit activities

// Start by removing all the child nodes from all the expanded children

function editAct(selectedAct) {
  // Remove previous displayed acts
  const editActDiv = document.createElement('div');
  const editActForm = document.createElement('form');
  // The form needs to allow us to edit the below:
  // Priority
  const editActPriority = document.createElement('div');
  editActPriority.setAttribute('class', 'input');
  editActForm.appendChild(editActPriority);

  const editPriorityLabel = document.createElement('label');
  editPriorityLabel.setAttribute('for', 'priority');
  editPriorityLabel.textContent = 'Priority:';
  editActPriority.appendChild(editPriorityLabel);

  const editPrioritySelect = document.createElement('select');
  editActPriority.appendChild(editPrioritySelect);

  const editPriorityInput3 = document.createElement('option');
  const editPriorityInput2 = document.createElement('option');
  const editPriorityInput1 = document.createElement('option');
  editPriorityInput3.setAttribute('value', '3');
  editPriorityInput3.setAttribute('selected', true); // Find way for this to be the currently selected
  editPriorityInput3.textContent = '3 (Low)';
  editPriorityInput2.setAttribute('value', '2');
  editPriorityInput2.textContent = '2';
  editPriorityInput1.setAttribute('value', '1');
  editPriorityInput1.textContent = '1 (High)';
  editPrioritySelect.appendChild(editPriorityInput3);
  editPrioritySelect.appendChild(editPriorityInput2);
  editPrioritySelect.appendChild(editPriorityInput1);

  switch (selectedAct.priority) {
    case '1':
      editPriorityInput1.setAttribute('selected', true);
      break;
    case '2':
      editPriorityInput2.setAttribute('selected', true);
      break;
    case '3':
      editPriorityInput3.setAttribute('selected', true);
      break;
    default:
      console.log('Priority not set');
  }

  // Due Date

  const editActDate = document.createElement('div');
  editActDate.setAttribute('class', 'input');
  editActForm.appendChild(editActDate);

  const editDateLabel = document.createElement('label');
  editDateLabel.setAttribute('for', 'edit_date');
  editDateLabel.textContent = 'Due Date:';
  editActDate.appendChild(editDateLabel);

  const editDateInput = document.createElement('input');
  editDateInput.setAttribute('type', 'date');
  editDateInput.setAttribute('id', 'edit_date');
  editDateInput.setAttribute('value', selectedAct.dueDate);
  editActDate.appendChild(editDateInput);

  // Description

  const editActDesc = document.createElement('div');
  editActDesc.setAttribute('class', 'input');
  editActForm.appendChild(editActDesc);

  const editDescLabel = document.createElement('label');
  editDescLabel.setAttribute('for', 'edit_desc');
  editDescLabel.textContent = 'Description:';
  editActDesc.appendChild(editDescLabel);

  const editDescInput = document.createElement('input');
  editDescInput.setAttribute('type', 'text');
  editDescInput.setAttribute('id', 'edit_desc');
  editDescInput.setAttribute('value', selectedAct.description);
  editActDesc.appendChild(editDescInput);

  // Current notes

  const editActNote = document.createElement('div');
  editActNote.setAttribute('class', 'input');
  editActForm.appendChild(editActNote);

  const editNoteLabel = document.createElement('label');
  editNoteLabel.setAttribute('for', 'edit_note');
  editNoteLabel.textContent = 'Note:';
  editActNote.appendChild(editNoteLabel);

  const editNoteInput = document.createElement('input');
  editNoteInput.setAttribute('type', 'text');
  editNoteInput.setAttribute('id', 'edit_note');
  editNoteInput.setAttribute('value', selectedAct.note);
  editActNote.appendChild(editNoteInput);

  // Current Status

  const editActStatus = document.createElement('div');
  editActStatus.setAttribute('class', 'input');
  editActForm.appendChild(editActStatus);

  const editStatusLabel = document.createElement('label');
  editStatusLabel.setAttribute('for', 'status');
  editStatusLabel.textContent = 'Status:';
  editActStatus.appendChild(editStatusLabel);

  const editStatusSelect = document.createElement('select');
  editActStatus.appendChild(editStatusSelect);

  const editStatusInput3 = document.createElement('option');
  const editStatusInput2 = document.createElement('option');
  const editStatusInput1 = document.createElement('option');
  editStatusInput3.setAttribute('value', 'Not Started');
  editStatusInput3.setAttribute('selected', true); // Find way for this to be the currently selected
  editStatusInput3.textContent = 'Not Started';
  editStatusInput2.setAttribute('value', 'In Progress');
  editStatusInput2.textContent = 'In Progress';
  editStatusInput1.setAttribute('value', 'Completed');
  editStatusInput1.textContent = 'Completed';
  editStatusSelect.appendChild(editStatusInput3);
  editStatusSelect.appendChild(editStatusInput2);
  editStatusSelect.appendChild(editStatusInput1);

  switch (selectedAct.complete) {
    case 'Completed':
      editStatusInput1.setAttribute('selected', true);
      break;
    case 'In Progress':
      editStatusInput2.setAttribute('selected', true);
      break;
    case 'Not Started':
      editStatusInput3.setAttribute('selected', true);
      break;
    default:
      console.log('Current Status not set');
  }

  // CONTROLS: Save / Delete

  editActDiv.appendChild(editActForm);
  return editActDiv;
}

export default editAct;
