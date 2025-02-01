const Total = (props) => {
    const { content } = props;

    const totalExercises = content.reduce((acc, cur) => acc += cur.exercises, 0);

    return (
        <p>Number of exercises {totalExercises} </p>
    );
};

export default Total;
