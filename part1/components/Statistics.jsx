import StatisticLine from "./StatisticLine";
const Statistics = (props) => {
    const { good, neutral, bad } = props;

    const averageScore = (good - bad) / (good + neutral + bad);
    const positiveScore = (good / (good + neutral + bad)) * 100;

    if (good === 0 && neutral === 0 && bad === 0) {
        return <p>No feedback given</p>
    }

    return (
        <table>
            <tbody>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={good + neutral + bad} />
                <StatisticLine text='average' value={averageScore} />
                <StatisticLine text='positive' value={`${positiveScore}%`} />
            </tbody>
        </table>
    )
};

export default Statistics;