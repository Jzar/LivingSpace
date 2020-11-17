import React from 'react';
import 'react-svg-radar-chart/build/css/index.css'
import RadarChart from 'react-svg-radar-chart';
import {Card, CardContent,  Typography, Avatar,IconButton} from "@material-ui/core"
import {Wc, LocationOn, AttachMoney, School} from "@material-ui/icons"
import user1 from "../resources/user3.jpg";
import ChatIcon from '@material-ui/icons/Chat';

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
            cleanliness: 0.2,
            noisiness: 0.2,
            social: 0.9,
            academic: 0.6,
            pandemic_precautions: 0.2

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

const avatar_large = { height: '8vh', width: '8vh'}

export default function ProfileCard2() {

  return (
    <div className="profile-card-container">
        <Card>  
            <div className="card-header">
                <div className="avatar-name-container">
                    <Avatar aria-label="main-match" style={avatar_large} src = {user1} />              
                    <h2 className="profile-name">Joshua Miller</h2>
                </div>

                <div className="RCI-container">
                    <Avatar id="avatar2" aria-label="recipe" className={avatar_large}>
                        55%
                    </Avatar>
                </div>                    
                
            </div>
            <CardContent>
            <div className="bullet-list-container" style={{display: "flex", justifyContent: "space-between"}}>
                    <div  className ="icons-container" style={{width: "60%", height:"100%"}}>
                        <div className="account-attribute-container">
                            <Wc className="gender-icon-container" color= "primary"/> 
                            <span style={{fontWeight:"bold"}}>Male | 22 </span>
                        </div>
                        <div className="account-attribute-container">
                            <LocationOn className="location-icon-container" color= "primary"/> 
                            <span style={{fontWeight:"bold"}}>Ainslie Wood East, Ainslie Wood South, Ainslie Wood</span>
                        </div>
                        <div className="account-attribute-container">
                            <AttachMoney className="money-icon-container" color= "primary"/>
                            <span style={{fontWeight:"bold"}}>$700</span>
                        </div>
                        <div className="account-attribute-container">
                            <School className="school-icon-container" color= "primary"/> 
                            <span style={{fontWeight:"bold"}}>COMMERCE IV</span>
                        </div>
                    </div>
                    <div className ="percentage-preview-container" >
                        <RadarChart
                            captions={captions}
                            data={character_data}
                            size={120}
                        />   
                    </div>
                        
                </div>

                <div className="chat-button-container">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                </div>
            
            </CardContent>
        
        </Card>
    </div>
    
  );
}