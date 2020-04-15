import React from 'react';
import Draggable from 'react-draggable'; // The default


const Task = ({text,position,fDelete,fComplete}) => {

  if(position == null){
    console.log("no position")
    position = [Math.random() * window.innerWidth,Math.random() * window.innerHeight]
  }

  return (
    <Draggable
      defaultPosition={{x: position[0], y: position[1]}}
      >
    <div>
    <div className="Task">
      <div>{text}</div>
      <div>
        <button onClick={()=>(fComplete(text))}>Complete</button>
        <button onClick={()=>(fDelete(text))}>Delete</button>
      </div>
    </div>
    </div>
    </Draggable>
  )
};

export default Task;
