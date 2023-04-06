import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
// JSX 문법 3가지
// className
// 데이터바인딩(변수 넣는곳) {}
// style 넣을 땐 style = { { 스타일명 : '값'} }  주의사항 font-size는 fontSize


function App() {

  let post = '강남 우동 맛집';
 //state 쓰면 자동으로 재 렌더링함
  let [a,b] = useState('남자 코트 추천')


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className="list">
        <h4>{a}</h4>
        <p>4월 6일 발행</p>
      </div>

      <div className="list">
        <h4>글제목</h4>
        <p>4월 6일 발행</p>
      </div>
    </div>
  );
}

export default App;
