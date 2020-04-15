import React from 'react';


const AddTaskButton = ({funAddTask}) => {

  return (
    <div onClick={funAddTask}>
      <img alt="Add Task" src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/96/sign-add-icon.png'/>
    </div>
  )
};

export default AddTaskButton;
