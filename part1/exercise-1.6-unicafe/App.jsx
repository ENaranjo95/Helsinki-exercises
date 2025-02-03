import { useState, useCallback } from 'react'

import Button from '../components/Button';
import Header from '../components/Header';
import Part from '../components/Part';

import { createUniqueKey } from '../helper/index';
import data from './data';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const { feedbackOptions } = data;

  const setFeedbackOption = useCallback((text, type = 'button') => {
    switch(text) {
      case 'good':
        return type === 'button' ? () => setGood((prevValue) => prevValue + 1) : good;
      case 'neutral':
        return type === 'button' ? () => setNeutral((prevValue) => prevValue + 1) : neutral;
      case 'bad':
        return type === 'button' ? () => setBad((prevValue) => prevValue + 1) : bad;
    }
  }, [good, neutral, bad]);

  return (
    <div>
      <Header as='h1' name='Give Feedback' />
      {feedbackOptions.map((option, index) => (<Button key={createUniqueKey(`${option}-button`, index)} text={option} onClick={setFeedbackOption(option)} />))}

      <Header as='h2' name='Statistics' />
      {feedbackOptions.map((option, index) => (<Part key={createUniqueKey(`${option}-text`, index)} name={option} value={setFeedbackOption(option, 'text')} />))}
    </div>
  )
}

export default App