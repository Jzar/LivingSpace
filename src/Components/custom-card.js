import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea } from '@material-ui/core/';
import Avatar from "@material-ui/core/Avatar";


import {
    Link
  } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import '../App.css';

function getProfilePic(name){
    name = name.split(",")[0];
    switch(name.split(" ")[0]){
        case "Michael":
            return("https://i.imgur.com/QLjtUAm.jpg");
        case "Sarah":
            return("https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg")
        case "Giacomo":
            return("https://images.pexels.com/photos/3799291/pexels-photo-3799291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
        case "Bilal":
            return("https://images.pexels.com/photos/4031823/pexels-photo-4031823.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
        case "Ahmed":
            return("https://images.pexels.com/photos/4861354/pexels-photo-4861354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        default:
            return("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
    }
}


function CustomCard(props){
    return (
            <div key={props.id}>
                <Card style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: 5 }}>
                  <CardActionArea component={Link} to={props.link}>
                    <CardContent >
                    <div className="leftDiv">
                        <Avatar alt="Headshot" id="my-profile-pic" src={getProfilePic(props.name)}>{props.name}</Avatar>
                    </div>
                    <div className="rightDiv">
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.content}
                        </Typography>
                    </div>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
        );
    }

export default CustomCard;