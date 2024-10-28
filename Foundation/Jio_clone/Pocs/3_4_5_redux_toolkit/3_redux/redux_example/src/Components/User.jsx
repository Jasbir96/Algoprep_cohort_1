import React, { useEffect, useState } from 'react'

function UserComponent() {
    // loading
    // user
    //error
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getUser() {
            try {
                // fetch user data from API and set it to the state
                const userResp = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const userData = await userResp.json();
                setUser(userData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        }
        getUser();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
          
        }}>
            <div>

                <h4>Name: {user.name}</h4>
                <h4>Phone: {user.phone}</h4>
            </div>
        </div>
    )
}

export default UserComponent