import React from 'react';
import './DrawerButton.css'



const drawerButton = props => (
    <button className="toggle-button" onClick= {props.click}>
        <div className="button-line"/>
        <div className="button-line"/>
        <div className="button-line"/>
    </button>
);

export default drawerButton;
