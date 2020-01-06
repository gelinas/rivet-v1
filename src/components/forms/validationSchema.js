import * as yup from 'yup';

// the `required` method for `email` is disabled to allow Andy to test `ErrorModal` by inducing a server error for empty email field
// if the schema is written properly, it should be impossible to induce an error otherwise!

export const profileSchema = {
  first_name: yup.string()
    .required("Please enter your first name")
    .max(32, "Name is too long"),
  last_name: yup.string()
    .required("Please enter your last name")
    .max(32, "Name is too long"),
  phone: yup.string()
    .required("Please enter your phone number")
    .matches(
      /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$|^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$|^[2-9]{1}[0-9]{9}$/,
      "Format 10 digit, (XXX) XXX-XXXX, or XXX-XXX-XXXX"),
  email: yup.string()
    // commented this out so server errors can be tested by omitting email address
    // .required("Please enter a valid email address")
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  address: yup.string()
    .required("Please enter your address")
    .max(255, "Address is too long"),
  city: yup.string()
    .required("Please enter your city")
    .max(32, "City is too long"),
  state: yup.string()
    .required("Please enter your state")
    .length(2, "Please use two chracter abbreviation")
    .uppercase(),
  zip: yup.number()
    .typeError("Please enter 5-digit zip code")
    .positive("Please enter 5-digit zip code")
    .required("Please enter 5-digit zip code")
    .min(10000, "Please enter 5-digit zip code")
    .max(99999, "Please enter 5-digit zip code"),
  photo: yup.string()
    .url("Please enter a valid url to your hosted image")
    .max(255, "URL must be shroter than 255 characters"),
  notes: yup.string()
    .max(255, "Notes must contain fewer than 255 characters")
}