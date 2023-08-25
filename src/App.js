import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  // const handleClick = (e) => {
  //   console.log("Hello ninjas!", e);
  // }
  // const handleClickAgain = (name, e) => {
  //   console.log("Hello " + name, e.target);
  // }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/create" element={<Create/>}></Route>
            <Route exact path="/blogs/:id" element={<BlogDetails/>}></Route>
            <Route exact path="*" element={<NotFound/>}></Route>
          </Routes>
          {/* <button onClick={handleClick}>Click Me</button> */}
          {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}
        </div>
      </div>
    </Router>

  );
}

export default App;
