import React,{useState} from 'react';
import './App.css';

import AddTaskButton from './components/addTaskButton.js'
import Task from './components/task.js'
import NewTaskPopup from './components/newTaskPopup.js'

function App() {

  const [tasks,setTasks] = useState([])
  const [showAddTaskPopup,setShowAddTaskPopup] = useState(false)

  function onAddTaskSubmit(title){

    setShowAddTaskPopup(false);

    setTasks(tasks.concat({text: title, position:[100,100]}));

    //alert("Submit")
  }

  function deleteTask(title){
    console.log("Delete",title,tasks.indexOf(title))

    setTasks(tasks.filter((item)=>{
        return item.text !== title;
    }));
  }

  function completeTask(title){
    console.log("Complete",title)

    setTasks(tasks.filter((item)=>{
        return item.text !== title;
    }));
  }

  function showNewTaskPopup(){
    if (showAddTaskPopup){
       return <NewTaskPopup onSubmit={ onAddTaskSubmit } />
    } else {
        return;
    }
  }

  return (
    <div className="App">
      <div>
        <AddTaskButton funAddTask = {()=> (setShowAddTaskPopup(!showAddTaskPopup))} />
      </div>
      <div>
      { tasks.map((t,i) => (
        <Task text={t.text} position={t.position} key={i} fDelete={deleteTask} fComplete={completeTask} />
      ))}
      { showNewTaskPopup()  }
      </div>
    </div>
  );
}

export default App;
