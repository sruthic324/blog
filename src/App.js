import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
      <Route path='/a' element={<Add/>}/>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
