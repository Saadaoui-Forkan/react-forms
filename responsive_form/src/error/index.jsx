import React from 'react'

function ErrorMessage({validate}) {
  return (
    <div className='error-wrap'>
      {
        validate.map((error,index) => (
          <p className="error" key={index}>{error}</p>
        ) )
      }
    </div>
  )
}

export default ErrorMessage
