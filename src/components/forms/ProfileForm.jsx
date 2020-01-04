import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

// styles
import './forms.scss';

export default function ProfileForm (props) {

  let buttonText
  if (props.type === "add") {
    buttonText = "Create"
  } else if (props.type === "edit") {
    buttonText = "Update"
  }

  return (
    <>

    <Formik
      initialValues={
        props.values 
          ?  props.values
          : { 
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
      validate={values => {
        let errors = {};
        if (values.first_name.length < 3) {
          errors.first_name = "First name is required";
        return errors
        }
      }}
      onSubmit={(values, actions) => {
        // console.log("user input for new event", { 
        //     title: values.title, 
        //     date: `${values.date}`,
        //     time: `${values.date}`,
        //     location: values.location,
        //     description: values.description,
        //     link: values.link,
        //     image: values.image, });
        // props.action(values)
        actions.setSubmitting(false);
      }}
    >

      {({ touched, errors, isSubmitting, setFieldValue }) => (

        <Form className="form_container">
          {console.log("error from inside Form", errors)}
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
                  name="div" 
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
                  placeholder="Please enter any notes about the employee"
                />
                <ErrorMessage
                  className="help is-danger error"
                  component="div"
                  name="notes"
                />
              </div>
            </div>
          </div>

          {/* Form controls */}
          <div className="field is-horizontal error_margin">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-link" type="submit">
                    Create Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

        </Form> 
      )}
    </Formik>
      
    {props.isError && 
    // if true, render an error
      ( <p>{props.error}</p>)
    }
    </>
  )
}