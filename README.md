# React
React를 


npx create-react-app 프로젝트명 :   입력

npx : 라이브러리 설치 도와주는 명령어

create-react-app : react 셋팅 다된 boilerplate 만들기 쉽게 도와주는 라이브러리

npm start : 뉴 터미널에서 코드 미리보기 띄우기

---

App.js: 메인페이지에 들어갈 html 짜는 곳

index.html : 실제 메인페이지

node_modules : 라이브러리 모은 폴더

public : static 파일 보관함 (웹사이트 이미지 같은것)

src : 소스코드 보관함 (코드 짜는 곳)

package.json : 설치한 라이브러리 목록

---


<JSX 문법>

1.태그에 class를 주고 싶으면 

<div class=”클래스명”>   :X

<div className=”클래스명”> : O

<JSX 사용법>

1. 리액트에서 데이터 바인딩 쉽게할수 있게 도와주와주는 라이브러리
    
    src,id,href 등의 속성에도 {변수명,함수 등} 가능 
    

 2.  JSX에서 style 속성 집어넣을 때

<div style = { { color : ‘blue’ } } >

style = { object 자료형으로 만든 스타일}

font-size 는 FontSize로 camelCase 로 해야함

변수에 할당되어서 하는것도 가능
