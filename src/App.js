import "./App.css";
import illustration from "./components/3545760.jpg";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={illustration} alt="illust" />
        </div>
      </div>
    </div>
  );
}

export default App;
