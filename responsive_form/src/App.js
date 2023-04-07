import avatar from './img/avatar.svg'
import bg from './img/bg.svg'
import wave from './img/wave.png'
import inputs from './data/InputsData';
import FormInput from './input';

function App() {

  return (
    <div className="App">
      <img className="wave" src={wave}/>
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
                />
              ))
            }

            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
