import React from 'react';

const TestBMI = (props) => {

    const handleChange = (event) => {
        props.onTempChange(event.target.value);
    }

    const handleChange2 = (event) => {
        props.onTempChange(event.target.value);
    }

    return (
        <div>
            <fieldset>
                <legend>키와 몸무게를 입력해주세요</legend>
                <input value={props.k} onChange={handleChange}/>
                <input value={props.w} onChange={handleChange2}/>
            </fieldset>
        </div>
    );
};

export default TestBMI;