import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function ModifyBenefitModal({isOpen,setIsOpen}) {
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'50%',
    height:'60%',
  },
};
  return (

      <Modal
        isOpen={isOpen}
        onRequestClose={true}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <form className=''>
          <TextField id="name" label="Name Of Benefit" variant="outlined" />
       </form>
      </Modal>
  );
}
