import { RenderTree } from "../render";
import { v1 } from "uuid";

export type TaskType = {
    task: string
    id: string
}

export type CountType = {
    num: number
}

export type TodoPageType = {
    tasks: TaskType[]
    addTest: (testText: string) => void
    removeTest: (id: string) => void
    id: string
}

export type CountPageType = {
    nums: CountType[]
}

export type AllTypes = {
    todoPage: TodoPageType
    countPage: CountPageType
    addTest: (testText: string) => void
    addTestCallback: (testText: string) => void
    removeTest: (id: string) => void
    removeTestCallback: (removedTest: string) => void
    id: string
}

let state: AllTypes = {
    todoPage: {
        tasks: [
            { id: v1(), task: "speed" },
            { id: v1(), task: "price" },
            { id: v1(), task: "comfort" },
        ],

        addTest: (testText: string) => { },
        removeTest: () => { },
        id: ''
    },

    countPage: {
        nums: [
            { num: 1 }
        ]
    },
    addTestCallback: (testText: string) => { },
    addTest: () => { },
    removeTest: (id: string) => { },
    removeTestCallback: (removedTest: string) => { },
    id: ""
}

export const addTest = (testText: string) => {
    let newTest = {
        id: v1(),
        task: testText
    }
    state.todoPage.tasks.push(newTest)

    RenderTree(state)
}

export const removeTest = (id: string) => {
    let focus: any = state.todoPage.tasks.filter((t) => {
         return t.id !== id  
    })
    state.todoPage.tasks = focus
    console.log(state.todoPage.tasks);
    
    RenderTree(state)
}

export default state


/*  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  } */

  