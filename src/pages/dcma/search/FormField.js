import React from 'react'
import { TextField } from '@mui/material';
import { useFormik, FormikProvider, Form, useField } from "formik";
import './search.scss'


export const FormField = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      }`}
    >
      
      <TextField id="standard-basic" label={label} variant="standard" fullWidth 
      {...props}
      {...field}
      aria-describedby={`${props.id}-feedback ${props.id}-help`}
      onFocus={handleFocus} />
      {showFeedback ? (
        <div
          id={`${props.id}-feedback`}
          aria-live="polite"
          className="feedback text-sm"
        >
          {meta.error ? meta.error : '✓'}
        </div>
      ) : null}
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};
