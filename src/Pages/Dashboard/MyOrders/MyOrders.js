import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = (props) => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        const getMyOrders = async() => {
            const email = user.email;
            const url = `https://stark-brushlands-57907.herokuapp.com/purchase`;
            const {data} = await axios.get(url);
            setMyOrders(data);
        };
        getMyOrders();

    }, [user]);

    return (
        <div>
            <h1 className='my-4 text-center'>My <span className='text-danger'> Orders </span></h1>
            <h4 className='mb-3 text-center'>My <span className='text-primary'>{myOrders.length} Purchase</span> Items:</h4>
            <div className="container parts-container">
                {
                     myOrders.map(myOrder => <MyOrder
                        key={myOrder._id}
                        myOrder={myOrder}
                     ></MyOrder>
                )}
            </div>
        </div>
    );
};

export default MyOrders;