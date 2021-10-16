import React from 'react';

const Input = ({ inputText , searchFilter }) => {


    return (
        <>
            <input 
                type="text"
                name="Useraname"
                value={inputText}
                onChange={e => searchFilter(e.target.value)}
                placeholder="Search the username..."
            />
        </>
    )
}

export default Input;
