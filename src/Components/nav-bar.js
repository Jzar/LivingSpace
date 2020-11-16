import React from "react";

import ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline';

import PageviewIcon from '@material-ui/icons/Pageview';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


import {
    Link,
  } from "react-router-dom";


import IconButton from '@material-ui/core/IconButton';
 
 function NavBar(props){

    function getChatIcon(url){

        return(
            <ChatBubbleOutlineIcon fontSize="large"/>

        );
    }

    function getSearchIcon(url){
        switch(url){
            case "/profile-feed":
                return(
                    <PageviewIcon fontSize="large"/>
                );
            default:
                return(
                    <PageviewOutlinedIcon fontSize="large"/>

                );
        }
    }


    function getProfileIcon(url){
        switch(url){
            case "/user-settings":
                return(
                    <AccountCircleIcon fontSize="large"/>
                );
            default:
                return(
                    <AccountCircleOutlinedIcon fontSize="large"/>

                );
        }
    }
    return (
    <div id="navBarComponentContainer">
        <div id="navContainer">
            <div>
                <IconButton component={Link} to={"/chat"} >
                    {getChatIcon(props.url)}
                </IconButton>
            </div>
            <div>
                <IconButton component={Link} to={"/profile-feed"} >
                    {getSearchIcon(props.url)}
                </IconButton>
            </div>     
            <div >
                <IconButton component={Link} to={"/user-settings"} >
                    {getProfileIcon(props.url)}
                </IconButton>
            </div>     
        </div> 
    </div>
        
        );
    }

export default NavBar;

