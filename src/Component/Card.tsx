import React, {ChangeEvent, useState} from "react";
import "./Card.css";
import {ITask} from "./Interface";
import TaskCard from "./TaskCard";


const Card: React.FC<any> = () => {
    const [title, setTitle] = useState<string>("");
    const [task, setTask] = useState<string>("");
    const [status, setStatus] = useState<any>("TO DO")
    const [todo, setTodo] = useState<ITask[]>([]);

  const handleTitle = (event : ChangeEvent<HTMLInputElement>):void => {
      setTitle(event.target.value);
  }
  function handleTask (event : ChangeEvent<HTMLInputElement>) : void {
      setTask(event.target.value);
  }
  function handleStatus(event : ChangeEvent<HTMLSelectElement>): void {
      setStatus(event.target.value);
  }
  const addToDo = () => {
      const newTask = {
          Title : title,
          Task : task,
          Status : status
      }
      if(newTask.Title === "" || newTask.Task === ""){
          alert("Please fill each cases");
      }
      else {
          setTodo([...todo, newTask]);
          setTitle("");
          setTask("");
          setStatus("TO DO");
          console.log("hey")
      }
  }
  function clearCard(){
      setTitle("");
      setTask("");
  }
   return(
       <>
       <div className="card">
         <form>
             <label className="label">Title</label><br/>
             <input type="text" name="title" value={title} placeholder="Title..." onChange={handleTitle}/> <br/>
             <label>Description</label><br/>
             <input type="text" name="task" value={task} placeholder="Task..."  onChange={handleTask}/><br/>
             <label>Status</label><br/>
             <select onChange={handleStatus} value={status}>
                 <option>TO DO</option>
                 <option>DOING</option>
                 <option>DONE</option>
             </select>
             <br/>
             <div className="button">
                 <button type="button" onClick={()=>{
                     addToDo();
                 }}>
                     Save
                 </button>
                 <button type="button" onClick={clearCard}>
                     Cancel
                 </button>
             </div>

         </form>
       </div>
           <br/>
           <div className="columnContainer">
               <div className="column" id="TODO">
                   <div className="title">
                       <h3>TO DO</h3>
                   </div>
                   <div>
                       {todo.length!=0 && <TaskCard val={todo}/>}
                   </div>
               </div>
               <div className="column" id="DOING">
                   <div className="title">
                       <h3>DOING</h3>
                   </div>
                   <div>
                       {todo.length!=0 && <TaskCard val={todo}/>}
                   </div>
               </div>
               <div className="column" id="DONE">
                   <div className="title">
                       <h3>DONE</h3>
                   </div>
                   <div>
                       {todo.length!=0 && <TaskCard val={todo}/>}
                   </div>
               </div>
           </div>
       </>
   )
}
export default Card;