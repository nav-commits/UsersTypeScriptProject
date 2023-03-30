import React from 'react';
import Card from '../Molecules/Card';
import { Data } from '../Types/UserDataModel';
import './Cards.css';

const CardContent: React.FC<{ data: Data[] }> = (props) => {
    return (
        <div className='Cards'>
            {props.data.map((user, i) => {
                return (
                    <React.Fragment key={i}>
                        <Card
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            address={user.address}
                            phone={user.phone}
                            id={user.id}
                            website={user.website}
                            company={user.company}
                        />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default CardContent;
