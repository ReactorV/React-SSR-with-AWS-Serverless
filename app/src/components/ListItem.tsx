import React from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { IUser} from "../App";

interface IProps {
    user: IUser
}
export const ListItem = ({ user }: IProps) => {
    const initials = `${user.name.toUpperCase()}${user.username.toUpperCase()}`

    return (
        <Card component={Link} to={`/user/${user.id}`}>
            <CardHeader
                avatar={
                    <Avatar aria-label={initials} style={{backgroundColor:`rgb(${parseInt(String(Math.random() * 255))},${parseInt(String(Math.random() * 255))},${parseInt(String(Math.random() * 255))})`}}>
                        {initials}
                    </Avatar>
                }
                title={`${user.name} ${user.username}`}
                subheader={user.address?.city}
            />
            <CardMedia
                component="img"
                height="194"
                image={user.website}
                alt="Image"
            />
        </Card>
    );
}
