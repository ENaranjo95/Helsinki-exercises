import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const findDuplicateName = (name) => {
    const isDuplicate = persons.find((person) => {
      return person.name.toLowerCase() === name.toLowerCase()
    });
    return !!isDuplicate;
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handlePhonebookSubmission = (event) => {
    event.preventDefault();
    const isDuplicate = findDuplicateName(newName);
    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`);
      return;
    };
    const newPerson = {
        name: newName,
        number: newNumber,
        id: `${persons.length + 1}`
    }
    setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePhonebookSubmission}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}><span style={{marginRight: '4px'}}>{person.name}</span><span>{person.number}</span></li>)}
      </ul>
    </div>
  )
}

export default App