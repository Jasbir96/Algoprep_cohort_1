import { useState } from "react";

function InputBox() {
    const [content, setContent] = useState("");

    const handleAlert = () => {
        alert(content)
        setContent("");
    }
    const handleChange = (e) => {
        const updatedValue = e.target.value;
        setContent(updatedValue)
    }

    return <div>
        {/* value-> "" */}
        <input type="text" value={content} onChange={handleChange}/>
        <button onClick={handleAlert}> Alert content</button>
    </div>;
}
export default InputBox;