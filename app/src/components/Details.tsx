import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { AppContext } from "./context";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Details = () => {
    const { id } = useParams();
    const { users } = useContext(AppContext);
    const user = users.find(user => Number(user.id) === Number(id));

    if (!user) {
        return (
            <div>User not found</div>
        )
    }

    const initials = `${user.name[0].toUpperCase()}${user.username[0].toUpperCase()}`;

    return (
        <Card>
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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <div>{user.company.catchPhrase}</div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>{user.email}</div>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" component={Link} to={`/`}>
                    <ArrowBackIosIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
