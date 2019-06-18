import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteMessage } from '../actions/ActionsMessage';
import axios from 'axios';
import './MessageForm.css'
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers';
import logger from 'redux-logger';


const middleware = applyMiddleware(logger())
const store = createStore(reducers, applyMiddleware(logger))

class Messages extends Component {
    state = {
        messages: []

    }

    componentDidMount() {
        axios.get('http://localhost:9000/messages')
            .then(res => {
                console.log(res.data);
                this.setState({
                    messages: res.data
                })
                for (const message of res.data) {
                    store.dispatch(({type: "ADD_MESSAGE",
                                payload: message.message}))    
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    callDeleteApi(id) {
        const url = 'http://localhost:9000/messages/' + id
        console.log(url);
        axios.delete(url)
            .then(res => {
                console.log(res.data);
                store.dispatch(({type: "DELETE_MESSAGE",
                                payload: res.data.message})) 
                window.location.reload(false);             
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        const {messages} = this.state;
        const messagesList = messages.length ? (
            messages.map(message => {
                return <div key={message.id}>
                    <div className="text-left">
                        {message.message}
                        <button className="btn-default" onClick={() => this.callDeleteApi(message.id)}>
                            Delete
                        </button>
                    </div>
                </div>    
            })
        ) : <p></p>
        return (
            <div>
                {
                    messagesList
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state.lastMessage);
    // console.log(state.messages);
    return { message: state.lastMessage, messages: state.messages}
  }
  
  export default connect(mapStateToProps, {deleteMessage })(Messages);
