import Part from './Part';

const Content = (props) => {
    const { parts } = props;

    return (
        <>
            {parts.map((part, index) => (
                <Part 
                    name={part.name} 
                    value={part.exercises}
                    key={`${JSON.stringify(part)}-${index}`}
                />
            ))}
        </>
    );
};

export default Content;