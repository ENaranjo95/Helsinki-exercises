const Filter = (props) => {
    const {filteredName, handleFilteredName} = props;

    return (
        <div>
            filter shown with <input value={filteredName} onChange={handleFilteredName}/>
        </div>
    );
};

export default Filter;