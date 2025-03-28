// Libraries
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper'
import NavBar from "./nav-bar";
import {Link} from "react-router-dom";
import 'react-svg-radar-chart/build/css/index.css'
import RadarChart from 'react-svg-radar-chart';


// Icons and Images
import './user-settings.css';
import myProfilePic from './../resources/my-user-profile.png';
import AndroidPhone from '@material-ui/icons/PhoneAndroid';
import MailOutline from '@material-ui/icons/MailOutline';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { Typography } from '@material-ui/core';


export default class UserSettings extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            ainslie_wood: true,
            ainslie_wood_north: false,
            ainslie_wood_east: false,
            westdale: true,
            westdale_north: true,
            westdale_south: false,
            university_gardens: false,
            editPI: true,
            editLP: true,
            selected: 0
        }

        this.changePI = this.changePI.bind(this);
        this.changeLP = this.changeLP.bind(this);
    }

    changePI(){
        this.setState({
            editPI: !this.state.editPI
        })
    }

    changeLP(){
        this.setState({
            editLP: !this.state.editLP
        })
    }

    handleChange = (event) => {
        switch (event.target.name) {
            case 'ainslie_wood':
                if (!this.state.ainslie_wood) {
                    this.setState({
                        ainslie_wood: !this.state.ainslie_wood,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        ainslie_wood: !this.state.ainslie_wood,
                        selected: this.state.selected - 1
                    });
                }
                break;
                
            case 'ainslie_wood_north':
                if (!this.state.ainslie_wood_north) {
                    this.setState({
                        ainslie_wood_north: !this.state.ainslie_wood_north,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        ainslie_wood_north: !this.state.ainslie_wood_north,
                        selected: this.state.selected - 1
                    });
                }
                break;

            case 'ainslie_wood_east':

                if (!this.state.ainslie_wood_east) {
                    this.setState({
                        ainslie_wood_east: !this.state.ainslie_wood_east,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        ainslie_wood_east: !this.state.ainslie_wood_east,
                        selected: this.state.selected - 1
                    });
                }
                break;

            case 'university_gardens':
                if (!this.state.university_gardens) {
                    this.setState({
                        university_gardens: !this.state.university_gardens,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        university_gardens: !this.state.university_gardens,
                        selected: this.state.selected - 1
                    });
                }
                break;

            case 'westdale':
                if (!this.state.westdale) {
                    this.setState({
                        westdale: !this.state.westdale,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        westdale: !this.state.westdale,
                        selected: this.state.selected - 1
                    });
                }
                break;

            case 'westdale_north':
                if (!this.state.westdale_north) {
                    this.setState({
                        westdale_north: !this.state.westdale_north,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        westdale_north: !this.state.westdale_north,
                        selected: this.state.selected - 1
                    });
                }
                break;
                
            case 'westdale_south':
                if (!this.state.westdale_south) {
                    this.setState({
                        westdale_south: !this.state.westdale_south,
                        selected: this.state.selected + 1
                    });
                } else {
                    this.setState({
                        westdale_south: !this.state.westdale_south,
                        selected: this.state.selected - 1
                    });
                }
                break;

            default:
                break;
        }
    };

    render(){

        var PIread = this.state.editPI;
        var PItxt = "Edit Personal Info"
        if (!PIread){
            PItxt = "Save Changes"
        }

        var LPread = this.state.editLP;
        var LPtxt = "Edit Location Preferences"
        if (!LPread){
            LPtxt = "Save Changes"
        }

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

        return (
            <div id="mobile-view-container" className="secondarybg">
                <Paper id="pDiv">
                    <Typography>Personal Info</Typography>
                    <br/>
                    <Avatar alt="Remy Sharp" src={myProfilePic} id="user-pic" />
                    <Button id="editBtn" color="primary" variant="contained"
                    >Edit Profile Picture</Button>
                    <br/>
                    <br/>

                    <TextField id="name-input" label="Name"
                        defaultValue="Stephanie Liu" variant="outlined"
                        InputProps={{
                            readOnly: PIread,
                        }}
                    />
                    <br/>
                    <br/>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AndroidPhone />
                        </Grid>
                        <Grid item>
                            <TextField id="phone-input" label="Phone #"
                                defaultValue="123456789" variant="outlined"
                                InputProps={{
                                    readOnly: PIread,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <MailOutline />
                        </Grid>
                        <Grid item>
                            <TextField id="email-input" label="Email"
                                defaultValue="lius1@mcmaster.ca" variant="outlined"
                                InputProps={{
                                    readOnly: PIread,
                                }}
                            />
                        </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">                        
                        <Grid item>
                            <CardMembershipIcon />
                        </Grid>
                        <Grid item>
                            <TextField id="degree-input" label="Degree"
                                defaultValue="Psychology III"
                                InputProps={{
                                    readOnly: PIread,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <AssignmentInd />
                        </Grid>
                        <Grid item>
                            <TextField id="student-num-input" label="Student #"
                                defaultValue="400012345"
                                InputProps={{
                                    readOnly: PIread,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained"
                    id="editBtn" onClick={this.changePI}>{PItxt}</Button>
                </Paper>

                <Paper id="pDiv">
                    <Typography>Location Preferences</Typography>
                    <br/>
                    <FormControl variant="outlined">
                        <FormGroup>
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.ainslie_wood} onChange={this.handleChange} name="ainslie_wood" disabled={LPread} />}
                                label="Ainslie Wood"
                            />
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.ainslie_wood_east} onChange={this.handleChange} name="ainslie_wood_east" disabled={LPread} />}
                                label="Ainslie Wood East"
                            />
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.ainslie_wood_north} onChange={this.handleChange} name="ainslie_wood_north" disabled={LPread} />}
                                label="Ainslie Wood North"
                            />
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.university_gardens} onChange={this.handleChange} name="university_gardens" disabled={LPread} />}
                                label="University Gardens"
                            />
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.westdale} onChange={this.handleChange} name="westdale" disabled={LPread} />}
                                label="Westdale"
                            />
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.westdale_north} onChange={this.handleChange} name="westdale_north" disabled={LPread} />}
                                label="Westdale North"
                            />
                            <FormControlLabel className="location-checkbox"
                                control={<Checkbox color="primary" checked={this.state.westdale_south} onChange={this.handleChange} name="westdale_south" disabled={LPread} />}
                                label="Westdale South"
                            />
                        </FormGroup>
                        
                    </FormControl>
                    <Button color="primary" variant="contained"
                    id="editBtn" onClick={this.changeLP}>{LPtxt}</Button>
                </Paper>

                <Paper id="pDiv">
                    <Typography>Roommate Compatability Index</Typography>
                    <br/>
                        <RadarChart
                            captions={captions}
                            data={character_data}
                            size={200}
                        />   

                    <Button color="primary" variant="contained"
                    component={Link} to={"/rc-survey"}
                    id="editBtn">Retake RCI Survey</Button>
                </Paper>
                <br/>
                <br/>
                <br/>
                <div id="bottombar">
                <NavBar url="/user-settings"/>
                </div>
            </div>
        )
    }

}