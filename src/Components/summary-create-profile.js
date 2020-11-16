import React from 'react';
// import "./ProfileFeed.css";
import "./summary-create-profile.css"
import 'react-svg-radar-chart/build/css/index.css'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

import MyProfileCard from './my-profile-card'

export default class SummaryCreateProfile extends React.Component{
    render() {
      
        return(
       
            <div id="mobile-view-container">
                <div id="summary-create-profile-container" className= "feed-contatiner">
                    
                    <div id="all-cards">
                        <h3>Account Summary</h3>
                        <MyProfileCard />
                    </div>
                    <div className="create-profile-divider-1" >
                        <Divider className='create-profile-divider' />
                        <div className="navigate-next-container">
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ArrowForward></ArrowForward>}
                                href="http://localhost:3000/#/profile-feed"
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
             </div>
            
        );
      }
};