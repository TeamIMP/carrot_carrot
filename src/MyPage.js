import "./App.css";
import { useNavigate } from "react-router-dom";
import imp from './Img/Imp.png'

export default function Mypage() {
  const movePage = useNavigate();

  function gohome(){
     movePage('/carrot_carrot');
   }
  return (
    <div className="mypage">
        <img className="CenterImg" alt = "Imp" src = {imp} />
        <div className="welcome-header">내 공간</div>
        <button className="MyPlacebutton" onClick={gohome}>홈으로이동</button>
      </div>
  );
}