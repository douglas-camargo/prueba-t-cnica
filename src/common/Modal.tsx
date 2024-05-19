import React, { FC, ReactNode, useState } from 'react';

interface ModalProps {
  stateModal: boolean;
  children: ReactNode;
  title: string,
}

const Modal: FC<ModalProps> = ({ stateModal, children, title }): React.JSX.Element => {
  const [state, setState] = useState(stateModal)
  const handleClickClose = () => {
    setState(!state)
  }
  
  return (
    <>
      {state && (
        <div className="absolute bg-white rounded-[15px] z-50 border border-solid border-gray-500">
          <div className="w-[500px] min-h-[200px] p-4 flex flex-col justify-between">
            <div className='flex justify-between w-full'>
              <p className="text-lg font-bold">{title}</p>
              <button className='text-xl font-bold' onClick={handleClickClose}>X</button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

