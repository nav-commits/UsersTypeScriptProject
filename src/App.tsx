import React from 'react';
import HomePage from './Components/Views/Homepage';
import { useState, useEffect } from 'react';
import { Data } from './Components/Types/UserDataModel';
import { Routes, Route } from 'react-router-dom';
import UserDetailPage from './Components/Views/UserDetailPage';

function App() {
    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage data={data} />} />
                <Route path='/user-details/:id' element={<UserDetailPage />} />
            </Routes>
        </>
    );
}

export default App;
