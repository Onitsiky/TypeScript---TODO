import React from "react";
import {ITask} from "./Interface";
import './TaskCard.css'

const TaskCard:React.FC<{val : ITask[]}> = ({val}) => {
    const title = val[val.length-1].Title;
    const task = val[val.length-1].Task;
    const status = val[val.length-1].Status;
    return(
        <div className="TaskContainer">
                <h4>Title : {title}</h4>
                <h4>Description : {task}</h4>
                <h4>Status : {status}</h4>
        </div>
    )
}
export default TaskCard;