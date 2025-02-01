const Content = (props) => {
    const { content } = props;

    return (
        <>
            {content.map((contentPart, index) => (
                <p key={`${JSON.stringify(contentPart)}-${index}`}> {contentPart.text } {contentPart.exercises} </p>
            ))}
        </>
    );
};

export default Content;