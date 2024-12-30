import React from "react";
import Modal from "react-modal";
import "../App.css";

const LoginModal = ({ isOpen, onClose ,handleModalOpen}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-container"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div className="modal-header">
        <img
          src="https://c.pathe.tn/assets/img/logo/logo-pathe-mobile.svg"
          alt="Pathé Logo"
          className="modal-logo"
        />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <form className="modal-form">
        <label>
          E-MAIL *
          <input type="email" placeholder="E-mail" required />
        </label>
        <label>
          Password *
          <input type="password" placeholder="Password" required />
        </label>
        <button type="submit" className="login-button">Log in</button>
      </form>
      <p className="signup-link">
        Don't have an account? <button style={{border:"none", backgroundColor:"white"}} onClick={() => {
          handleModalOpen();
          onClose();
        }}>Create one</button>
      </p>
    </Modal>
  );
};

export default LoginModal;
