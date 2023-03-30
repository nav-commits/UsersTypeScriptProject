import React from 'react';
import HomePage from './Components/Views/Homepage';
import { useState, useEffect } from 'react';
import { Data } from './Components/Types/UserDataModel';

function App() {
    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    console.log(data);
    return (
        <div className='App'>
            <HomePage data={data} />
        </div>
    );
}

export default App;
