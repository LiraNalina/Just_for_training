import React, { ChangeEvent, useState } from "react";
import state, { AllTypes, TodoPageType } from "../../redux/state";
import { Task } from "../Task/Task";
import s from './Sbor.module.css'


export const Sbor = (props: AllTypes) => {

    let testElements = state.todoPage.tasks.map((t) => {
        return (
        <Task key={t.id} id={t.id} task={t.task} />           
            )
    })

    /* let [newTest, setNewTest] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTest(e.currentTarget.value)
    } */

    let newTestRef = React.createRef<HTMLTextAreaElement>()

    const onClickAddHandler = () => {
       if (newTestRef.current) {
        props.addTestCallback(newTestRef.current.value)   
       }
    }

    return (
        <div className={s.main}>

         <div><textarea ref={newTestRef}></textarea></div>   

            <button onClick={onClickAddHandler}>+</button>



            <div className={s.description}>
                <div className={s.speed}>Speed</div>
                <div className={s.price}>Price</div>
                <div className={s.view}>View</div>
            </div>

            <div className={s.names}>

                <div>
                    <span className={s.names1}>Car</span>
                    {testElements}
                </div>

                <div>
                    <span className={s.names1}>Bus</span>
                    {testElements}
                </div>

                <div>
                    <span className={s.names1}>Train</span>
                    {testElements}
                </div>

            </div>
            <div className={s.counter}>Counter for tests
                <span className={s.num}>0</span>
            </div>
        </div >
    )
}