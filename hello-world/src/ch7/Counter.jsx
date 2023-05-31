import React, { useEffect, useState } from 'react';

const Counter = props => {

    const [count, setCount] = useState(0);
    const effect = () => {
        document.title = `총 ${count}번 클릭했습니다.`
    }

    // useEffect(
    //     effect
    // )

    // useEffect(
    //     effect,
    //     []
    // )

    useEffect(
        effect,
        [count]
    )

    return (
        <div>
            <p>총 : {count}번 클릭</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </div>
    );
};

export default Counter;