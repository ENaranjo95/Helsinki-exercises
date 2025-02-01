import Part from './Part';

const Content = (props) => {
    const { content } = props;

    return (
        <>
            {content.map((contentPart, index) => (
                <Part 
                    text={contentPart.text} 
                    exercises={contentPart.exercises}
                    key={`${JSON.stringify(contentPart)}-${index}`}
                />
            ))}
        </>
    );
};

export default Content;