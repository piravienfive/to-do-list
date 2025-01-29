import './style.css'

let deleteButton: any = ''

function addTaskHandler (addBttn: HTMLButtonElement) {
  let counter = 0
  console.log('clicked!')
  addBttn.style.display = 'none'
  let newInput = document.createElement('input')
  let newSaveButton = document.createElement('button')
  newSaveButton.innerText = 'Save'
  // newSaveButton.disabled = true
  newSaveButton.style.fontSize = '30px'
  let listOfTasks = document.querySelector<HTMLDivElement>('.savedTasks')
  let addSection = document.querySelector<HTMLDivElement>('.addingTasks')
  if (!listOfTasks || !addSection){
    throw new Error('Object could be null')
  }
  addSection.appendChild(newInput)
  addSection.appendChild(newSaveButton)
  addSection.style.flexDirection = 'column'
  addSection.style.justifyContent = 'center'
  addSection.style.display = 'flex'
  newInput.style.fontSize = '30px'


  // Another event listener need to be placed on input box, if input is present button enables
  // if(newInput.value){
  //   newSaveButton.disabled = false
  // }

  newSaveButton.addEventListener('click' , () => {
    const divForTask = document.createElement('div')
    counter += 1

    

    if(!deleteButton){
      deleteButton = document.createElement('button')
      const buttonsDiv = document.querySelector<HTMLDivElement>('.buttons')
      buttonsDiv?.appendChild(deleteButton)
      deleteButton.id = 'add'
      deleteButton.innerText = 'Remove'
    }
    // deleteButton = document.createElement('button')
    // const buttonsDiv = document.querySelector<HTMLDivElement>('.buttons')
    // buttonsDiv?.appendChild(deleteButton)
    // deleteButton.id = 'add'
    // deleteButton.innerText = 'Remove'
    let task = newInput.value
    let newTaskCheckbox = document.createElement('input')
    newTaskCheckbox.type = 'checkbox'
    newTaskCheckbox.id = 'tasks' + `${counter}`
    newTaskCheckbox.className = 'tasks'

    newTaskCheckbox.style.transform = 'scale(1.33)'
    newTaskCheckbox.style.margin = '10px'


    let newInputLabel = document.createElement('label')
    newInputLabel.setAttribute('for', 'tasks' )
    newInputLabel.innerText = task
    newInputLabel.id = 'tasks' + `${counter}`
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


    deleteButton.addEventListener('click', () => {
      let currentTasks = document.querySelectorAll<HTMLInputElement>('.tasks')
      console.log(currentTasks)
      console.log(typeof(currentTasks))
      for(let i = 0; i < currentTasks.length; i++){
        console.log(currentTasks[i].checked)
        if(currentTasks[i].checked == true){
          currentTasks[i].remove()
          document.querySelector<HTMLLabelElement>(`#tasks${i + 1}`)?.remove()

        }
      }

    })


  })

  return 'hello'
}



const addButton = document.querySelector<HTMLButtonElement>('.add')
let doAddTask = (event: Event) => addTaskHandler(addButton)

addButton?.addEventListener('click', doAddTask )