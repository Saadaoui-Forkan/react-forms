import React, {useState} from 'react'
import './form-input.css'

function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const {id, label, errorMessage, handleChange, ...inputProps} = props

    const handleFocus = (e) => {
        setFocused(true);
    };
  return (
    <div className="formInput">
        <label>{label}</label>
        <input
            {...inputProps}
            onChange = {handleChange}
            onBlur={handleFocus}
            onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
