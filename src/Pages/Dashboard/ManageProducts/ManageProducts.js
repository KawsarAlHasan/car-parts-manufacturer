import React from 'react';
import UseParts from '../../Shared/Hooks/UseParts';
import Loading from '../../Shared/Loding/Loding';
import ManageProduct from './ManageProduct';


const ManageProducts = (props) => {

    const [parts, isLoading] = UseParts();

    return (
        <div>
            <h1 className='text-center py-4'>Manage<span className='text-danger'> Products</span></h1>

            <div className="container parts-container">
                {isLoading ? <Loading></Loading> :
                    parts.slice(0, 6).map(part => <ManageProduct
                        key={part._id}
                        part={part}
                    ></ManageProduct>)
                }
            </div>

        </div>
    );
};

export default ManageProducts;