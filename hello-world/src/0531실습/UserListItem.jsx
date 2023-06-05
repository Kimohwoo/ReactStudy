import React, { useEffect, useState } from 'react';
import useUserStatus from './useUserStatus';

const userList = [
    {id: 1, name: 'Mike'}
]

const UserListItem = props => {

    const[userId, setUserId] = useState(1)
    const isOnline = useUserStatus(userId);

    return (
        <div>
            <li style={{color: isOnline? 'green' : 'black'}} onChange={event => setUserId(Number(event.target.value))} >
                {userList.name}
            </li>
        </div>
    );
};

export default UserListItem;