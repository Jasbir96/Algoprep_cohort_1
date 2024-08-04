import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const handleLogout = () => {
    // logout wala logic
    setIsLoggedIn(false);
   navigate("/login");
  }
  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home