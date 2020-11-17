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
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper'
import InputAdornment from '@material-ui/core/InputAdornment';
import NavBar from "./nav-bar";


// Icons and Images
import './group-settings.css';
import myGroupImg from './../resources/group-img.png';
import Pfp1 from './../resources/my-user-profile.png';
import Pfp2 from "../resources/user1.jpg";
import Pfp3 from "../resources/user2.jpg";
import { Typography } from '@material-ui/core';


export default class GroupSettings extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            editGN: true,
            editR: true,
            newChore: false,
            cName: "",
            cUser: "",
            cList: [{c: "Clean Upstairs Bathroom", u: "Michael Moore"},
                {c: "Clean Common Room", u: "Michael Moore"},
                {c: "Clean Kitchen", u: "Kiersten Ross"},
                {c: "Take out Trash", u: "Stephanie Liu"}],
            rTotal: "1800",
            rDue: "2020-11-03",
            rPay1: 600,
            rPay2: 650,
            rPay3: 550,
        }

        this.changeGN = this.changeGN.bind(this);
        this.changeR = this.changeR.bind(this);
        this.changeChore = this.changeChore.bind(this);
    }

    changeGN(){
        this.setState({
            editGN: !this.state.editGN
        })
    }

    changeR(){
        this.setState({
            editR: !this.state.editR
        })
    }

    changeChore(){
        if (this.state.newChore){
            // Make sure input is valid
            if ((this.state.cName.trim() !== "") && (this.state.cUser.trim() !== "")) {
                this.setState({
                    cList: [...this.state.cList, {c: this.state.cName.trim(), u: this.state.cUser.trim()}],
                    cName: "",
                    cUser: "",
                    newChore: false,
                })
            }
            else{
                alert("Invalid chore! Please put in a valid chore name and assignee")
            }
        }
        else{
            this.setState({
                newChore: true,
            })
        }
    }

    validate(evt) {
        var theEvent = evt || window.event;
      
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
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

        var Rread = this.state.editR;
        var rAllPay = parseFloat(this.state.rPay1) + parseFloat(this.state.rPay2) + parseFloat(this.state.rPay3);

        var rDiv = (
            <Paper id="pDiv">
            <Typography>Rent</Typography>
            <List id="gList">
                <ListItem key="0">
                    <ListItemText primary="Total Rent Due"/>
                    <ListItemSecondaryAction>
                        <Typography>${this.state.rTotal}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem key="1">
                    <ListItemText primary="Next Rent Due Date"/>
                    <ListItemSecondaryAction>
                        <Typography>{this.state.rDue}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            <Typography>Pay Distirbution</Typography>
            <List id="gList">
                <ListItem key="0" dense>
                    <ListItemText primary="Stephanie Liu"/>
                    <ListItemSecondaryAction>
                        <Typography>${this.state.rPay1}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem key="1" dense>
                    <ListItemText primary="Michael Moore"/>
                    <ListItemSecondaryAction>
                        <Typography>${this.state.rPay2}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem key="2" dense>
                    <ListItemText primary="Kiersten Ross"/>
                    <ListItemSecondaryAction>
                        <Typography>${this.state.rPay3}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>
                </List>
                <Divider/>
                <List id="gList">
                <ListItem key="3">
                    <ListItemText primary="Total"/>
                    <ListItemSecondaryAction>
                        <Typography>${rAllPay}</Typography>
                    </ListItemSecondaryAction>
                </ListItem>                                                                   
            </List>

            <Button id="editBtn" onClick={this.changeR}
            color="primary" variant="contained">Edit Rent</Button>
            
            </Paper>
        )

        if (!Rread){
            rDiv = (
                <Paper id="pDiv">
                <Typography>Rent</Typography>
                <List id="gList">
                    <ListItem key="0">
                        <ListItemText primary="Total Rent Due"/>
                        <ListItemSecondaryAction>
                            <TextField
                            defaultValue={this.state.rTotal}
                            onKeyPress={(event) => this.validate(event)}
                            onChange={(event) => this.setState({rTotal: event.target.value})}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            id="moneyInput"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem key="1">
                        <ListItemText primary="Next Rent Due Date"/>
                        <ListItemSecondaryAction>
                            <input type="date" 
                            defaultValue={this.state.rDue}
                            onChange={(event) => this.setState({rDue: event.target.value})}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <Typography>Pay Distirbution</Typography>
                <List id="gList">
                    <ListItem key="0" dense>
                        <ListItemText primary="Stephanie Liu"/>
                        <ListItemSecondaryAction>
                            <TextField
                            defaultValue={this.state.rPay1}
                            onKeyPress={(event) => this.validate(event)}
                            onChange={(event) => this.setState({rPay1: event.target.value})}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            id="moneyInput"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem key="1" dense>
                        <ListItemText primary="Michael Moore"/>
                        <ListItemSecondaryAction>
                            <TextField
                            defaultValue={this.state.rPay2}
                            onKeyPress={(event) => this.validate(event)}
                            onChange={(event) => this.setState({rPay2: event.target.value})}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            id="moneyInput"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem key="2" dense>
                        <ListItemText primary="Kiersten Ross"/>
                        <ListItemSecondaryAction>
                            <TextField
                            defaultValue={this.state.rPay3}
                            onKeyPress={(event) => this.validate(event)}
                            onChange={(event) => this.setState({rPay3: event.target.value})}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            id="moneyInput"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    </List>
                    <Divider/>
                    <List id="gList">
                    <ListItem key="3">
                        <ListItemText primary="Total"/>
                        <ListItemSecondaryAction>
                            <Typography>${rAllPay}</Typography>
                        </ListItemSecondaryAction>
                    </ListItem>                                                                   
                </List>
    
                <Button id="editBtn" onClick={this.changeR}
                color="primary" variant="contained">Save Changes</Button>
                
                </Paper>
            )
        }

        

        return (
            <div id="mobile-view-container" class="secondarybg">
                <Paper id="pDiv">
                    <Avatar alt="Remy Sharp" src={myGroupImg} id="group-pic" />
                    <br/>
                    <TextField id="name-input" label="Group Name"
                        defaultValue="Cool Pals" variant="outlined"
                        InputProps={{
                            readOnly: GNread,
                        }}
                    />
                    <Button id="editBtn" onClick={this.changeGN}
                    color="primary" variant="contained">{GNtxt}</Button>
                </Paper>

                <Paper id="pDiv">
                    <Typography>Group Members</Typography>
                    <List dense id="gList">
                        <ListItem key="0" >
                            <ListItemAvatar>
                                <Avatar src={Pfp1}/>
                            </ListItemAvatar>
                            <ListItemText primary="Stephanie Liu" />
                            <ListItemSecondaryAction>
                                <Button id="listBtn">Leave Group</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="1">
                            <ListItemAvatar>
                                <Avatar src={Pfp2}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Michael Moore" />
                            <ListItemSecondaryAction>
                                <Button id="listBtn">Vote Kick</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="2">
                            <ListItemAvatar>
                                <Avatar src={Pfp3}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Kiersten Ross" />
                            <ListItemSecondaryAction>
                                <Button id="listBtn">Vote Kick</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>

                <Paper id="pDiv">
                    <Typography>Events</Typography>

                    <List dense id="gList">
                        <ListItem key="0">
                            <ListItemText primary="3Y03 Midterm" secondary="November 10th 2020"/>
                            <ListItemSecondaryAction>
                                <Button id="listBtn">Edit Event</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="1">
                            <ListItemText primary="House Cleanup" secondary="November 13th 2020"/>
                            <ListItemSecondaryAction>
                                <Button id="listBtn">Edit Event</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem key="2">
                            <ListItemText primary="Group Study Session" secondary="November 29th 2020"/>
                            <ListItemSecondaryAction>
                                <Button id="listBtn">Edit Event</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>

                    <Button id="editBtn" color="primary" variant="contained">Add Event</Button>

                </Paper>

                <Paper id="pDiv">
                    <Typography>Chores</Typography>
                    <List dense id="gList">
                        {this.state.cList.map((value) => {
                            return (
                                <ListItem key={value.c} dense>
                                <ListItemText primary={value.c}
                                secondary={value.u}/>
                                <ListItemSecondaryAction>
                                    <Button id="listBtn">Edit Chore</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                            )
                        })}                                                                   
                    </List>

                    <div style={{display: `${CHdisp}`}}>
                        <TextField id="chore-input" 
                        label="Chore Name" variant="outlined"
                        value={this.state.cName}
                        onChange={(event) => this.setState({cName: event.target.value})}/>
                        <br/>
                        <br/>
                        <Select
                            id="chore-sel"
                            value={this.state.cUser}
                            onChange={(event) => this.setState({cUser: event.target.value})}
                            >
                            <MenuItem value={"Stephanie Liu"} id="gList">Stephanie Liu</MenuItem>
                            <MenuItem value={"Michael Moore"} id="gList">Michael Moore</MenuItem>
                            <MenuItem value={"Kiersten Ross"} id="gList">Kiersten Ross</MenuItem>
                        </Select>
                    </div>

                    <Button id="editBtn" onClick={this.changeChore}
                    color="primary" variant="contained">{CHtxt}</Button>
                </Paper>

                {rDiv}

                <br/>
                <br/>
                <br/>
                <div id="bottombar">
                <NavBar url="/group-settings"/>
                </div>
            </div>
        )
    }

}