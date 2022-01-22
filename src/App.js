// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import EditStudent from './Components/EditStudent';
import AddStudent from './Components/AddStudent';
import Error from './Components/Error';
import { StudentProvider } from './Components/StudentContext';


function App() {
  return (
    <StudentProvider>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/add/:id" element={<AddStudent />} />
            <Route path="/student/edit/:id" element={<EditStudent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </Router>
      </div>
    </StudentProvider>
  );
}

export default App;
