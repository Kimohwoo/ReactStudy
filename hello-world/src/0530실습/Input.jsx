import React, { useState } from 'react';

const Input = (props) => {

    const[names, setNames] = useState([
        {id:1, text: "이상용1"},
        {id:2, text: "이상용2"},
        {id:3, text: "이상용3"}
    ]);
    const[massage, setMassage] = useState([
        {id:1, text: "메시지1"},
        {id:2, text: "메시지2"},
        {id:3, text: "메시지3"}
    ]);

    const[inputText, setInputTest] = useState('');
    const[inputText2, setInputTest2] = useState('');
    const[nextId, setNextId] = useState(4);

    const onChange = e => {
        setInputTest(e.target.value);
    }

    const onChange2 = e => {
        setInputTest2(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        const nextMassage = massage.concat({
            id: nextId,
            text: inputText2
        })
        setNextId(nextId+1);
        setNames(nextNames);
        setMassage(nextMassage);
        setInputTest('');
        setInputTest2('');
    }

    // const nameList = names.map(names => <li key={names.id}>{names.text}</li>);
    // const massageList = massage.map(massage => <li key={massage.id}>{massage.text}</li>);
    const combinedArray = [...names, ...massage];
    const combinedList = combinedArray.map(item => <li key={item.id}>{item.text}</li>);
    
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <input value={inputText2} onChange={onChange2}/>
            <button onClick={onClick}>추가하기</button>
            <ul>
                {combinedList}
            </ul>
            
        </>
    );
};

export default Input;