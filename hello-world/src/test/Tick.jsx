import React from 'react';

const Tick = () => {
    return (
        <div>
            {`현재 시간: ${new Date().toLocaleTimeString()}`}
        </div>
    );
};

export default Tick;