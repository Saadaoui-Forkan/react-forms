import React, { useState } from 'react'

function FormInput(props) {
    const { handleChange, ...inputProps} = props
    const [focused, setFocused] = useState(false)
    const handleBlur = (e) => {
      // console.log(e.target.value)
      if (e.target.value === "") {
        setFocused(false)
      }
    }
  return (
    <>
        <div className={`${ focused && 'focus'} ${inputProps.wrapperClassName}`}>
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
                onFocus = {()=>setFocused(true)}
                onBlur = {handleBlur}
              />
            </div>
        </div>
    </>
  )
}

export default FormInput
