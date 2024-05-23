import logo from "./holberton_logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils.js";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>email:</label>
          <input type="email" id="email" name="email" />
          <br></br>
          <label>password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
