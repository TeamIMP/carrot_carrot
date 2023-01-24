import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Mypage from './MyPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path={"carrot_carrot"} element={<Home />}></Route>
        <Route path={"Mypage"} element={<Mypage />}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
