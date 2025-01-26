function InputBox() {
    const [content, setContent] = useState("");

    const handleChange = (e) => {
        const updatedValue = e.target.value;
        setContent(updatedValue);
    }
    return <div>
        {/* value-> "" */}
        <input type="text" value={content} onChange={handleChange} />

    </div>;

}

export default InputBox;