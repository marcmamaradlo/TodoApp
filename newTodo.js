

const form = document.querySelector('#form');
const inputToAdd = document.querySelector('#inputToAdd');
const container = document.querySelector('#container');

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
    newDiv.classList.add('append-container');
    return newDiv;
}


function createListInput() {
    const listInput = document.createElement('input');
    listInput.value = inputToAdd.value;
    listInput.setAttribute('readonly', 'readonly');
    listInput.setAttribute('class', 'listInput');
    listInput.setAttribute('type', 'text');
    return listInput;
}

function createEditButton() {
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-solid', 'fa-pen', 'editButton')
    return editIcon;
}

function createRemoveButton() {
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-solid', 'fa-trash', 'removeButton');
    return removeIcon;
}

// function createRemoveButton() {
//     const removeButton = document.createElement('button');
//     const icon = document.createElement('i');
//     icon.classList.add('fas', 'fa-solid', 'fa-trash');
//     removeButton.append(icon);
//     removeButton.setAttribute('class', 'removeButton');
//     return removeButton;
// }

function editButtonAction(e) {
    const parentElement = e.parentNode;
    const toEdit = parentElement.querySelector('.listInput');
    console.log(parentElement);
    console.log(toEdit);
    toEdit.focus();
    toEdit.removeAttribute('readonly', 'readonly');
}

function removeButtonAction(e) {
    const parentElement = e.parentNode;
    console.log(parentElement, e);
    parentElement.remove();
}

function initEventListener(editButton, removeButton) {
    editButton.addEventListener('click', (e) => {
        editButtonAction(e.target);
    });

    removeButton.addEventListener('click', (e) => {
        removeButtonAction(e.target);
    });
}

function sampleAppend() {
    const newDiv = createContainerDiv();
    const listInput = createListInput();
    const editButton = createEditButton();
    const removeButton = createRemoveButton();
    listInput.value = 'Shopping';
    newDiv.append(listInput, editButton, removeButton);
    container.append(newDiv);
    initEventListener(editButton, removeButton);
}

sampleAppend();