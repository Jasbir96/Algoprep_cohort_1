import React from 'react';
// useParams
import { useParams } from 'react-router-dom';

function Chat() {
  const params = useParams();
  console.log("chat params", params)
  if (params.chatid) {
    return <h2>Chat : {params.chatid}</h2>
  }
  return <h2>Empty Screen</h2>
}

export default Chat