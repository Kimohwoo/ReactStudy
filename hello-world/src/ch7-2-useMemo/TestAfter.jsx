import React, {useMemo, useState} from 'react';

//useMemo를 이용, 오래 걸리는 연산 값은 한번 수행 후 메모, 재사용
const TestAfter = () => {
  
    const[imNum, setImNum] = useState(0);
    const[count, setCount] = useState(0);

    const increase = () => {
        console.log("click 추가 버튼");
        setCount(count+1);
    }

    const calcConValue = useMemo(
        () => {
        console.log("복잡한 계산 중....");
        return(imNum+3*7*99999*9999999)/.0123456;
        }, [imNum]
    )

    return(
        <div className="App">
            <p>count: {count}</p>
            <button onClick={increase}>
                +1추가
            </button>
            <p>복잡한 연산 결과값 : {calcConValue}</p>
        </div>
    )

    
};
export default TestAfter;