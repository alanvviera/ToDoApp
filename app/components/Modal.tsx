import React from 'react'

type Props = {}

interface modalProps{
    modalOpen: boolean,
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode

}

const Modal: React.FC<modalProps>= ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} >
      <div className="modal-box">
        {children}
        <div className="modal-action justify-start">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Modal
