import Part from "./Part";

const Content = (props) => {
    const { parts } = props;

    return (
        <>
            {parts.map((part) => (
                <p key={part.id}>{part.name} <Part exercises={part.exercises}/></p>
            ))}
        </>
    );
};

export default Content;