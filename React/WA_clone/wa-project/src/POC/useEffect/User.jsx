import React, { useEffect, useState } from 'react'

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    function cb() {
        // // logic -> data fetch -> UI update
        // console.log("I an after render")
        (async function fetchUser() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const userData = await response.json();
            console.log("userData", userData);
            setLoading(false);
            setUser(userData);
        })()
    }
// -> function -> call after the first render
    useEffect(cb, []);
    if (loading)
        return (
            <>
                <div>Profile Page</div>
                <div>...Loading</div>
            </>
        )

    if (loading == false) {
        return (<>
            <div>Profile Page</div>
            <div>{user.username}</div>
            <div>{user.address.street}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
        </>)
    }
}

export default User;