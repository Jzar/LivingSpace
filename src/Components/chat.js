import React, {Component} from "react";
import {GiftedChat} from 'react-web-gifted-chat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import {
    Link
  } from "react-router-dom";

import './Chat.css';


class CustomChat extends Component{

    constructor(props) {
        super()
        this.state = {
          messages: props.messages,
          link: props.link,
          name: props.name
        }
        this.onSend = this.onSend.bind(this)
      }
    
      renderLoading() {
        return (<div>Loading...</div>)
      }
    
      onSend(messages) {
        for(let message of messages){
          this.setState({messages: [message,...this.state.messages]})
        }
      }


    render(){return(
        <div style={styles.container}>
            <div style={styles.chat}>
            <div >
                <div style={styles.leftDiv}>
                <IconButton component={Link} to={this.state.link} style={{float: 'left', width: "75%", height: 75}}>
                <ArrowBackIcon fontSize="large"/>
                </IconButton>
                </div>
                <h1>{this.state.name}</h1>
                <hr>
                </hr>
            </div>
            <GiftedChat user={{id: 1,}}
                        messages={this.state.messages}
                        onSend={this.onSend}/>           
            </div>
        </div>
        );
    }
}
const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    },
    chat: {
      display: "flex",
      flex: 3,
      flexDirection: "column",
      borderWidth: "1px",
      borderColor: "#ccc",
      borderRightStyle: "solid",
      borderLeftStyle: "solid",
    },
    leftDiv:
    {
        width: '10%',
        float: 'left'
    },
    rightDiv:
    {
        width: '70%',
        float: 'left',
    }	
  }
  
export default CustomChat;
