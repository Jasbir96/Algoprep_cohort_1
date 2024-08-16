import React from 'react'
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ChatPanel from './ChatPanel';

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
    <>
      <div>Home</div>
      {/* <input type='file'
        accept='image/png image/jpeg image/webp'
        onChange={handleChange}
      ></input> */}
      {/* conditonal rehne waale hai  */}

      <ChatPanel />
      {/* list of users leke aane from your firebase */}
      {/* <div>Chat Panel</div>  */}
      {/* 

1. chat Panel Profile Button click -> then it should open
2. currently loggedIn user ka data 
*/}
      {/* <div>Profile</div> */}

      {/* <div>Empty Chat</div>
      <div>Individual CHat</div> */}

    </>

  )
}

export default Home