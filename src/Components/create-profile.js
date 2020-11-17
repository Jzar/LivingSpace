import React from 'react';
import './create-profile.css'
import Avatar from '@material-ui/core/Avatar'
import myProfilePic from './../resources/my-user-profile.png'
import McMaster_Sectors from './../resources/McMaster_Sectors.png'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AndroidPhone from '@material-ui/icons/PhoneAndroid';
import MailOutline from '@material-ui/icons/MailOutline';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import School from '@material-ui/icons/School';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
// import PinchToZoom from 'react-pinch-and-zoom';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom";

export default class CreateProfile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ainslie_wood: false,
            ainslie_wood_north: false,
            ainslie_wood_east: false,
            westdale: false,
            westdale_north: false,
            westdale_south: false,
            university_gardens: false,
            selected: 0
        }
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

    render() {
        return (
            <div id="mobile-view-container">
                <div className="create-profile">
                    <div className="create-profile-container">
                        <Avatar alt="Remy Sharp" src={myProfilePic} id="my-profile-pic" />
                        <TextField id="name-input" label="Name"
                            defaultValue="Stephanie Liu" variant="outlined"
                        />
                        <div className="contact-info-container">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <AndroidPhone color= "primary"/>
                                </Grid>
                                <Grid item>
                                    <TextField id="phone-input" label="Phone #"
                                        defaultValue="123456789" variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <MailOutline color= "primary"/>
                                </Grid>
                                <Grid item>
                                    <TextField id="email-input" label="Email"
                                        defaultValue="lius1@mcmaster.ca" variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="school-info-container">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <School color= "primary"/>
                                </Grid>
                                <Grid item>
                                    <TextField id="degree-input" label="Degree"
                                        defaultValue="Psychology III"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <AssignmentInd color= "primary"/>
                                </Grid>
                                <Grid item>
                                    <TextField id="student-num-input" label="Student #"
                                        defaultValue="400012345"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>

                        </div>
                    </div>
                    <Divider className='create-profile-divider' />
                    <div className="map-container">
                        <FormLabel component="legend">Location Preference</FormLabel>
                        <FormHelperText>Select 3 locations</FormHelperText>
                        <div>
                            <FormControl variant="outlined">
                                <FormGroup>
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.ainslie_wood} onChange={this.handleChange} name="ainslie_wood" />}
                                        label="Ainslie Wood"
                                    />
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.ainslie_wood_east} onChange={this.handleChange} name="ainslie_wood_east" />}
                                        label="Ainslie Wood East"
                                    />
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.ainslie_wood_north} onChange={this.handleChange} name="ainslie_wood_north" />}
                                        label="Ainslie Wood North"
                                    />
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.university_gardens} onChange={this.handleChange} name="university_gardens" />}
                                        label="University Gardens"
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl variant="outlined">
                                <FormGroup>
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.westdale} onChange={this.handleChange} name="westdale" />}
                                        label="Westdale"
                                    />
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.westdale_north} onChange={this.handleChange} name="westdale_north" />}
                                        label="Westdale North"
                                    />
                                    <FormControlLabel className="location-checkbox"
                                        control={<Checkbox color="primary" checked={this.state.westdale_south} onChange={this.handleChange} name="westdale_south" />}
                                        label="Westdale South"
                                    />
                                </FormGroup>
                                
                            </FormControl>
                        </div>
                        {/* <PinchToZoom>
                            <img src={McMaster_Sectors} alt="McMaster Sectors"></img>
                        </PinchToZoom>  */}
                        <img id="mcmaster-sector-img" src={McMaster_Sectors} alt="McMaster Sectors"></img>
                        
                        
                    </div>
                    <Divider className='create-profile-divider' />
                    <div className="navigate-next-container">
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForward></ArrowForward>}
                            disabled={this.state.selected !== 3}
                            component={Link} to={"/rc-survey"}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            
            </div>
            
        );
    }
}
