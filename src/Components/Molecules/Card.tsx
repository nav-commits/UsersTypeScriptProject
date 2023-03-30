import React from 'react';
import logo from './logo.svg';
import '../../App.css';
import Button from '../Atoms/Button';
import { Data } from '../Types/UserDataModel';

const Card = (props: Data) => {
    const { name, username, email } = props;
   
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
            <Button />
        </div>
    );
};

export default Card;
