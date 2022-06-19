import React from "react";
import state, { TaskType } from "../../redux/state";

export const Task = (props: TaskType) => {

const onRemoveClickHandler = () => {
    state.removeTest(props.id)
}

    return (
        <div>
            <ul>
                <li>{props.task}</li>
            </ul>
            <button onClick={() => onRemoveClickHandler()}>x</button>
        </div>
    )
}