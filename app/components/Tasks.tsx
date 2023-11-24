"use client"
import { ITask } from '@/types/tasks'
import React ,{ FormEventHandler, useState } from 'react'
import { FaEdit} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from './Modal';
import { useRouter } from 'next/navigation'
import { editToDo, deleteTodo } from '@/api';



interface TaskProps{
    tasks: ITask
}

const Tasks: React.FC<TaskProps> = ({tasks}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(tasks.text);
  
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await editToDo({
      id: tasks.id,
      text: taskToEdit
    })
    setOpenModalEdit(false)
    router.refresh();

  }
  
  const handleDeleteTask = async (id: string)=>{
    await deleteTodo(id)
    setOpenModalDelete(false)
    router.refresh();
    
  }


  return (
    <tr key={tasks.id}>
    <td>{tasks.text}</td>
    <td className='flex gap-5'>
    <FaEdit onClick={() => setOpenModalEdit(true)} cursor='pointer' className="text-blue-500"/>
    <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
         <form onSubmit={handleSubmitEditTodo}>
          <h3 className='font-bold text-lg'>Edit Task</h3>
            <div className='modal-action justify-center'>
            <input
              value={taskToEdit} 
              onChange={e => setTaskToEdit(e.target.value)}
              type="text" 
              placeholder="Type here" 
              className="input input-bordered input-secondary w-full max-w-xs" />
            <button className='m-1' type="submit"  >Update</button>
            </div>
         </form>
        </Modal>
    <MdDelete onClick={()=> setOpenModalDelete(true)} cursor='pointer' className="text-red-500" />
    <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
         <h1 className='font-bold text-xl'> Are you sure you want to delete?</h1>
         <div className='modal-action'>
            <button onClick={()=> handleDeleteTask(tasks.id)} className='btn'>DELETE</button>
            </div>
        </Modal>
    </td>
  </tr>
  )
}

export default Tasks