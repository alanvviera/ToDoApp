"use client"
import React, { FormEventHandler, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { addToDo } from '@/api'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

type Props = {}

const AddTask = (props: Props) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTaskValue, setNewTaskValue] = useState<string>('');


  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await addToDo({
      id: uuidv4(),
      text: newTaskValue
    })
    setNewTaskValue("");
    setModalOpen(false)
    router.refresh();

  }

  return (
    <div>
        <button onClick={() => {
  setModalOpen(true);
  setNewTaskValue("");
}} className='w-full btn btn-primary'>Add Task <AiOutlinePlus className='ml-2' /></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
         <form onSubmit={handleSubmitTodo}>
          <h3 className='font-bold text-lg'>Add new Task</h3>
            <div className='modal-action justify-center'>
            <input
              value={newTaskValue} 
              onChange={e => setNewTaskValue(e.target.value)}
              type="text" 
              placeholder="Type here" 
              className="input input-bordered input-secondary w-full max-w-xs" />
            <button className='m-1' type="submit"  >Submit</button>
            </div>
         </form>
        </Modal>
    </div>
    
  )
}

export default AddTask