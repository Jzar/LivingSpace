import React from 'react';
import { Typography, 
    Button,
    TextField } from '@material-ui/core';

export default class SSO extends React.Component {

    
    render(){

        return(
            <div id="mobile-view-container">
                <div>
                <Typography>Welcome to Livingspace!</Typography>
                <br/>
                <TextField
                label="McMaster ID"
                    />
                <br/>
                <Button
                >Login with Single Sign On (SSO)</Button>
                </div>

            </div>
        )
    }
}