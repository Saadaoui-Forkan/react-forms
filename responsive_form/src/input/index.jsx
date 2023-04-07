import React from 'react'

function FormInput(props) {
    const { handleChange, focus, handleFocus, idx, ...inputProps} = props
  return (
    <>
        <div className={`${idx === inputProps.id && focus && 'focus'} ${inputProps.wrapperClassName}`}>
            <div className="i">
              <i className={inputProps.iconClassName}></i>
            </div>
            <div className="div">
              <h5>{inputProps.title}</h5>
              <input 
                name = {inputProps.name} 
                type = {inputProps.type} 
                className = "input" 
                onChange = {handleChange}
                onFocus = {()=>handleFocus(inputProps.id)}
              />
            </div>
        </div>
    </>
  )
}

export default FormInput
