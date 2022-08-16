// eslint-disoble
// Lint 끄는 기능




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
  let [글제목, 글제목변경] = useState(['여자 코트 추천','남자 코트 추천','아기 코트 추천']);

  // #3 좋아요 클릭하면 숫자가 올라가는 기능
  let [좋아요, 좋아요변경] = useState(0);

  // 따봉변경는 state변경용 함수임 

  // 이렇게 하면 따로 써야하니 불편 일반적으로 직접 가서 쓴다
  // function 함수() {
  //   console.log(1);

  // }

  


  return (
    <div className="App">
    

      {/* #1 문법 */}
      <div className="black-nav">
        {/* <h4 style={ {color : 'red', fontSize : '16px' } }>블로그임</h4> */}
        <h4>RaectBlog</h4>
      </div>
      
      {/* #2 list */}

      <div className="list">
        {/* #3 이벤트 핸들러  
        내가 어떤 html 요소에 자바스크립트 기능 쓰고 싶을 때*/
        
        // onClick = {} 안엔 함수이름을 넣어야 함 
        }
        {/* 함수 축약 */}
        {/* state 변경하는법 
          1. 등호로 변경 금지, 안바뀐다
        */}

        <h4>{글제목[0]} <span onClick={ () => { 좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>8월 4일 발행</p>


        {/* #4 array/object 다룰 때 원본은 보존하는게 좋음*/}
        {/*  */}
        <button onClick = { () => {
          // ['남자 코트 추천','남자 코트 추천','아기 코트 추천']
         
          // 영구적으로 수정해버림
          // 글제목[0] = '남자 코트 추천';
          
          // 카피문법
          let copy = [글제목];
          copy[0] = '남자코트 추천'
          글제목변경(copy); 

          }}>버튼</button>




          
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 4일 발행</p>
        
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 4일 발행</p>
        
      </div>
       
       
        {/* <h4>{post}</h4> */}
    

    
        {/* #5 모달 */}
          {/* 컴포넌트 만드는 법*/}
          {/* 1.fucntion 만든다  < 다른 function 바깥에 만든다 / 영어 대문자
              2.return() 안에 html 담기
              3.<함수명></함수명>만들기
          */}
          {/* <div className="modal">
            <h4>제목</h4>
            <p>날씨</p>
            <p>상세내용</p>
          </div> */}


          <Modal></Modal>


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


// component 

// Modal를 component로 부른다

function Modal(){
  return(

            <div className="modal">
            <h4>제목</h4>
            <p>날씨</p>
            <p>상세내용</p>
          </div> 


  )
}


export default App;
