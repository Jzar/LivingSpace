import React from 'react';
import { Typography, 
    Button,
    TextField } from '@material-ui/core';

export default class SSO extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showSSO: false,
            showPW: false,
        }
    }

    
    render(){
        var ssodisp = "none"
        var pwdisp = "none"
        if(this.state.showSSO){
            ssodisp = "block"
        }
        if(this.state.showPW){
            pwdisp = "block"
        }

        return(
            <div id="mobile-view-container">
                <div>
                <Typography>Welcome to Livingspace!</Typography>
                <br/>
                <Button
                onClick={(event) => this.setState({showSSO: false, showPW: true})}
                >Log in</Button>
                <br/>
                <Button
                onClick={(event) => this.setState({showSSO: true, showPW: false})}
                >Register with Single Sign On (SSO)</Button>
                </div>

                <div style={{display: ssodisp}}>
                <TextField
                label="McMaster ID"
                    />
                <br/>
                <Button>Continue</Button>
                </div>

                <div style={{display: pwdisp}}>
                <TextField
                label="McMaster ID"
                    />
                <br/>
                <TextField
                label="Password"
                    />
                <br/>
                <Button>Continue</Button>
                </div>
            </div>
        )
    }
}