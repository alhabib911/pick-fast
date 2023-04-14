import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeOne from './Components/HomePage/HomeOne/HomeOne';
import HomeTwo from './Components/HomePage/HomeTwo/HomeTwo';
import TrackingOrder from './Components/Pages/TrackingOrder/TrackingOrder';
import BecomeSeller from './Components/Pages/BecomeSeller/BecomeSeller';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeOne/>}/>
        <Route path='/home' element={<HomeOne/>}/>
        <Route path='/home-2' element={<HomeTwo/>}/>
        <Route path='/tracking-order' element={<TrackingOrder/>}/>
        <Route path='/become-seller' element={<BecomeSeller/>}/>
      </Routes>
    </div>
  );
}

export default App;
