import { useState } from 'react'
import Button from '../components/Button';
import Header from '../components/Header';

import anecdotes from './data';

const App = () => {
    const [selected, setSelected] = useState(0);
    const [anecdoteVotes, setAnecdoteVotes] = useState(Array(anecdotes.length).fill(0))

    const generateRandomNumber = (array) => {
        const length = array.length;
        return Math.floor(Math.random() * length);
    }

    const handleAnecdoteClick = () => {
        const randomNum = generateRandomNumber(anecdotes);
        setSelected(randomNum);
    }

    const handleAnecdoteVote = () => setAnecdoteVotes(
        (prevValue) => {
            const newAnecdoteValue = [...prevValue];
            newAnecdoteValue[selected] += 1;
            return newAnecdoteValue;
        }
    );
  
    const mostVotedAnecdote = () => {
        const max = Math.max(...anecdoteVotes);
        const index = anecdoteVotes.findIndex((vote) => vote === max);

        return index;
    };
    

    return (
        <div>
            <Header name='Anecdote of the day' />
            <p>{anecdotes[selected]}</p>
            <p>has {anecdoteVotes[selected]} votes</p>
            <Button text='vote' onClick={() => handleAnecdoteVote()}/>
            <Button text='next anecdote' onClick={() => handleAnecdoteClick()}/>
            <Header as='h2' name='Anecdote with most votes' />
            <p>{anecdotes[mostVotedAnecdote()]}</p>
            <p>has {anecdoteVotes[mostVotedAnecdote()]} votes</p>
        </div>
    )
};

export default App;