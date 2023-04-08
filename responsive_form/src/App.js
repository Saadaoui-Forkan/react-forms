import { useEffect, useState } from 'react';
import avatar from './img/avatar.svg'
import bg from './img/bg.svg'
import wave from './img/wave.png'
import inputs from './data/InputsData';
import FormInput from './input';
import ErrorMessage from './error'


function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  // form validation
  const [validate, setValidate] = useState([])
  const user_regex = /^[A-Za-z]{3,10}$/;
  const password_regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validated = () => {
    alert('completed')
  }

  const formValidation = () => {
    const validate = []
    if (!user_regex.test(values.username)) {
      validate.push("Username should be 3-10 characters and shouldn't include ni special character ni numbers ni spaces!")
    }
    if (!email_regex.test(values.email)) {
      validate.push('Invalid email: The email should be like aaa@aa.aa')
    }
    if (!password_regex.test(values.password)) {
      validate.push("Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!")
    }
    setValidate(validate)
    if (validate.length === 0) {
      validated();
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    formValidation();
  }

  return (
    <div className="App">
      <img className="wave" src={wave} alt='wave'/>
      <div className="container">
        <div className="img">
          <img src={bg} alt='bg' />
        </div>
        <div className="login-content">
          <form >
            <img src={avatar} alt='avatar' />
            <h2 className="title">Welcome</h2>
            
            {
              inputs.map(wrap => (
                <FormInput 
                  key = {wrap.id}
                  {...wrap}
                  value = {values[wrap.name]}
                  handleChange = {handleChange}
                />
              ))
            }

            <ErrorMessage 
              validate = {validate}
            />

            <input type="button" className="btn" value="Login" onClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
