import React from "react";

import  ChatBubbleIcon   from '@material-ui/icons/ChatBubble';
import ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline';

import ForumIcon  from '@material-ui/icons/Forum';
import ForumOutlineIcon from '@material-ui/icons/ForumOutlined'

import {
    Link
  } from "react-router-dom";


import IconButton from '@material-ui/core/IconButton';
 
 function ChatNav(props){

    function getChatIcon(){
        if(props.url === "chat"){
            return(
                <ChatBubbleIcon fontSize="large"/>
            );
        }
        else if(props.url === "group"){
            return(
                <ChatBubbleOutlineIcon fontSize="large"/>
            );
        }
    }

    function getForumIcon(){
        if(props.url ==="chat"){
            return(
                <ForumOutlineIcon fontSize="large"/>
            );
        }
        else if(props.url ==="group"){
            return(
                <ForumIcon fontSize="large"/>
            );
        }
    }
    function getChatStyle(){
        if(props.url === "group"){
            return(
                {
                    width: '50%',
                    float: 'left',
                    background: 'white',
                    borderColor: 'gray',
                    boxSizing: 'border-box',
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: 5 
                }
            );
        }
        else if(props.url === "chat"){
            return(
                {
                    width: '50%',
                    float: 'left',
                }	
            );
        }
    }

    function getForumStyle(){
        if(props.url === "group"){
            return(
                {
                    width: '50%',
                    float: 'right',
                }
            );
        }
        else if(props.url === "chat"){
            return(
                {
                    width: '50%',
                    float: 'right',
                    background: 'white',
                    borderColor: 'gray',
                    boxSizing: 'border-box',
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: 5 
                }	
            );
        }
    }

    return (
        <div >
            <div style={getChatStyle()}>
                <IconButton component={Link} to={"/chat"} style={{float: 'center', width: "75%", height: 75}}>
                    {getChatIcon()}
                </IconButton>
            </div>
            <div style={getForumStyle()}>
                <IconButton component={Link} to={"/group"} style={{float: 'center', width: "75%", height: 75}}>
                    {getForumIcon(props.type)}
                </IconButton>
            </div>     
        </div> 
        );
    }
export default ChatNav;

