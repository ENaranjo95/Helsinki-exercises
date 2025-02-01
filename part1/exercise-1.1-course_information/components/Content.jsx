import Part from './Part';

const Content = (props) => {
    console.log(props)
    const { parts } = props;

    return (
        <>
            {parts.map((part, index) => (
                <Part 
                    name={part.name} 
                    exercises={part.exercises}
                    key={`${JSON.stringify(part)}-${index}`}
                />
            ))}
        </>
    );
};

export default Content;