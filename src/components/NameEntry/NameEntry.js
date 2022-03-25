import React, { useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';

const NameEntry = (props) => {

    const { userName, setUserName } = useContext(QueryContext);

    const handleChange = (e) => setUserName([...userName, e.target.name.value]);

    const nameOnSubmit = (newName) => {
        handleChange(newName);
        newName.preventDefault();
        console.log(userName);
    };

    return (
        <>
            <form onSubmit={nameOnSubmit}>
                <input
                    type="text"
                    placeholder="Enter name here."
                    name="name"
                 />
                <button type="submit">Add Name</button>
            </form>
        </>
    );
};

export default NameEntry;