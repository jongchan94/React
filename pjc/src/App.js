import logo from './logo.svg';
import './App.css';

// JSX 문법 3가지
// className
// 데이터바인딩(변수 넣는곳) {}
// style 넣을 땐 style = { { 스타일명 : '값'} }  주의사항 font-size는 fontSize


function App() {

  let post = '강남 우동 맛집';


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
