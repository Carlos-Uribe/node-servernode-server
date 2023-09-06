const readline = require('readline-sync');

const tasks = [];

function addTask() {
  const taskIndicator = readline.question('Ingrese el indicador de la tarea: ');
  const taskDescription = readline.question('Ingrese la descripción de la tarea: ');

  tasks.push({
    indicator: taskIndicator,
    description: taskDescription,
    completed: false,
  });

  console.log('Tarea añadida con éxito.');
}

function deleteTask() {
  const taskIndex = readline.question('Ingrese el índice de la tarea que desea eliminar: ');

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    console.log('Tarea eliminada con éxito.');
  } else {
    console.log('Índice de tarea no válido.');
  }
}

function completeTask() {
  const taskIndex = readline.question('Ingrese el índice de la tarea que desea marcar como completada: ');

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Índice de tarea no válido.');
  }
}

function printTasks() {
  console.log('Lista de Tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator} - ${task.description}`);
  });
}

function main() {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const choice = readline.question('Seleccione una opción: ');

    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        printTasks();
        break;
      case '5':
        console.log('Saliendo del programa.');
        process.exit(0);
      default:
        console.log('Opción no válida.');
    }
  }
}

main();
