import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Project from './components/Project';
import BlogDetails from './components/BlogDetails';
import { BrowserRouter as Router,Routes, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route  path='/about' element={<About />}/>
            <Route  path='/create' element={<Create />}/>
            <Route  path='/project' element={<Project />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
