import { MessageSquareText, PlusIcon, SendIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
// useParams
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { arrayUnion, doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

function ChatWindow() {
  const params = useParams();
  const [msg, setMsg] = useState("");
  const [secondUser, setSecondUser] = useState();
  const [msgList, setMsgList] = useState([]);
  const {userData} =useAuth();

  const receiverId = params?.chatid;
  /**
    * This is done to generate a unique chat id between two user based on user id.
    */
  const chatId =
    userData?.id > receiverId
      ? `${userData.id}-${receiverId}`
      : `${receiverId}-${userData?.id}`;


  const handleSendMsg = async () => {
    if (msg) {
      // date
      const date = new Date();
      const timeStamp = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });


      // start chat with user 
      if (msgList?.length === 0) {

        await setDoc(doc(db, "user-chats", chatId), {
          chatId: chatId,
          messages: [
            {
              text: msg,
              time: timeStamp,
              sender: userData.id,
              receiver: receiverId,
            },
          ],
        });
      } else {
        // update in the message list
        await updateDoc(doc(db, "user-chats", chatId), {
          chatId: chatId,
          // arrayUnion is used here to append to last message to the array list.
          messages: arrayUnion({
            text: msg,
            time: timeStamp,
            sender: userData.id,
            receiver: receiverId,
          }),
        });
      }
      setMsg("");
    }
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

    // message list
    const msgUnsubscribe = onSnapshot(doc(db, "user-chats", chatId), (doc) => {
      setMsgList(doc.data()?.messages || []);
    });

    return () => {
      msgUnsubscribe();
    }

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
          src={secondUser?.profile_pic || "/default-user.png"}
          alt="profile picture"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>

        <h3>{secondUser?.name}</h3>
          {secondUser?.lastSeen && (
            <p className="text-xs text-neutral-400">
              last seen at {secondUser?.lastSeen}
            </p>
          )}
        </div>
       
      </div>


      {/* message list */}
      <div className="flex-grow flex flex-col gap-12 p-6  overflow-y-scroll ">
        {msgList?.map((m, index) => (
          <div
            key={index}
            data-sender={m.sender === userData.id}
            // break-words is the edge case where a single word is quite long, so we need to break that word before it breaks our ui.
            className={`bg-white  w-fit rounded-md p-2 shadow-sm max-w-[400px] break-words data-[sender=true]:ml-auto data-[sender=true]:bg-primary-light `}
          >
            <p>{m?.text}</p>
            <p className="text-xs text-neutral-500  text-end">
              {m?.time}
            </p>
          </div>
        ))}


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