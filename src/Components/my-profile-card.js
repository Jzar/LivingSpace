import React from 'react';
import 'react-svg-radar-chart/build/css/index.css'
import RadarChart from 'react-svg-radar-chart';
import "./ProfileFeed.css";
import {Card, CardContent,  Typography, Avatar } from "@material-ui/core"
import {Wc, LocationOn, AttachMoney, School} from "@material-ui/icons"
import user1 from "../resources/my-user-profile.png";

const character_data = [
    {
        data: {
            cleanliness: 0.8,
            noisiness: 0.7,
            social: 0.5,
            academic: 0.5,
            pandemic_precautions: 0.8

        },
        meta : {color: "blue"}
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

export default function MyProfileCard() { 

    return(
        <div className="my-profile-card-container">
            <Card>  
                <div className="card-header">
                    <div className="avatar-name-container">
                        <Avatar aria-label="main-match" style={avatar_large} src = {user1} />              
                        <h2 className="profile-name">Stephanie Liu</h2>
                    </div>

                    {/* <div className="RCI-container">
                        <Avatar id="avatar" aria-label="recipe" className={avatar_large}>
                            86%
                        </Avatar>
                    </div>                     */}
                    
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
                            
                            <Typography className="gender-text-container"> <span style={{fontWeight:"bold"}}>Female | 21 </span></Typography>
                            <Typography className="location-text-container"> <span style={{fontWeight:"bold"}}>Westdale</span></Typography> 
                            <Typography className="budget-text-container"> <span style={{fontWeight:"bold"}}>$500</span> </Typography>
                            <Typography className="location-text-container"> <span style={{fontWeight:"bold"}}>PSYCH III</span></Typography> 
                        </div>
                    <div className ="percentage-preview-container" >
                        <RadarChart
                            captions={captions}
                            data={character_data}
                            size={120}
                        />   
                    </div>
                        
                    </div>

                
                </CardContent>
            
            </Card>
        </div>
    );
    
}