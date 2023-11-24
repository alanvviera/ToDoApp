import AddTask from "./components/AddTask"
import ToDoList from "./components/ToDoList"
import { getAllToDos } from "@/api"

export default async function Home() {
  const task = await getAllToDos() 
  return (
    <main className="max-w-xl mx-auto mt-4">
      <div className="text-center flex flex-col my-5 gap-4">
        
        <h1 className=' text-xl font-bold'>To do app</h1> 
        <AddTask/>
      </div>
      <ToDoList tasks={task}/>
   </main>
  )
}
