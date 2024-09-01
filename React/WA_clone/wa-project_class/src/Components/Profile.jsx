import { ArrowLeft, CheckIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';



function Profile(props) {
    const navigate = useNavigate();
    const { userData, updateName, updateStatus } = useAuth();
    const [name, setName] = useState(userData?.name || "");
    const [status, setStatus] = useState(userData?.status || "");

    const handleLogout = () => {
        signOut(auth);
        navigate("/login")
    }

    return (
        <div className='bg-white w-[30vw]'>
            <div className="bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6">
                <button onClick={props.onBack}>
                    <ArrowLeft />
                </button>
                <div> Profile</div>
            </div>
            <div className="bg-gray-100">
                <img src={userData.profile_pic} alt="" className="rounded-full h-10 w-10 " />
                {/* ... other user data */}
                {/* <h2>{userData.name}</h2> */}
                <div className="flex flex-col bg-white w-full py-4 px-8">
                    <label className="text-sm text-primary-dense mb-2">Your name</label>
                    <div className="flex items-center w-full">
                        <input
                            value={name}
                            className="w-full bg-transparent"
                            placeholder="Update your name..."
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <button onClick={() => updateName(name)} >
                            <CheckIcon className="w-5 h-5" />
                        </button>
                    </div>

                </div>

                <div className="flex flex-col bg-white w-full py-4 px-8">
                    <label className="text-sm text-primary-dense mb-2">Your name</label>
                    <div className="flex items-center w-full">
                        <input
                            value={status}
                            className="w-full bg-transparent"
                            placeholder="Update your status..."
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                        />
                        <button onClick={() => updateStatus(status)}>
                            <CheckIcon className="w-5 h-5" />
                        </button>
                    </div>

                </div>

                <button onClick={handleLogout}
                    className='text-white px-4 py-3 rounded bg-primary hover:bg-primary-dense '
                >Logout</button>

            </div>

        </div>

    )
}
export default Profile