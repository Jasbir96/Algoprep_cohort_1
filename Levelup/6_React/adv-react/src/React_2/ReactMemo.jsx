import React, { useState } from 'react';

export default function ReactMemo() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            <label>
                Name{': '}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <MemoGreeting name={name} />
        </>
    );
}
// when you want to steop unecessar re-render 
const MemoGreeting = React.memo(Greeting);
function Greeting({ name }) {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
}
