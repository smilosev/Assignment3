import React from 'react';
import './Toolbar.css'
import DrawerButton from "./DrawerButton"
import { Route, NavLink, HashRouter } from "react-router-dom";
import MessageForm from './MessageForm'
import AboutMe from './AboutMe'

const toolbar = props => (
    <HashRouter>
    <header className="toolbar">
        <nav className="toolbar-nav">
        <div className="toggle-button">
            <DrawerButton click={props.drawerToggleHandler}/>
        </div>
        <div className="toolbar-logo"><a href="/">CPSC 436</a>
        </div>
        <div className="spacing" />
        <div className="toolbar-list">
            <ul>
                <li><NavLink to="/Message">Message</NavLink></li>
                {/* <li><NavLink to="/About-me">About Me</NavLink></li> */}
            </ul>
            <Route exact path="/About-me" component={AboutMe}/>
            {/* <Route exact path="/Message" component={MessageForm}/> */}
        </div>
        </nav>
    </header>
    </HashRouter>
)

export default toolbar;


