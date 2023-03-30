import React from 'react';
import Button from '../Atoms/Button';
import { Data } from '../Types/UserDataModel';

const Card = ({ name, username, email }: Data) => {
    return (
        <div
            style={{
                width: 200,
                height: 140,
                backgroundColor: 'grey',
                margin: 10,
                padding: 12,
                borderRadius: 20,
            }}
        >
            <h3>{username}</h3>
            <p>{name}</p>
            <p>{email}</p>
            <Button title='click' backgroundColor='black' color='white' />
        </div>
    );
};

export default Card;
