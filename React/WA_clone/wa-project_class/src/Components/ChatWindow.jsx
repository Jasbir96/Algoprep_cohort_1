import { MessageSquareText, PlusIcon, SendIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
// useParams
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

function ChatWindow() {
  const params = useParams();
  const [msg, setMsg] = useState("");
  const [secondUser, setSecondUser] = useState();

  const receiverId = params.chatid;
  const handleSendMsg = () => {
    console.log(msg);
    setMsg("");
  }

  useEffect(() => {
    // request , data fetch
    const getUser = async () => {
      const docRef = doc(db, "users", receiverId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSecondUser(docSnap.data());
      }
    };
    getUser();

  }, [receiverId]);

  // empty screen
  if (!receiverId)
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




  //chat screen code 
  return <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
    <div className="h-full w-full bg-chat-bg flex flex-col">
      {/* topbar */}
      <div className="bg-background py-2 px-4 flex items-center gap-2 shadow-sm">
        <img
          src={secondUser?.profile_pic||"/default-user.png"}
          alt="profile picture"
          className="w-9 h-9 rounded-full object-cover"
        />
        <h3>{secondUser?.name}</h3>
      </div>

      {/* message list */}
      <div className="flex-grow flex flex-col gap-12 p-6 ">
      </div>
      {/* chat input */}
      <div className="bg-background py-3 px-6 shadow flex items-center gap-6">
        <PlusIcon />
        <input type="text" className="w-full py-2 px-4 rounded focus:outline-none"
          placeholder="Type a message..."
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMsg();
            }
          }}

        />
        <button onClick={handleSendMsg}>
          <SendIcon />
        </button>
      </div>
    </div>
  </section>
}

export default ChatWindow