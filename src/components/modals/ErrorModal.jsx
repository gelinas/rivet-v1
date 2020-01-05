import React, { useState, useRef } from 'react';

// styles
import './modals.scss';

export default function ErrorModal (props) {

  // create a ref for manipulating the bulma modal node
  const modalEl = useRef(null);

  // close the display of the modal 
  const closeModal = () => {
    modalEl.current.classList.remove('is-active');
  };

  const { error } = props

  return (
    // modal built with bulma classes, diplay toggled with `is-active` class
    <div ref={modalEl} className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">Sorry! There was an error.</p>
          <button 
            className="delete" 
            aria-label="close" 
            onClick={() => closeModal()}
          />
        </header>

        <section className="modal-card-body has-text-centered">
          {error}
        </section>
       
        <footer className="modal-card-foot">
          <div className="center_button">
            <button 
              className="button is-link"
              onClick={() => closeModal()}
            >
              Return to Form
            </button>
          </div>
        </footer>
        
      </div>
    </div>
  )
}