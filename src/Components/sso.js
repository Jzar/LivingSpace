import React from 'react';
import { Typography, 
    Button,
    TextField } from '@material-ui/core';
import {Link} from "react-router-dom";

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
                <Button component={Link} to={"/create-profile"}
                >Login with Single Sign On (SSO)</Button>
                </div>

            </div>
        )
    }
}