import React from "react";

function CVComponent(props) {
    return (
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
            <ul>
                {props.item.tasks?.map(task => <li><i className="fa fa-caret-right"/> {task}</li>)}
            </ul>
            <p>{props.item.tools}</p>
        </div>
    );
}

export default CVComponent;
