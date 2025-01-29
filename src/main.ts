import './style.css'

function addTaskHandler (addBttn: HTMLButtonElement) {
  console.log('clicked!')
  addBttn.style.display = 'none'
  let newInput = document.createElement('input')
  let newSaveButton = document.createElement('button')
  newSaveButton.innerText = 'Save'
  newSaveButton.style.fontSize = '30px'
  let listOfTasks = document.querySelector<HTMLDivElement>('.savedTasks')
  let addSection = document.querySelector<HTMLDivElement>('.addingTasks')
  if (!listOfTasks || !addSection){
    throw new Error('Object could be null')
  }
  addSection.appendChild(newInput)
  addSection.appendChild(newSaveButton)
  newInput.style.fontSize = '30px'

  newSaveButton.addEventListener('click' , () => {
    const divForTask = document.createElement('div')
    let task = newInput.value
    let newTaskCheckbox = document.createElement('input')
    newTaskCheckbox.type = 'checkbox'
    newTaskCheckbox.id = 'task1'
    let newInputLabel = document.createElement('label')
    newInputLabel.setAttribute('for', 'task1')
    newInputLabel.innerText = task
    newInputLabel.style.fontFamily = 'Trebuchet MS'
    newInputLabel.style.fontSize = '23px'

    console.log(task)
    addBttn.style.display = 'block'
    addBttn.style.order = '2'
    newInput.style.display = 'none'
    newSaveButton.style.display = 'none'
    // let newTask = document.createElement('h5')
    // newTask.innerText = task
    listOfTasks.appendChild(divForTask)
    divForTask.appendChild(newTaskCheckbox)
    divForTask.appendChild(newInputLabel)
    // newTask.style.fontSize = '30px'
  })

  return 'hello'
}



const addButton = document.querySelector<HTMLButtonElement>('.add')
let doAddTask = (event: Event) => addTaskHandler(addButton)

addButton?.addEventListener('click', doAddTask )