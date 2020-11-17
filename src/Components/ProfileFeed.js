import React from 'react';
import "./ProfileFeed.css";
import NavBar from "./nav-bar";
import 'react-svg-radar-chart/build/css/index.css'

import ProfileCard from './profile-card'
import ProfileCard1 from './profile-card1'
import ProfileCard2 from './profile-card2'
import ProfileCard3 from './profile-card3'



class ProfileFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {expanded: true};
      }

      handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
      };
      
      render() {
      

        return(
       
            <div id="mobile-view-container">
                <div className= "feed-contatiner">
                
                    <div id="all-cards">
                        <ProfileCard />
                        <ProfileCard1/>
                        <ProfileCard2/>
                        <ProfileCard3/>

                    </div>
                
                </div>
                <br/>
                <br/>
                <br/>
                <div id="bottombar">
                    <NavBar url="/profile-feed"/>
                </div>

             </div>
            
        );
      }
};

export default ProfileFeed;

