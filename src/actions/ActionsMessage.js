export const addMessage = message => {
    return {
        type: "ADD_MESSAGE",
        payload: message
    }
}

export const deleteMessage = messageId => {
    return {
        type: 'DELETE_MESSAGE',
        payload: messageId
      }
}
