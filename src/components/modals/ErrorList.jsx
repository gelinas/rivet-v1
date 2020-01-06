import React from 'react';

export default function ErrorList (props) {

  const { errors } = props;

  return (
    // maps over each key in errors and parses the array of messages into string
    <>
      {Object.keys(errors).map((keyName, i) => (
        <p key={i}>
          {errors[keyName].toString()}
        </p>
      ))}
    </>
  )
}