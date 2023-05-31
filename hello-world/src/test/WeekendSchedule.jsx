import React from 'react';

const WeekendSchedule = props => {
    return (
        <div>
            {`토요일 : ${props.schedule}`}
        </div>
    );
};

export default WeekendSchedule;