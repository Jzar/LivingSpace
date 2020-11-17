import React from 'react';
import { Typography, 
    Button,
    TextField } from '@material-ui/core';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper'
import './sso.css';

export default class SSO extends React.Component {

    
    render(){

        return(
            <div id="mobile-view-container" class="primarybg">
                <br/>
                <br/>
                <br/>
                <Paper id="pDiv"  elevation={0}>
                    <br/>
                    <Typography variant="h3">Livingspace</Typography>
                    <Typography>McMaster Roommate Finder</Typography>
                <br/>
                </Paper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Paper id="pDiv"  elevation={0}>
                <TextField
                label="McMaster ID"
                id="mid"
                    />
                <br/>
                <Button component={Link} to={"/create-profile"}
                variant="contained"
                color="primary"
                id="ssobtn"
                >Login with Single Sign On (SSO)</Button>
                </Paper>

            </div>
        )
    }
}