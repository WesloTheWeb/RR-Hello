import React, { useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';

const Greeter = () => {

    const { userName } = useContext(QueryContext)

    return (
        <h1>Hello {userName}</h1>
    );
};

export default Greeter;