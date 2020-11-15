import React from 'react';
import 'react-svg-radar-chart/build/css/index.css'
import RadarChart from 'react-svg-radar-chart';
import {Card, CardContent,  Typography, Avatar,IconButton} from "@material-ui/core"
import {Wc, LocationOn, AttachMoney, School} from "@material-ui/icons"
import user1 from "../resources/user4.jpg";
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
            cleanliness: 0.4,
            noisiness: 0.5,
            social: 0.3,
            academic: 0.9,
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

export default function ProfileCard3() {

  return (
    <div className="profile-card-container">
        <Card>  
            <div className="card-header">
                <div className="avatar-name-container">
                    <Avatar aria-label="main-match" style={avatar_large} src = {user1} />              
                    <h2 className="profile-name">Miles Morales</h2>
                </div>

                <div className="RCI-container">
                    <Avatar id="avatar3" aria-label="recipe" className={avatar_large}>
                        33%
                    </Avatar>
                </div>                    
                
            </div>
            <CardContent>
                <div className="bullet-list-container" style={{display: "flex", justifyContent: "space-between"}}>
                    <div  className ="icons-container" style={{width: "10%", height:"100%"}}>
                        <Wc className="gender-icon-container" color= "primary"/> 
                        <LocationOn className="location-icon-container" color= "primary"/> 
                        <AttachMoney className="money-icon-container" color= "primary"/> 
                        <School className="school-icon-container" color= "primary"/> 
                    </div>
                    <div className="all-text-container" style={{width:"60%", height:"100%"}}> 
                        <div>
                            <Typography className="gender-text-container"> <span style={{fontWeight:"bold"}}>Male | 18</span></Typography>
                            <Typography className="location-text-container"> <span style={{fontWeight:"bold"}}>Westdale South</span></Typography> 
                            <Typography className="budget-text-container"> <span style={{fontWeight:"bold"}}>$500-$550</span> </Typography>
                            <Typography className="location-text-container"> <span style={{fontWeight:"bold"}}>ENGINEER I</span></Typography> 
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