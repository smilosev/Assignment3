import React, { Component } from 'react'
import './MessageForm.css'
import { connect } from 'react-redux';
import { addMessage } from '../actions/ActionsMessage'
import axios from 'axios';
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers';
import logger from 'redux-logger';


const middleware = applyMiddleware(logger())
const store = createStore(reducers, applyMiddleware(logger))

class MessageForm extends Component {

    postMessage(message) {
        const url = 'http://localhost:9000/messages'
        const id = Math.floor(Math.random() * 1000).toString();
        let obj = {
            id: id,
            from: "Stefan",
            message: message
        }

        axios.post(url, obj)
            .then(res => {
                console.log(res.data)
                window.location.reload(false);   
                store.dispatch(({type: "ADD_MESSAGE",
                                payload: message.message}))          
            })
            .catch(error => {
                console.log(error)
            });
    }
    render() {
        let input;
        return (
            <div>
                <h1 className="app-title">Stefan's Messaging App</h1>
                <div className="container">
                    <div
                        style={{
                            padding: 30,
                            textAlign: "left",
                            maxWidth: 500,
                            margin: "auto"
                        }}>
                    <div className="text-pad">
                        Post a Message...
                        </div>

           <br />
                            
                        <input className="input-box"
                            type="text"
                            placeholder="Type Message here.."
                            ref={text => (input = text)}></input>
                        <button
                            className="add-btn btn-floating"
                            onClick={() => {
                                if (input.value.trim().length == 0) {
                                    return;
                                }
                                this.postMessage(input.value);
                            }}>
                        Post Message
                       </button>
                       </div>
            </div>
    </div>
                    );
                }
            }

          
const mapStateToProps = (state) => {
    return { messages: state.messages };
}

export default connect(mapStateToProps, { addMessage })(MessageForm);


