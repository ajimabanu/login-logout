import "./App.css";
import SignUp from "./Sign-Up";
import SignIn from "./SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
