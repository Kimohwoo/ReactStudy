import React, { useEffect, useState } from 'react';

const UserStatus = props => {

    //온라인 여부를 상태로 확인하는 작업
    const [isOnline, setIsOnline] = useState(null);

    const handleStatusChange = (status) => {
        setIsOnline(status, isOnline);
    }
 
    const exFunc = () => {
        // ServerAPI.subscribeUserStatus(props.id, handleStatusChange);
        return () => {
            // ServerAPI.unsubscribeUserStatus(props.id, handleStatusChange);
        }
    }

    useEffect(
        handleStatusChange
    )

    if(isOnline === null){
        return '대기중...';
    }
    return isOnline? '온라인' : '오프라인';

};

export default UserStatus;