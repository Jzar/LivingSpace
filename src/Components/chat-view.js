import React, {Component} from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import CustomChat from "./chat";
import CustomCard from './custom-card';
import ChatNav from './chat-nav';
import NavBar from './nav-bar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const loremIpsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum';


const messages = [];

messages.push(generateMessage(`You've got to be kidding me`, 2));
messages.push(generateMessage(`Is this in the budget?`, 3,  {image:'https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg'}));
messages.push(generateMessage(`My budget is $500 a month

what do you think about that? What's yours`, 2, ));
messages.push(generateMessage(`I saw we had a similar Roomate compatibility index, would you want to look for a place together?`, 2));

messages.push(generateMessage(`Hi! I'm Michael, how's it going?`, 2));


messages.push(generateMessage('You both have started a chat', 2, {system: true}));


const group_messages = [
  {
    id: Math.round(Math.random() * 1000000),
    text: "Hi everyone, nice to meet you all!",
    createdAt: new Date(),
    user: {
      id:3,
      name: "Giacomo"
    }
  },
  {
    id: Math.round(Math.random() * 1000000),
    text: "Have you guys decided on a place you want to look at yet?",
    createdAt: new Date(),
    user: {
      id: 10,
      name: "Bilal"
    }
  },
  {
    id: Math.round(Math.random() * 1000000),
    text: "I was thinking 400 Wheatley Road, what do you think?",
    createdAt: new Date(),
    user: {
      id: 4,
      name: "Connor"
    },
  },
  {
    id: Math.round(Math.random() * 1000000),
    text: "Wheatley seems cool, here's a pic",
    createdAt: new Date(),
    user: {
      id: 3,
      name: "Giacomo"
    },
    image: 'https://photos.zolo.ca/495-upper-wentworth-street-hamilton-H4088865-1-p.jpg?2020-09-23+06%3A45%3A17'
  }
].reverse();

function generateMessage(text, index, additionalData) {
  return {
    id: Math.round(Math.random() * 1000000),
    text: text,
    createdAt: new Date(),
    user: {
      id: index % 3 === 0 ? 1 : 2,
      name: 'Michael Moore',
    },
    ...additionalData,
  }
}

class ChatView extends Component {
  constructor() {
    super()
    this.state = {
      messages: messages
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


  render() {
    return (
      <Switch>
         <div id="mobile-view-container">
        <Route exact path="/chat">

         
          <div>
                <IconButton component={Link} to={"/profile-feed"} style={{float: 'left', width: "10%", height: 20}}>
                <ArrowBackIcon fontSize="large"/>
                </IconButton>
            <h1>Chats</h1>

            </div>
          <hr/>
            <div id="chat-component">
              <div id="cards-component">
                  <CustomCard 
                    link={"/1"} 
                    name={messages[0].user.name} 
                    content={messages[0].text}>  
                  </CustomCard>
                  <CustomCard 
                    link={"/2"} 
                    name={"Sarah"} 
                    content={"Are you still looking?"}>  
                  </CustomCard>
                  <CustomCard 
                    link={"/3"} 
                    name={"Giacomo"} 
                    content={"Hi, are you still looking for groups?"}>  
                  </CustomCard>
                </div>
                <div id="ChatBarComponent">
                  <ChatNav url="chat"/>
                </div>
            </div>
          
        </Route>
        <Route exact path="/group">
        <div>
        <IconButton component={Link} to={"/profile-feed"} style={{float: 'left', width: "10%", height: 20}}>
                <ArrowBackIcon fontSize="large"/>
                </IconButton>
            <h1>Groups</h1>
            <ul>
            </ul>
            </div>
          <hr/>
          <div id="chat-component">
          <div className="cards-component">
          <CustomCard 
            link={"/g1"} 
            name={"Bilal, Brian, Connor, Giacomo"} 
            content={"Bilal: Who's got to take the garbage out this week?"}>  
          </CustomCard>
          <CustomCard 
            link={"/3"} 
            name={"Bilal, Eoin, Mohammed"} 
            content={"Mohammed: How's it going Bali?"}>  
          </CustomCard>
          <CustomCard 
            link={""} 
            name={"Ahmed, Anthony, Gary, Ryan"} 
            content={"Gary: When is the next viewing?"}>  
          </CustomCard>
          </div>
          
          <div id="ChatBarComponent">
            <ChatNav url="group"/>
          </div>
          </div>
          
        </Route>
        <Route exact path="/1">
          <CustomChat messages={messages} link={"/chat"} name={this.state.messages[0].user.name}/>
        </Route>
        <Route exact path="/g1">
          <CustomChat messages={group_messages.reverse()} link={"/chat"} name={"Bilal, Brian, Giacomo, Connor"}/>
        </Route>
        <Route exact path="/profile-feed">
          <NavBar url="/search"/>
        </Route>
        <Route exact path="/profile">
          <NavBar url="/profile"/>
        </Route>
        </div>
      </Switch>
    );
  }
}


export default ChatView;


