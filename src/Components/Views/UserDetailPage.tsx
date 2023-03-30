import React from 'react';
import { useParams } from 'react-router-dom';

type IParams = {
    id: string;
};
const UserDetailPage = () => {
    const { id } = useParams<IParams>();
    return (
        <div style={{ margin: 40 }}>
            <h2 style={{ textAlign: 'center' }}>Users Details page{id}</h2>
        </div>
    );
};

export default UserDetailPage;
