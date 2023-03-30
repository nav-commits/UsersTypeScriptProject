import React, { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

type IParams = {
    id: string;
};
const UserDetailPage = () => {
    const { id } = useParams<IParams>();
    const location = useLocation();
    const data = location.state;

    const [text, setInput] = useState<string>('');
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
     const inputStyle = {
         padding: '5px',
         borderRadius: 5,
         width: 180
     };
    return (
        <div style={{ margin: 40 }}>
            <h2 style={{ textAlign: 'center' }}>Users Details</h2>
            <h2>Name:{data.name}</h2>
            <p>Company: {data?.company?.name}</p>
            <p>Email: {data.email}</p>
            <p>City: {data?.address?.city}</p>
            <p>Street: {data?.address?.street}</p>
            <p>Suite: {data?.address?.suite}</p>
            <p>Zipcode: {data?.address?.zipcode}</p>
            <p>userId: {id}</p>
            <input type='text' style={inputStyle} value={text} onChange={onNameChange} />
        </div>
    );
};

export default UserDetailPage;
