import React from 'react'
import Axios from 'axios';
import  { useEffect, useState } from 'react';

const Axiosconcept = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts").then(Response => setdata(Response.data))
    });

    return (
        <React.Fragment>
            <div className='container bg-primary text-success'>
                {data.map(item =>
                    <ul>
                        <li key={item.id}>{item.id}</li>
                        <li key={item.id}>{item.title}</li>
                        <li key={item.id}>{item.body}</li>

                    </ul>
                )}

            </div>

        </React.Fragment>
    )
}

export default Axiosconcept;