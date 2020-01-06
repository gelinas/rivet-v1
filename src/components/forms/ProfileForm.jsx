import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { profileSchema } from './validationSchema';

// components
import ErrorModal from '../modals/ErrorModal';

// styles
import Loader from 'react-loader-spinner'
import './forms.scss';


// Profile Form use Formik to handle form state
// Profile Form uses a Yup schema defined in `./validationSchema.js` for validation

export default function ProfileForm (props) {

  // deconstruct parameters for form from props
  // formType is "edit" or "add"
  // submitAction is "postProfile" or "editProfile"
  // profileState contains profile, isPosting, isError, and error attributes from state
  const { formType, submitAction, profileState } = props;

  // deconstruct profileState for manipulation in form
  const { profile, isPosting, isError } = profileState;

  return (
    <>

    <Formik
      initialValues={
        (formType === "edit") ?
          { 
            first_name: profile.first_name || "", 
            last_name: profile.last_name || "", 
            phone: profile.phone || "", 
            email: profile.email || "", 
            address: profile.address || "", 
            city: profile.city || "", 
            state: profile.state || "", 
            zip: profile.zip || "", 
            photo: profile.photo || "",
            notes: profile.notes || ""
          } :
          { 
            first_name: "", 
            last_name: "", 
            phone: "", 
            email: "", 
            address: "", 
            city: "", 
            state: "", 
            zip: "", 
            photo: "",
            notes: ""
          }

      }

      // validation schema for form
      validationSchema={yup.object().shape(profileSchema)}

      // submitAction (update or post) is deconstructed from props
      onSubmit={(values, actions) => {
        submitAction(values)
        actions.setSubmitting(false);
      }}
    >

      {({ touched, errors, isSubmitting, setFieldValue }) => (

        <Form className="form_container">
          <h4 className="has-text-weight-bold has-text-centered">
            {formType === "edit" ? "Update Profile" : "Create Profile"}
          </h4>
          <br />
          {/* Name entry fields, two fields total */}
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="first_name" 
                  placeholder="First Name"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="first_name"
                />
              </div>
              <div className="field error_margin_mobile">
                <Field
                  className="input"
                  component="input"
                  name="last_name" 
                  placeholder="Last Name"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="last_name"
                />
              </div>
            </div>
          </div>
          
          {/* Phone entry field */}
          <div className="field is-horizontal error_margin">
            <div className="field-label">
              <label className="label">Phone</label>
            </div>
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="phone" 
                  placeholder="(XXX) XXX-XXXX"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="phone"
                />
              </div>
            </div>
          </div>

          {/* Email entry field */}
          <div className="field is-horizontal error_margin">
            <div className="field-label">
              <label className="label">Email</label>
            </div>
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="email" 
                  placeholder="youremail@email.com"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="email"
                />
              </div>
            </div>
          </div>

          {/* Address entry fields, four fields total */}
          <div className="field is-horizontal error_margin">
            <div className="field-label">
              <label className="label">Address</label>
            </div>
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="address" 
                  placeholder="Street Address"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="address"
                />
              </div>
            </div>
          </div>

          <div className="field is-horizontal error_margin">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="city" 
                  placeholder="City"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="city"
                />
              </div>
            </div>
          </div>

          <div className="field is-horizontal error_margin">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="state" 
                  placeholder="State"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="state"
                />
              </div>
              <div className="field error_margin_mobile">
                <Field
                  className="input"
                  component="input"
                  name="zip" 
                  placeholder="Zip Code"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="zip"
                />
              </div> 
            </div>
          </div>

          {/* Image url entry field */}
          <div className="field is-horizontal error_margin">
            <div className="field-label">
              <label className="label">Photo</label>
            </div>
            <div className="field-body">
              <div className="field">
                <Field
                  className="input"
                  component="input"
                  name="photo" 
                  placeholder="Enter URL to hosted image"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="photo"
                />
              </div>
            </div>
          </div>

          {/* Notes entry field */}
          <div className="field is-horizontal error_margin">
            <div className="field-label">
              <label className="label">Notes</label>
            </div>
            <div className="field-body">
              <div className="field">
                <Field
                  className="textarea"
                  component="textarea"
                  name="notes" 
                  placeholder="OPTIONAL - Please enter any notes about the employee"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="notes"
                />
              </div>
            </div>
          </div>

          {/* Submit button text is determined by type of form (add or update) */}
          {/* Submit button text is replaced with spinner during Posting */}

          <div className="field is-horizontal error_margin">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                { isPosting ?
                  // if true, show disabled button with loading spinner
                  (
                    <button className="button is-link" type="submit" disabled>
                      <Loader 
                        type="Bars" 
                        color="#dbdbdb" 
                        height={15} 
                        width={45} 
                      />
                    </button>
                  ) :
                  // if false, show submit button
                  (
                    <button className="button is-link" type="submit">
                      {formType === "edit" ? "Update Profile" : "Create Profile"}
                    </button>
                  )
                }
                </div>
              </div>
            </div>
          </div>

        </Form> 
      )}
    </Formik>
    
    {/* Displayed error if returned from submission */}
    {isError && <ErrorModal />}
    </>
  )
}