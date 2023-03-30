import CardContent from '../Organisms/CardContent';
import React from 'react';
import { Data } from '../Types/UserDataModel';

const HomePage: React.FC<{ data: Data[] }> = (props) => {
    return (
        <div style={{ margin: 40 }}>
            <h2>Users</h2>
            <CardContent data={props.data} />
        </div>
    );
};

export default HomePage;
