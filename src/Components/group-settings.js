// Libraries
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider'

// Icons and Images
import './group-settings.css';
import myProfilePic from './../resources/my-user-profile.png';
import { Typography } from '@material-ui/core';


export default class GroupSettings extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            editGN: true,
            newChore: false,
        }

        this.changeGN = this.changeGN.bind(this);
        this.changeChore = this.changeChore.bind(this);
    }

    changeGN(){
        this.setState({
            editGN: !this.state.editGN
        })
    }

    changeChore(){
        this.setState({
            newChore: !this.state.newChore
        })
    }

    

    render(){

        var GNread = this.state.editGN;
        var GNtxt = "Edit Group Info"
        if (!GNread){
            GNtxt = "Save Changes"
        }

        var CHread = this.state.newChore;
        var CHtxt = "Add New Chore"
        var CHdisp = "none"
        if (CHread){
            CHtxt = "Add Chore to List"
            CHdisp = "block"
        }

        return (
            <div>
                <div className="secDiv">
                    <Avatar alt="Remy Sharp" src={myProfilePic} id="group-pic" />
                    <br/>
                    <TextField id="name-input" label="Group Name"
                        defaultValue="Cool Pals" variant="outlined"
                        InputProps={{
                            readOnly: GNread,
                        }}
                    />
                    <Button id="editBtn" onClick={this.changeGN}>{GNtxt}</Button>
                </div>

                <div className="secDiv">
                    <Typography>Group Members</Typography>
                    <List dense>
                        <ListItem key="0">
                            <ListItemAvatar>
                                <Avatar>S</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Stephanie Liu" />
                            <ListItemSecondaryAction>
                                <Button>Leave Group</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="1">
                            <ListItemAvatar>
                                <Avatar>A</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Andy Smith" />
                            <ListItemSecondaryAction>
                                <Button>Vote Kick</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="2">
                            <ListItemAvatar>
                                <Avatar>B</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Bob Doe" />
                            <ListItemSecondaryAction>
                                <Button>Vote Kick</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>

                <div className="secDiv">
                    <Typography>Events</Typography>

                    <List dense>
                        <ListItem key="0">
                            <ListItemText primary="3Y03 Midterm" secondary="November 10th 2020"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Event</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="1">
                            <ListItemText primary="House Cleanup" secondary="November 13th 2020"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Event</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="2">
                            <ListItemText primary="Group Study Session" secondary="November 29th 2020"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Event</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>

                    <Button id="editBtn">Add Event</Button>

                </div>

                <div className="secDiv">
                    <Typography>Chores</Typography>
                    <List dense>
                        <ListItem key="0" dense>
                            <ListItemText primary="Clean Upstairs Bathroom"
                            secondary="Andy Smith"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Chore</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="3" dense>
                            <ListItemText primary="Clean Common Room"
                            secondary="Andy Smith"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Chore</Button>
                            </ListItemSecondaryAction>
                        </ListItem> 
                        <ListItem key="1" dense>
                            <ListItemText primary="Clean Kitchen"
                            secondary="Bob Doe"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Chore</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="2" dense>
                            <ListItemText primary="Take out Trash"
                            secondary="Stephanie Liu"/>
                            <ListItemSecondaryAction>
                                <Button>Edit Chore</Button>
                            </ListItemSecondaryAction>
                        </ListItem>                                                                     
                    </List>

                    <div style={{display: `${CHdisp}`}}>
                        <TextField id="chore-input" 
                        label="Chore Name" variant="outlined"/>
                        <br/>
                        <br/>
                        <TextField id="chore-input" 
                        label="Chore Assignee" variant="outlined"/>
                    </div>

                    <Button id="editBtn" onClick={this.changeChore}>{CHtxt}</Button>
                </div>

                <div className="secDiv">
                    <Typography>Rent</Typography>
                    <List>
                        <ListItem key="0">
                            <ListItemText primary="Total Rent Due"/>
                            <ListItemSecondaryAction>
                                <Typography>$1800</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="1">
                            <ListItemText primary="Next Rent Due Date"/>
                            <ListItemSecondaryAction>
                                <Typography>December 1st</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                    <Typography>Pay Distirbution</Typography>
                    <List>
                        <ListItem key="0" dense>
                            <ListItemText primary="Stephanie Liu"/>
                            <ListItemSecondaryAction>
                                <Typography>$600</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="1" dense>
                            <ListItemText primary="Andy Smith"/>
                            <ListItemSecondaryAction>
                                <Typography>$650</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="2" dense>
                            <ListItemText primary="Bob Doe"/>
                            <ListItemSecondaryAction>
                                <Typography>$550</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        </List>
                        <Divider/>
                        <List>
                        <ListItem key="3">
                            <ListItemText primary="Total"/>
                            <ListItemSecondaryAction>
                                <Typography>$1800</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>                                                                   
                    </List>

                    <Button id="editBtn">Edit Rent</Button>
                </div>

            </div>
        )
    }

}