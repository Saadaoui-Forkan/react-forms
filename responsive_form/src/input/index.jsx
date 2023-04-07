import React from 'react'

function FormInput(props) {
    const { ...inputProps} = props
    // console.log(inputProps)
  return (
    <>
        <div className={inputProps.wrapperClassName}>
            <div className="i">
            <i className={inputProps.iconClassName}></i>
            </div>
            <div className="div">
            <h5>{inputProps.title}</h5>
            <input type={inputProps.type} className="input" />
            </div>
        </div>
    </>
  )
}

export default FormInput
