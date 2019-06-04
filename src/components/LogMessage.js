import React, { Component } from 'react'

function LogMessage(props) {
    if(props.clicked === true) {
        return (
            <div>
                {props.logList}
            </div>
        )
    }
}

export default LogMessage
