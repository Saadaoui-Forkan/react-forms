import { useRef } from "react";

function App() {

  const labels = [
    {
      id:0,
      label_name: "Name",
      input_type: "text"
    },
    {
      id:1,
      label_name: "Email",
      input_type: "email"
    },
    {
      id:2,
      label_name: "Password",
      input_type: "password"
    }
  ]

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        {
          labels.map(item => (
            <div className="form-control" key={item.id}>
              <input type={item.input_type} required />
              <label>
                {
                  item.label_name.split('')
                  .map((letter,idx) => (
                    <span 
                    key={idx} 
                    style={{transitionDelay: `${idx*30}ms`}}
                    >
                      {letter}
                    </span>
                  ))
                }
              </label>
            </div>
          ))
        }

        <button className="btn">Login</button>

        <p className="text">Don't have an account? <a href="#">Register</a> </p>
      </form>
    </div>
  );
}

export default App;
