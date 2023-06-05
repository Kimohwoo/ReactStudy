// import React, { useEffect, useState} from 'react';
import useUserStatus from './useUserStatus';

const UserStatus = (props) => {

    const isOnline = useUserStatus(10);

    if(isOnline ===null){
        return '대기중...';
    } 
    return isOnline? '온라인' : '오프라인';

};

export default UserStatus;