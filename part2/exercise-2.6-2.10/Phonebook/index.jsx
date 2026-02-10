import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhonebookSubmission = (event) => {
    event.preventDefault();
    const newPerson = {
        name: newName,
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
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App