import 'bootstrap/dist/css/bootstrap.min.css';
import JobApplicationForm from './JobApplicationForm';
import SuccessPage from "./Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>  {}
      <div className="App">
        <Routes>
          <Route path="/" element={<JobApplicationForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
