import React from 'react';
import Button from './button';
import MessageForm from './MessageForm'
import './MessageForm.css'
import Toolbar from "./Toolbar";
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends React.Component {	
	state = {
		sideBarOpen: false
	}

	drawerToggleHandler = () => {
		this.setState((prevState) => {
			return { sideBarOpen: !prevState.sideBarOpen };
		});
	}

	backDropHandler = () => {
		this.setState( {sideBarOpen: false});
	}

	render() {
		let sideDrawer;
		let backDrop;
		if (this.state.sideBarOpen) {
			sideDrawer = <SideDrawer />;
			backDrop = <BackDrop click={this.backDropHandler} />;
		}
		return (
			<div>
			
				<Toolbar drawerToggleHandler={this.drawerToggleHandler}/>
				{sideDrawer}
				{backDrop}
				<MessageForm />
			</div>
		);
	}
}

export default App;

