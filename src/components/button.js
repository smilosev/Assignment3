import React from "react";
import { connect } from 'react-redux';
// import { increment } from '../actions/ActionsMessage';

class Button extends React.Component {
	render() {
		return (<div>
            <h1>The number is: {this.props.count}</h1>
            {/* <button onClick = {() => this.props.increment(1)}>Click Me!</button> */}
        </div>);
	}
}

const mapStateToProps = (state) => {
    return {count: state.count};
}

// export default connect(mapStateToProps, {increment})(Button);

