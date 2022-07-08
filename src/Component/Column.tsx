import React from "react";
import "./Column.css";

const Column : React.FC<{title : string}> = ({title}) => {

    return(
        <div className="column">
            <div className="title">
                <h3>{title}</h3>
            </div>
        </div>
    )
}
export default Column;