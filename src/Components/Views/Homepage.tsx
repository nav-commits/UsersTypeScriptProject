import Table from '../Organisms/Table';
import React from 'react';
import { Data } from '../Types/UserDataModel';

const HomePage: React.FC<{ data: Data[] }> = (props) => {
    return (
        <div style={{ margin: 40 }}>
            <h2 style={{textAlign:'center'}}>Users</h2>
            <Table data={props.data} />
        </div>
    );
};

export default HomePage;
