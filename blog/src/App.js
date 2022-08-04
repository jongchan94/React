import logo from './logo.svg';
// css 파일 경로
import './App.css';

// #2 useState
import { useState} from 'react';

function App() {

  // #1서버에서 가져온 실제 데이터라고 참고
  let post = '강남 우동 맛집';

  // #2 useState
  // useState('남자 코트 추천');
  let [글제목,b] = useState('여자 코트 추천',);
  let [글제목2,c] = useState('남자 코트 추천',);
  let [글제목3,d] = useState('아기 코트 추천',);




  return (
    <div className="App">
    

      {/* #1 문법 */}
      <div className="black-nav">
        {/* <h4 style={ {color : 'red', fontSize : '16px' } }>블로그임</h4> */}
        <h4>RaectBlog</h4>
      </div>
      
      {/* #2 list */}

      <div className="list">
        <h4>{글제목}</h4>
        <p>8월 4일 발행</p>
        
      </div>

      <div className="list">
        <h4>{글제목2}</h4>
        <p>8월 4일 발행</p>
        
      </div>

      <div className="list">
        <h4>{글제목3}</h4>
        <p>8월 4일 발행</p>
        
      </div>
       
       
        {/* <h4>{post}</h4> */}
    
    
    </div> //return
  
  // #1
  // 실은 JSX언어 - js파일에서 쓰는 html 대용품
  // JSX안에서는 className
  /* JSX 문법 2변수넣을 땐 {중괄호} */
  /* id,className,src도 가능 id={post} 전문용어 데이터바인딩  */
  /* style 넣을 땐 style= { {스타일명 : '값'} } */

  // #2
  // return() 안에는 병렬로 태그 2개 이상 기입금지
  //  자료 잠깐 저장할 땐 변수, 리액트에선 state 
  // 1.import {useState}
  // 2.useState(보관할 자료)
  // 3.let {작명, 작명}
  // a는 보관했던 자료 나옴 b는 state 변경도와주는 함수
  // 왜 써야함? 변수랑 차이가 좀있음 !일반변수는 html 자동으로 반영안됌
  // state는 변경되면 html은 자동 재렌더링 됨
  // 자주변경될거같은 html 부분은 state로 만들어놓기
  );
}

export default App;
