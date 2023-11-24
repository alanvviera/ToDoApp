import { ITask } from "./types/tasks";
const baseUrl = 'http://localhost:3001'

export const getAllToDos = async (): Promise<ITask[]> =>{
    const res = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'})
    const todos = await res.json();
    return todos  

}

export const addToDo = async (todo: ITask): Promise<ITask> =>{
    const res = await fetch(`${baseUrl}/tasks`,{
       method: 'POST',
       headers:{
        'Content-type': 'application/json',
       },
       body: JSON.stringify(todo)
    })
    const NewTodo = await res.json();
    return NewTodo;
}

export const editToDo = async (todo: ITask): Promise<ITask> =>{
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`,{
       method: 'PUT',
       headers:{
        'Content-type': 'application/json',
       },
       body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> =>{
    await fetch(`${baseUrl}/tasks/${id}`,{
       method: 'DELETE',
    })

}