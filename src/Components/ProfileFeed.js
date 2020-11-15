import React from 'react';
import "./ProfileFeed.css";
import 'react-svg-radar-chart/build/css/index.css'

import {Card, Dialog, List, ListItem, ListItemIcon, ListItemText, CardHeader, CardContent,  Typography, Avatar,IconButton} from "@material-ui/core"

import ProfileCard from './profile-card'
import ProfileCard1 from './profile-card1'
import ProfileCard2 from './profile-card2'
import ProfileCard3 from './profile-card3'




const character_data = [
    {
        data: {
            cleanliness: 0.8,
            noisiness: 0.8,
            social: 0.74,
            academic: 0.65,
            pandemic_precautions: 0.8

        },
        meta : {color: "blue"}
    },
    {
        data: {
            cleanliness: 0.8,
            noisiness: 0.45,
            social: 0.54,
            academic: 0.65,
            pandemic_precautions: 0.45

        },
        meta : {color: "yellow"}
    }
];

const captions = {
            cleanliness: 'Cleanliness',
            noisiness: 'Noise',
            social: 'Social',
            academic: 'Academic',
            pandemic_precautions: 'Covid'
};

function switchto(){

   
    return(
        <Dialog open="true">
            

        </Dialog>
    );
}

function switchback(){
    var x = document.getElementById("sub-view");
    if (x.style.display === "block"){
        x.style.display = "none";
    } 
}


const avatar_large = { height: '8vh', width: '8vh'}
const avatar_larger = { height: '9vh', width: '9vh'}

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
             </div>
            
        );
      }
};

export default ProfileFeed;

