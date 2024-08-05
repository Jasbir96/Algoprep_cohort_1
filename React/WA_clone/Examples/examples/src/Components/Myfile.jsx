import React from 'react'


function NonDefault() {
    return <h1>Non Default</h1>
}

const varName = 10;
const privateVariable ="no to be exposed";


function Myfile() {
    return (
       
        <div>Myfile</div>
    )
}

// non default
export { NonDefault, varName };


// default -> Myfile
export default Myfile;
