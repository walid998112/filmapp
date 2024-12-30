import React from "react";
import Modal from "react-modal";
import "../App.css";

const SignUpModal = ({ isOpen, onClose ,openLoginModal}) => {
  console.log(openLoginModal)
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
        <label>
          Password Confirmation *
          <input type="password" placeholder="Password Confirmation" required />
        </label>
        <label>
          Favourite Cinema
          <select>
            <option value="">Select</option>
            <option value="cinema1">Cinema 1</option>
            <option value="cinema2">Cinema 2</option>
          </select>
        </label>
        <label>
          Preferred Language of Correspondence
          <select>
            <option value="">Select</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </label>
        <button type="submit" className="continue-button">Continue</button>
      </form>
      <p className="login-link">
        You have an account? <button style={{border:"none", backgroundColor:"white"}} onClick={()=>openLoginModal()}>Log in</button>
      </p>
    </Modal>
  );
};

export default SignUpModal;