import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeOne from './Components/HomePage/HomeOne/HomeOne';
import HomeTwo from './Components/HomePage/HomeTwo/HomeTwo';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeOne/>}/>
        <Route path='/home' element={<HomeOne/>}/>
        <Route path='/home-2' element={<HomeTwo/>}/>
      </Routes>
    </div>
  );
}

export default App;
