// Array para armazenar tarefas
let tasks = [];

//Função para adicionar uma nova tarefa
function taskAdd(){
  const inputTask = document.getElementById('inputTask') ;
  const taskName = inputTask.value;

  console.log(taskName);

  if(taskName.trim() !== ''){
    const task = {
      id: Date.now(),
      name: taskName,
      complete: false
    };
  
    tasks.push(task);
    renderTasks();
    inputTask.value = '';
  }  
}

//Adicionar nova tarefa ao pressionar o Adicionar

const inputTask = document.getElementById('inputTask');
inputTask.addEventListener('keypress', function (event) {
  if (event.key === 'Enter'){
    taskAdd()
  }
});

// Função para deletar a task
function deleteTask(id){
  tasks = tasks.map(task => {
    if(task.id === id){
      task.completed = !task.completed;
    }
    return task;
  });
  renderTasks();
  updateCompleteTask(id);
}

function updateCompleteTask(id){
  const taskElement = document.getElementById(id);
  if(taskElement){
    const task = tasks.find(task => task.id === id);
    if(task.completed){
      taskElement.classList.add('.completed');
    }else {
      taskElement.classList.remove('.completed')
    }
  }
}

//Função para renderizar tarefas na página

function renderTasks() {
  const listTask = document.getElementById('listTask');
  listTask.innerHTML = '';

  tasks.forEach(task => {
    // criando um novo item na lista
    const listItem = document.createElement('li');
    listItem.setAttribute('id', task.id);

    // criando um novo nome de tarefa no span
    const taskName = document.createElement('span');
    taskName.innerHTML = task.name;

    // criando a tarefa completa do botão
    const completeButton = document.createElement('i')
    completeButton.classList.add('bx','bxs-check','complete-btn');
    completeButton.addEventListener('click', () => markCompeleted(task.id))

    // criando a tarefa de deletar no botão
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('bx','bxs-trash','delete-btn');
    deleteButton.addEventListener('click', () => deleteTask(task.id))

    // adicionando os elementos na lista
    listItem.appendChild(taskName);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(listItem);

  });
}

//Iniciando a renderização das tarefas

renderTasks()