import React from "react";
import Modal from "react-modal";
import "../App.css";

const AvatarModal = ({ isOpen, onClose, openLoginModal,handleModalOpen }) => {
  console.log(openLoginModal)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="avatar-modal-container"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div className="avatar-modal-header" >
        <h2>My account</h2>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="avatar-modal-content">
        <button className="action-button" onClick={()=>openLoginModal()}>
          Login
        </button>
        <button className="action-button secondary"onClick={() => {
          handleModalOpen();
          onClose();
        }}
        >
          Create an account
        </button>
        </div>
      
    </Modal>
  );
};

export default AvatarModal;
