const Person = (props) => {
    return (
        <ul>
            {props.persons.map((person) => (
                <li key={person.id}>
                    <span style={{marginRight: '4px'}}>{person.name}</span>
                    <span>{person.number}</span>
                </li>))}
        </ul>
    )
};

export default Person;