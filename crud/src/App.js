import Update from './components/Update';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';


function App() {
  return (

<BrowserRouter>
    <div className="main">
    <Routes> 
       <Route path="/" element={<Home/>}/>
       <Route path="create" element={<Create/>}/>
       <Route path="read" element={<Read/>}/>
       <Route path="update" element={<Update/>}/>
    </Routes>
    </div>
</BrowserRouter>
  



  );
}

export default App;
