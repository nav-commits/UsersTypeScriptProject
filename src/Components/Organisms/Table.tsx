import React from 'react';
import { Data } from '../Types/UserDataModel';
import './Table.css';
import { Link } from 'react-router-dom';
import Button from '../Atoms/Button';

const Table: React.FC<{ data: Data[] }> = (props) => {
    const { data } = props;
    return (
        <div className='Container'>
            <table>
                <tbody>
                    <tr>
                        <th style={{ padding: 10 }}>name</th>
                        <th style={{ padding: 10 }}>email</th>
                        <th style={{ padding: 10 }}>username</th>
                    </tr>
                    {data.length > 0 &&
                        data.map((user, i) => (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link
                                        style={{ color: 'black', textDecoration: 'none' }}
                                        to={`/user-details/${user.id}`}
                                        state={user}
                                    >
                                        <Button
                                            title={user.username}
                                            color='white'
                                            backgroundColor='grey'
                                        />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
