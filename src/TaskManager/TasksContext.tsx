import React, { createContext, useContext, useMemo, useReducer } from "react"
import type { Action, Task, TasksContextValue, TasksState } from "./types";


const initialState: TasksState = { tasks: [] };

// Reducer Function that handles state based on different actions
function tasksReducer(state: TasksState, action: Action): TasksState {
    switch (action.type) {
        case "ADD": {
            const newTask: Task = {
                id: Date.now().toString(),
                text: action.text.trim(),
                done: false,
            };
            return { tasks: [newTask, ...state.tasks] }
        }
        case "UPDATE": {
            return {
                tasks: state.tasks.map((t) => t.id === action.id ? { ...t, text: action.text.trim() } : t)
            }
        }
        case "TOGGLE": {
            return {
                tasks: state.tasks.map((t) => t.id === action.id ? { ...t, done: !t.done } : t)
            }
        }
        case "DELETE": {
            return { tasks: state.tasks.filter((t) => t.id !== action.id) }
        }
        default:
            return state
    }
}
const TasksContext = createContext<TasksContextValue | null>(null);



// TasksProvider to handle all the context initialization logic instead of rewriting it in every single component that needs the context

export function TasksProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(tasksReducer, initialState)

    const value = useMemo(
        () => ({
            tasks: state.tasks,
            add: (text: string) => dispatch({type: "ADD", text}),
            update: (id: string,text: string) => dispatch({type: "UPDATE", id, text}),
            toggle:(id: string) => dispatch({type: "TOGGLE", id}),
            remove:(id: string) => dispatch({type: "DELETE", id})
        })
    , [state.tasks]);


    return (<TasksContext.Provider value={value}>{children}</TasksContext.Provider>);
}


// Checks if value is set, it will be only set if TasksProvider is used
export function useTasks(){
    const ctx = useContext(TasksContext);
    if(!ctx) throw new Error ("Use this only inside TasksProvider to get the value lol!!!")
    return ctx;
    }
