import React, { useEffect, useRef } from 'react';

//redux
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/profileActions';

// components
import ErrorList from './ErrorList';

// styles
import './modals.scss';


// renders modal for any errors returned from server requests

function ErrorModal (props) {

  const { errorResponse, clearErrors } = props;

  // create a ref for manipulating the modal nodes
  const modalEl = useRef(null);
  const cardEl = useRef(null);


  // close the display of the modal 
  const closeModal = () => {
    modalEl.current.classList.remove('is-active');
    clearErrors();
  };

  // click handler for clicks outside of modal
  const handleClickOutside = e => {
    if (cardEl.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    closeModal();
  };

  // create and clean up event listeners for clicks outside
  useEffect(() => {
    // add event listener when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to clean up event listener when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    // modal built with bulma classes, diplay toggled with `is-active` class
    <div ref={modalEl} className="modal is-active">
      <div className="modal-background" />
        {/* <div className="fit_viewport"> */}
          <div ref={cardEl} className="modal-card">
            
            {/* Render error status and statusText if in response or standard message*/}
            <header className="modal-card-head has-text-centered">
              <p className="modal-card-title">
                <span className="is-size-6-mobile">
                  {errorResponse.status && errorResponse.statusText ?
                  `HTTP Status ${errorResponse.status}, ${errorResponse.statusText}` :
                  `Sorry! There was an error`}
                </span>
              </p>
              <button 
                className="delete" 
                aria-label="close" 
                onClick={() => closeModal()}
              />
            </header>

            {/* Render error list if included in response or standard message */}
            <section className="modal-card-body has-text-centered">
              {errorResponse.data.errors ?
              <ErrorList errors={errorResponse.data.errors} /> :
              `There was an error processing your request. Please try again`}
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
        {/* </div> */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    errorResponse: state.profile.errorResponse
  };
};

export default connect(
  mapStateToProps,
  { clearErrors }
)(ErrorModal);