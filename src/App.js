import Wrapper from "./Wrapper";
import Button from "./Button";
import './App.css'



function App() {
  
  return (
    <div>
      <div className="backgorund">
        <h1 className="welcome-header">당근 당근 입니당근.</h1>
        <div className="HeadSpace" />
        <div className="MainContent" />
        <div className="welcome-header">쪽지가 쌓이는게 보이는 오브젝트 또는 공간</div>
      <button className="Friendbutton">친구에게 쪽지 보내기</button>
      <button className="MyPlacebutton">내 공간 만들기</button>
      </div>
    </div>

  );
}

export default App;
