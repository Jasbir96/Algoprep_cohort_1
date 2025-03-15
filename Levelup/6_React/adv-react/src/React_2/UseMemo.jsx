import React, { useState, useMemo } from 'react';

function UseMemo() {
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState('');

    /*****
     * you have lot of costly calculation  -> variable (does not change -> reuse the result )
     * 
     * */
    // some action
    const result = useMemo(() => {
        console.log("Result was calculated");
        return count ** count;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Memoized Value: {result}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
        </div>
    );
}

export default UseMemo;