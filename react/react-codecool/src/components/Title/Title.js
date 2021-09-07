function Title(props) {
    return (
       <h1 style={{ color: props.color, backgroundColor: props.background }}>{props.data}</h1>
    );
}

export default Title;