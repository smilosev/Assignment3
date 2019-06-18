import { combineReducers} from 'redux';

const messages = [];

const addMessageReducer = (message = "", action) => {
  // console.log("addMessageReducer");
    if (action.type === 'ADD_MESSAGE') {
      return action.payload
    }
    return message;
  }

const messagesReducer = (state = messages, action) => {
  // console.log(messages);
    if (action.type === 'ADD_MESSAGE') {
      messages.push(action.payload);
    }
    return messages;
  }

  const deleteReducer = (text = "", action) => {
    if (action.type === 'DELETE_MESSAGE') {
      for (var i = 0; i < messages.length; i++) {
        if (messages[i] === action.payload) {
            messages.splice(i, 1);
          }
        }
      }
      return false; 
  }

export default combineReducers({
    lastMessage: addMessageReducer,
    messages: messagesReducer,
    delete: deleteReducer
});



