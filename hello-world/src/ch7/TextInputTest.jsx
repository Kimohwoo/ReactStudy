import React, { useRef } from 'react';

const TextInputTest = props => {

    const inputElem = useRef(null);
    const onButtonClick = () => {
        //아직 이름표를 안달았음
        //내가 궁금한 태그를 선택 안했음.
        //아래에 인풋태그의 속성을 변경하고 싶다.
        //버튼 눌렀을 때, 해당 인풋에 속성중에서 focus를 사용하고 싶어요
        inputElem.current.focus();
    }

    return (
        <div>
            <>
                <input ref={inputElem} type='text'/>
                <button onClick={onButtonClick}>입력창에 포커스 주기</button>
            </>
        </div>
    );
};

export default TextInputTest;