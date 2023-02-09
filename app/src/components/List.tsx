import React, { useContext } from 'react';
import { AppContext } from "./context";
import { ListItem } from './ListItem';

export const List = () => {
    const { users } = useContext(AppContext);

    return (
        <div>
            {users.map((user) => (
                <ListItem key={user.id} user={user} />
            ))}
        </div>
    )
}
