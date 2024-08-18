import { MessageSquareText } from 'lucide-react';
import React from 'react';
// useParams
import { useParams } from 'react-router-dom';

function ChatWindow() {
  const params = useParams();
  // empty screen
if(!params.chatid)
  return (
    <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
      <MessageSquareText
        className="w-28 h-28 text-gray-400"
        strokeWidth={1.2}
      />
      <p className="text-sm text-center text-gray-400">
        select any contact to
        <br />
        start a chat with.
      </p>
    </section>
  );


  // here you have thing the things
  

    return <h2>Chat : {params.chatid}</h2>  
}

export default ChatWindow