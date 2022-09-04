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
  let [좋아요, 좋아요변경] = useState(0,1,2);

  
  // 좋아요변경는 state변경용 함수임 

  // 이렇게 하면 따로 써야하니 불편 일반적으로 직접 가서 쓴다
  // function 함수() {
  //   console.log(1);

  // }

  // #7 div를 반복문으로 줄이고 싶을 때 
  // 모든 어레이 자료옆에 붙일 수 있다  콜백함수 써야함

  // array 자료 갯수만큼 함수안의 코드 실행해줌
  // 콜백함수 a , 함수의 파라미터는 array안에 있던 자료임
  // retru에 적으면 array로 담아 준다
   [1,2,3].map(function(a){
    // console.log(a)
    return '1122334422';




   });

  // #6 동적인 모달 만들기

  // 오른쪽엔 set...로하는게 일반적인 관습 
  // useState('닫힘,false') 형식은 자유
  let [modal, setModal] = useState('닫힘');
  


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

          let arr = [1,2,3]

          // array/object 변수엔 화살표만 저장됨

            
          // ...는 화살표를 새로 바꿔주세요 (괄호 벗겨주세요) = 독립적인 어레이가 됌
          let copy = [...글제목];
          copy[0] = '남자코트 추천'

          // console.log(copy == 글제목)
          // 카피와 글제목이 같아서 변경이 안됌
          글제목변경(copy);

          

          }}>버튼</button>




          
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 4일 발행</p>
        
      </div>

      <div className="list">
        {/* <h4 onClick={ ()=> setModal('열림') }>{글제목[2]}</h4> */}
        {/* 느낌표는 우측 자료를 반대로 바궈줌 */} 
        <h4 onClick ={ ()=> {setModal( '열림')  }}> {글제목[2]}</h4>
        <p>8월 4일 발행</p>
        
          {/* #7 map */}
          
          {

            // 어레이 1,2,3은 한계가 있음 실제 블로그 갯수만큼 생성하려면? state
            
            글제목.map(function(a , i ){
            // [1,2,3].map(function(){

              return (
                <div className="list" key ={i}>
                  {/* 다 같이 올라감 */}
                  {/* <h4>{a} <span onClick={ () => { 좋아요변경(좋아요+1)}}>👍</span> {좋아요}</h4> */}
                  <h4>{a} <span onClick={ () => { 좋아요변경(좋아요+1)}}>👍</span> {좋아요}</h4>
                  
                  {/* 글제목[i] 가능 */}
                  <p>8월 4일 발행</p>
                  
                </div>)      
           })

          //  map()함수
          // 왼쪽 array 자료 만큼 내부코드 실행해줌
          //  retunrn 오른쪽에 있는걸 array 담아줌
          //  유용한 파라미터 2개 사용가능
      

         }


        
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




        {/* #6 state가 true면 보여주세요~ */}
            

          {
            /* 삼항연산자 */
            // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
            // html중간에 조건문 쓰렴면 삼항연산자써야함
            // 1 == 1 ? '아님' : '아님'

            // modal == '열림' ? <Modal></Modal> : null

            // modal == '열림' ? <Modal></Modal> : '아님'
            // null은 비어있는 html용으로 자주사용

            // 부모 > 자식 state 전송하는법
            modal == '열림' ? <Modal 작명={state이름}/> : null
          }

       
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

// 어쩔때 component로 쓰면 좋은가
//  1.반복적인 html 축약할 때
//  2.큰 페이지들
//  3. 자주 변경되는 것들

// 단점 : state 가져다 쓸 때 문제생김





function Modal(){
  return(

    <div className="modal">
    <h4>{글제목[0]}</h4>
    <p>날씨</p>
    <p>상세내용</p>
    </div>  
  )

}

// #8 prps
// 모달창 안에 첫 째 글제목을 넣어보자
// 모든 변수는 함수 탈출 불가!
// function 함수 (){
//   let a = 10;
// }
// 글제목은 <app> 컴포넌트에 있음
// 그래서 a 실행 불가능
// <app>은 부모 <Modal>은 자식 컴포넌트임
// 부모에서 자식으로 state 전송 가능
//  전송할때는 props 문법 사용해야함
// 글제목 state 을 정송해보자
// 부모 > 자식 state 전송하는법
// <자식컴포넌트 작명={state이름}> 
 export default App;
