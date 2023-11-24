"use client"
import { ITask } from "@/types/tasks"
import React from "react"
import Tasks from "./Tasks"

interface toDoListProps{
  tasks: ITask[]
}

const ToDoList: React.FC<toDoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => 
           <Tasks key={task.id} tasks={task}/>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ToDoList