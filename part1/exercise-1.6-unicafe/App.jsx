import { useState, useCallback } from 'react'

import Button from '../components/Button';
import Header from '../components/Header';
import Part from '../components/Part';
import Statistics from '../components/Statistics';

import { createUniqueKey } from '../helper/index';
import data from './data';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const { feedbackOptions } = data;

  const setFeedbackOption = useCallback((text) => {
    switch(text) {
      case 'good':
        return () => setGood((prevValue) => prevValue + 1);
      case 'neutral':
        return () => setNeutral((prevValue) => prevValue + 1);
      case 'bad':
        return () => setBad((prevValue) => prevValue + 1);
    }
  }, [good, neutral, bad]);

  return (
    <div>
      <Header as='h1' name='Give Feedback' />
      {feedbackOptions.map((option, index) => (<Button key={createUniqueKey(`${option}-button`, index)} text={option} onClick={setFeedbackOption(option)} />))}

      <Header as='h2' name='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App