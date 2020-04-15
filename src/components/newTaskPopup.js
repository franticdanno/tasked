import React, {useState} from 'react';


const NewTaskPopup = ({onSubmit}) => {

  const [title,setTitle] = useState("")
  const defaultText = "Enter task name here!"

  return (
    <div className = 'newFormPopup'>
      <form onSubmit={
        (e) => {
          e.preventDefault();

          if(title !== ""){
            onSubmit(title);
          }
        }
      }>
        <input type="text" defaultValue={defaultText} onClick={
          (e)=>{
            if(e.target.value === defaultText) e.target.value = "" // Clear the default text
          }
        } onChange= {
          (e) => ( setTitle(e.target.value) )
        } />
        <button value="Submit">Add Task!</button>
      </form>
    </div>
  )
};

export default NewTaskPopup;
