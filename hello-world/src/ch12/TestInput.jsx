import React, {useState} from 'react';

const snames = {
    c: '섭씨',
    f: '화씨'
}

const TestInput = (props) => {



    const handleChange = (event) => {
        // setTemp(event.target.value);
        props.onTempChange(event.target.value);
    }

    return (
        <div>
            <fieldset>
                <legend>온도를 입력하세요 (단위){snames[props.scale]}</legend>
                <input value={props.temp} onChange={handleChange}/>
            </fieldset>
        </div>
    );
};

export default TestInput;