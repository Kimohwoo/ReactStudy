import React ,{ useState } from 'react';

const NameForm = (props) => {

    const [value, setValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectValue, setSelectValue] = useState('닭칼국수');

    const handleChange = (event) => {
        // setValue(event.target.value);
        // setTextAreaValue(event.target.value);
        setSelectValue(event.target.value);
        console.log('선택한 점심메뉴: ' + selectValue);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름은: ' + value);
        alert('선택한 점심메뉴: ' + selectValue);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type='text' value={value} onChange={handleChange} />
                <br/>
                점심메뉴 고르기 
                <select multiple={true} type='text' value={['food1', 'food3']} onChange={handleChange}>
                    <option value="food1">돼지국밥</option>
                    <option value="food2" selected>닭칼국수</option>
                    <option value="food3">두루치기</option>
                    <option value="food4">닭야채볶음밥</option>
                    <option value="food5">삼선우동</option>
                </select>
                <br/>
                <br/>
                <br/>
                메세지:
                <textarea cols={10} value={textAreaValue}  onChange={handleChange}/>
            </label>
            <button type='submit'>제출</button>
        </form>
    );
};

export default NameForm;