import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, readOnly, ...props}) {
  return (
    <div className="formGroup">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="formInput"
        // && (error && "textinput__input--state-error")}
        readOnly={readOnly}
        disabled={readOnly}
        {...props}
      />
      {children}
      {error && <div className="formInput-hasError">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /* Class name for local styling */
  localClass: PropTypes.string,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password', "phone", "email"]),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;
