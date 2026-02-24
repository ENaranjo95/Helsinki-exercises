import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  const [filteredNames, setFilteredNames] = useState([]);

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

  const handleFilteredName = (event) => {
    const filteredName = event.target.value;
    setFilteredName(filteredName);
    const matchingNames = persons.filter(person => {
      return person.name.toLowerCase().includes(filteredName);
    });
    setFilteredNames(matchingNames);
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

  const filteredPersons = filteredName.length > 0 ? filteredNames : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filteredName} onChange={handleFilteredName}/>
      </div>
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
        {filteredPersons.map((person) => <li key={person.id}><span style={{marginRight: '4px'}}>{person.name}</span><span>{person.number}</span></li>)}
      </ul>
    </div>
  )
}

export default App