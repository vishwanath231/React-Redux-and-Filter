import React from 'react';

const User = ({ val }) => {
    return (
        <div>
            <div className="box" key={val.id}>
                <p>Name : <span>{val.name}</span></p>
                <p>Username : <span>{val.username}</span></p>
                <p>Email : <span>{val.email}</span></p>
            </div>
        </div>
    )
}

export default User;
