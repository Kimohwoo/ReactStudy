import React from 'react';
import TestContext1 from './TestContext1';
import TestContext2 from './TestContext2';
import TestUser from './TestUser';

const Main = () => {
    return (
        <TestContext1.Provider value= "30">
            <TestContext2 value="이상용">
                <div>
                    <TestUser></TestUser>
                </div>
            </TestContext2>
        </TestContext1.Provider>
    );
};

export default Main;