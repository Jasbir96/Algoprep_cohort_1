function Heading(props) {
    const age = props.age;
    const name = props.name;
    const children = props.children;
    return <>
        <h1>Hi I am {name} and I am {age} old</h1>
        {children}
    </>
}
export default Heading;