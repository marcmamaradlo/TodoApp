

const form = document.querySelector('#form');
const inputToAdd = document.querySelector('#inputToAdd');
const mainContainer = document.querySelector('#mainContainer');
const container = document.querySelector('#container');
const taskContainer = document.querySelector('#task-container');

inputToAdd.addEventListener('click', () => {
    inputToAdd.value = '';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newDiv = createContainerDiv();
    const listInput = createListInput();
    const editButton = createEditButton();
    const removeButton = createRemoveButton();
    newDiv.append(listInput, editButton, removeButton);
    container.append(newDiv);
    initEventListener(editButton, removeButton);
});

function createContainerDiv() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'task-container');
    newDiv.classList.add('append-container');
    return newDiv;
}


function createListInput() {
    const listInput = document.createElement('input');
    listInput.value = inputToAdd.value;
    listInput.setAttribute('readonly', 'readonly');
    listInput.setAttribute('class', 'listInput');
    listInput.setAttribute('type', 'text');
    listInput.classList.add('append-input')
    return listInput;
}

function createEditButton() {
    const editButton = document.createElement('button');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-solid', 'fa-pen')
    editButton.append(icon);
    editButton.setAttribute('class', 'editButton');
    editButton.classList.add('append-button');
    return editButton;
}

function createRemoveButton() {
    const removeButton = document.createElement('button');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-solid', 'fa-trash');
    removeButton.append(icon);
    removeButton.setAttribute('class', 'removeButton');
    removeButton.classList.add('append-button');
    return removeButton;
}

function initEventListener(editButton, removeButton) {
    editButton.addEventListener('click', (e) => {
        editButtonAction(e.target);
    });

    removeButton.addEventListener('click', (e) => {
        removeButtonAction(e.target);
    });
}

function editButtonAction(editButton) {
    const parentElement = editButton.parentNode;
    const toEdit = parentElement.querySelector('.listInput');
    toEdit.focus();
    toEdit.removeAttribute('readonly');
}

function removeButtonAction(removeButton) {
    const parentElement = removeButton.parentNode;
    parentElement.remove();
}

function sampleAppend() {
    const newDiv = createContainerDiv();
    const listInput = createListInput();
    listInput.value = 'Shopping';
    const editButton = createEditButton();
    const removeButton = createRemoveButton();
    newDiv.append(listInput, editButton, removeButton);
    container.append(newDiv);
    initEventListener(editButton, removeButton);
}

sampleAppend();