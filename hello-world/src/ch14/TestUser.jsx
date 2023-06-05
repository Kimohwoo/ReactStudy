import React, { useContext } from 'react';
import TestContext1 from './TestContext1';
import TestContext2 from './TestContext2';

const TestUser = () => {
    const age = useContext(TestContext1)
    const name = useContext(TestContext2)
    console.log("name: ", name)
    console.log("age: ", age)
    return (
        <div>
            <header>
                <p>
                    안녕. {name}님의 나이는 {age}임.
                </p>
            </header>
        </div>
    );
};

export default TestUser;