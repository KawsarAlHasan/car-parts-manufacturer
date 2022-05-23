import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loding/Loding';
import Part from './Part/Part';
import './Parts.css';


const Parts = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const [parts, setParts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('unpermanent.json')
            .then(res => res.json())
            .then(data => {
                setParts(data)
                setIsLoading(false)
            });
    }, [])
    return (
        <div>
            <h1 className='text-center py-4'>Parts <span className='text-danger'>Items</span></h1>

            <div className="container parts-container">
                {isLoading ? <Loading></Loading> :
                    parts.slice(0, 6).map(part => <Part
                        key={part.id}
                        part={part}
                    ></Part>)
                }
            </div>

        </div>
    );
};

export default Parts;