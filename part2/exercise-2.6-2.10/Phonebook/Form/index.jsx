const PersonForm = (props) => {
    const {
        handleSubmission, 
        handlePersonChange, 
        handleNumberChange, 
        newName, 
        newNumber
    } = props;

    return (
        <form onSubmit={handleSubmission}>
            <div>
                name: <input value={newName} onChange={handlePersonChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
};

export default PersonForm;