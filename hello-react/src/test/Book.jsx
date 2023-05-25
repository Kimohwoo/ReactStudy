import React from 'react';

// 현재 작업하는 것은 임시로,
// 함수형 컴포넌트를 2개 생성해서 문법으로 간단히
// 구현 하는 작업 -> 자바 헬로우 월드
// 클래스 컴포넌트 형식도 간단히 봐두어야 하고
// 기작업이 클래스 컴포넌트로 작업한게 많아서
//최근에 작업들은 거의 함수형 컴포넌트를 씁니다.
//함수형 컴포넌트만 쓰면 됩니다.
function Book(props) {
  return (
    // jsx 문법이 갑자기 나옴
    <div>
      <h1>{`책 이름: ${props.name} 입니다`}</h1>
      <h2>{`총 페이지: ${props.numOfPage}입니다,`}</h2>
    </div>
  );
}

export default Book;
