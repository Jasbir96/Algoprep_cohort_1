import React from 'react'
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ChatPanel from './ChatPanel';
import ChatWindow from './ChatWindow';

function Home() {
  // const handleChange = (e) => {
  //   console.log("Change Event");
  //   const img = e.target.files[0];

  //   // address 
  //   const storageRef = ref(storage, "/profile" + Math.random());

  //   // strorage task    
  //   const uploadTask = uploadBytesResumable(storageRef, img);
  //   console.log("upload task ")
  //   // developer
  //   uploadTask.on("state_changed", progressCB, errorCB, finishedCb);

  //   // upload 
  //   function progressCB(data) {
  //     console.log("data", data);
  //   }
  //   // if error
  //   function errorCB(err) {
  //     // 
  //     console.log("err", err);
  //   }
  //   // on success
  //   function finishedCb() {
  //     console.log("successfully file uploaded");
  //     getDownloadURL(uploadTask.snapshot.ref).then(function (url) {
  //       console.log("url", url);
  //     })

  //   }


  // }

  return (
    <main className='relative w-full h-screen bg-[#E3E1DB]'>

      {/* <input type='file'
        accept='image/png image/jpeg image/webp'
        onChange={handleChange}
      ></input> */}
      <div className="absolute top-0 h-[130px] bg-primary  w-full" />
      
      <div className="absolute p-5 top-0 h-screen w-full">
        <div className="bg-background w-full h-full shadow-md flex">
          {/* conditonal rehne waale hai -> chat list , profile */}
          <ChatPanel />
          {/* <div>Empty Chat</div>:<div>Individual CHat</div> */}
          <ChatWindow></ChatWindow>
        </div>
      </div>



    </main>

  )
}

export default Home