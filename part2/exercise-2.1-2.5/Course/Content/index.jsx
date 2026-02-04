import Part from "./Part";

const Content = (props) => {
    const { parts } = props;
    const totalExercises = parts.reduce((prev, curr) => curr.exercises + prev,0);

    return (
        <>
            {parts.map((part) => (
                <p key={part.id}>{part.name} <Part exercises={part.exercises}/></p>
            ))}
            <strong>total of {totalExercises} exercises</strong>
        </>
    );
};

export default Content;