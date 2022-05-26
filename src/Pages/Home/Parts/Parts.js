import React from 'react';
import UseParts from '../../Shared/Hooks/UseParts';
import Loading from '../../Shared/Loding/Loding';
import Part from './Part/Part';
import './Parts.css';


const Parts = (props) => {

    const [parts, isLoading] = UseParts();

    return (
        <div>
            <h1 className='text-center py-4'>Parts <span className='text-danger'>Items</span></h1>

            <div className="container parts-container">
                {isLoading ? <Loading></Loading> :
                    parts.slice(0, 6).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>

        </div>
    );
};

export default Parts;