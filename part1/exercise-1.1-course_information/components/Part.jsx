const Part = (props) => {
    const { text, exercises } = props;

    return (
        <p>{text} {exercises}</p>
    );
};

export default Part;