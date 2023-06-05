//테스트 간단히 데이터 추가 및 삭제 연습
//내장 함수의 응용 예제
//useState 활용 및 연습하기

import React, { useState } from 'react';

//함수형 컴포넌트라서, 클래스형 컴포넌트 처럼 상속, 생성자, 슈퍼라는 부분이 없음
//클래스형에서만 생명주기 관련 함수가 있었는데,
//16.8버전 이후로 부터는 hooks 라는 개념이 도입이 되어서, 클래스에서 할수없었던 작업을
//함수형 컴포넌트에서도 가능함 -> 주로 함수형 컴포넌트로 작업을 많이 함.
//hooks 이후로는 거의 함수형으로만 연습을 할 예정
const TestSample = (props) => {
    //비구조화 할당 방식으로, useState가 함수가 실행후, 반환 값은
    //1) 변수값 2) 세터 함수 반환
    //반환형식은 배열 형식[1),2)]
    //names 배열이 들어가 있음. 더미데이터 3개
    const [names, setNames] = useState([
        {id:1, text: "이상용1"},
        {id:2, text: "이상용2"},
        {id:3, text: "이상용3"},
        {id:4, text: "이상용4"}
    ]);

    //inputText 입력란 의미, 초기값 공백, 여기에 세터 함수도 현재 공백 할당.
    const [inputText, setInputTest] = useState('');
    //nextId 더미 데이터의 아이디가 현재 4번까지 되어있고, 추가 데이터부터 아이디가 5를 추가
    const [nextId, setNextId] = useState(5);

    //입력창에 값이 변경시, 콘솔상에 변경사항 확인해보기
    const onChange = e => {
        setInputTest(e.target.value);
    }
    console.log(inputText);

    //추가 부분
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId+1);
        setNames(nextNames);
        setInputTest('');
    };

    //추가부분2: 데이터삭제. 더블 클릭시
    //id: 1~4까지 있으면 3만 제외하고 다시 배열 생성
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    }


    //수행의 결과는 li라는 태그에 요소로 넣고 있음
    const nameList = names.map(names => <li key={names.id} onDoubleClick={(onRemove)} >{names.text}</li>);
    
    return (
        <>
        {/* 실제로 화면을 그리면서 위에서 작업한 변수 및 함수를 적용하기
            단점, 메모리 상에서 작업, 새로 그리게 되면 값이 초기화 됨 */}

          <input value={inputText} onChange={onChange}/>
          <button onClick={onClick}>추가</button>
          <ul>{nameList}</ul>
        </>
    );
};

export default TestSample;