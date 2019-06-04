import React, { Component } from 'react'
import './MessageForm.css'
class MessageForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem: "",
        list: [],
        clicked: false
      };
    }
  
    updateInput(key, value) {
      this.setState({ [key]: value });
    }
  
    addItem() {
      // create a new item with unique id
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
   
      };
        const list = [...this.state.list];
        list.push(newItem);
  
      this.setState({
        list,
        newItem: ""
      });
    }
  
    deleteItem(id) {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({ list: updatedList });
    }
    
    render() {
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
                        }}
                    >
                        Post a Message...
            <br />
                        <input className="input-box"
                            type="text"
                            placeholder="Type Message here.."
                            value={this.state.newItem}
                            onChange={e => this.updateInput("newItem", e.target.value)}
                        />
                        <button
                            className="add-btn btn-floating"
                            onClick={() => this.addItem()}
                            disabled={!this.state.newItem.length}>
                            Post Message
                        </button>
                        {/* <button className="btn btn-floating" onClick={(e) => this.updateInput(e, "clicked", false)}>View Log</button> */}
                        <br /> <br />
                        <ul>
                            {this.state.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.value}
                                        <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                                            <i className="material-icons">x</i>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageForm
