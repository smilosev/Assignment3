import React, { Component } from "react";
import Dog from "../assets/dog.jpg"

class AboutMe extends Component {
    render() {

        return(

            <div>
                    <p>My name is Stefan Milosevic and I am a 4th year Computer Science Student!</p> 
                    <br></br>
                    
                    <p> Meet my dog, Sam! </p>

                    <br></br>
                    <button type="button" class="float-button"><i class="fa fa-linkedin"></i> LinkedIn</button>
                    <button type="button" class="float-button"><i class="fa fa-facebook"></i> Facebook</button>
                    <img src={Dog}  style={{width: 250, height: 250, position: 'center'}}/>



                            
            </div>
        );
    }
}

export default AboutMe;