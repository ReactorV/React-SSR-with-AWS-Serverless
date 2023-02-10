import React, { useContext } from 'react';

import { AppContext } from "./context";
import { ListItem } from './ListItem';
import { Loader } from './Loader';

export type { IUser } from '../App'

export const List = () => {
    const { users } = useContext(AppContext);

    return (
        <div>
            {users ? users.map((user) => (
                <ListItem key={user?.id} user={user} />
            )) : <Loader />}
        </div>
    )
}
