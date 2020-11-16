import React from 'react';
import "./rc-survey.css"
import MessyLivingRoom from './../resources/messy-living-room.png'
import GroceryLineup from './../resources/grocery-lineup.png'
import AnnoyingSound from './../resources/annoying-sound.wav'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
import AudioPlayer from 'material-ui-audio-player';
import {Link} from "react-router-dom";

export default class RCSurvey extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }
    
    componentDidMount() {
      this.myRef.current.scrollTo(0, 0);
    }
    

    render() {
        return (
            <div id="mobile-view-container">
                <div className="rc-survey" ref={this.myRef}>
                    <h3>Roommate Compatability Survey</h3>
                    <div id="survey-q1" className="survey-question-container">
                        <Typography id="messy-living-room-text" className="survey-question-text" gutterBottom>
                            How messy is this living room?
                        </Typography>
                        <img id="messy-living-room-img" src={MessyLivingRoom} alt="MessyLivingRoom"></img>
                        <Slider
                            defaultValue={1}
                            aria-labelledby="messy-living-room-text"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            marks={[{value: 2, label: "Not Messy"}, {value: 9, label: "Very Messy"}]}
                        />
                    </div>
                    <div id="survey-q2" className="survey-question-container">
                        <Typography id="sound-text" className="survey-question-text" gutterBottom>
                            How annoying is this sound while studying?
                        </Typography>
                        <AudioPlayer
                            elevation={1}
                            width="100%"
                            variation="default"
                            spacing={1}
                            download={false}
                            autoplay={false}
                            order="standart"
                            preload="auto"
                            loop={false}
                            src={AnnoyingSound}
                            id="annoying-sound"
                        />
                        <Slider
                            defaultValue={1}
                            aria-labelledby="sound-text"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            marks={[{value: 2, label: "Not Annoying"}, {value: 9, label: "Very Annoying"}]}
                        />
                    </div>
                    <div id="survey-q3" className="survey-question-container">
                        <Typography id="budget-text" className="survey-question-text" gutterBottom>
                            Maximum budget for rent per month.
                        </Typography>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-budget">Budget</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-budget"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={50}
                                type="number"
                                defaultValue={0}
                            />
                        </FormControl>
                    </div>
                    <div id="survey-q4" className="survey-question-container">
                        <Typography id="grocery-lineup-text" className="survey-question-text" gutterBottom>
                            Are these people lining up too close to each other?
                        </Typography>
                        <img id="grocery-lineup-img" src={GroceryLineup} alt="GroceryLineup"></img>
                        <Slider
                            defaultValue={1}
                            aria-labelledby="grocery-lineup-text"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            marks={[{value: 2, label: "Not Close"}, {value: 9, label: "Very Close"}]}
                        />
                    </div>
                    <div id="survey-q5" className="survey-question-container">
                        <Typography id="school-social-text" className="survey-question-text" gutterBottom>
                            How likely are you to hang out with your roommates over studying?
                        </Typography>
                        <Slider
                            defaultValue={1}
                            aria-labelledby="school-social-text"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            marks={[{value: 2, label: "Unlikely"}, {value: 9, label: "Likely"}]}
                        />
                    </div>
                    <Divider className='create-profile-divider' />
                    <div className="navigate-next-container">
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForward></ArrowForward>}
                            component={Link} to={"/summary-create-profile"}
                        >
                            Next
                        </Button>
                    </div>
                </div>
        
            </div>
            
        );
    }
}
