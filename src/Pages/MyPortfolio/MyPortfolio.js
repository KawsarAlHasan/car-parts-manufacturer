import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const MyPortfolio = (props) => {
    return (
        <div className=''>
            <h1 className="text-center my-4">MY <span className='text-danger'> PORTFOLIO</span></h1>
            <div className='d-flex justify-content-around gap-3 container'>
                <div className=''>
                    <h5>Name: <b>Kawsar Al Hasan</b></h5>
                    <h5>Email: <b>kawsaralhasan.420.gmail.com</b></h5>
                    <h5>Education: <b>Computer Technology</b></h5>
                    <h5>Semester: <b>5th</b></h5>
                    <h5>Institute: <b>Barguna Polytechnic Institute</b></h5>
                </div>
                <div className=''>
                    <h4 className="text-center mb-2">Projects <span className='text-danger'>Link</span></h4>
                    <div>
                    <h5>Link: <a href='https://warehouse-management-react-app.web.app/'><b>warehouse-management-react-app</b></a></h5>
                    <h5>Link: <a href='https://serene-colden-f0f207.netlify.app/'><b>Mobile Hunter</b></a></h5>
                    <h5>Link: <a href='https://warehouse-management-react-app.web.app/'><b>warehouse-management-react-app</b></a></h5>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
            <h3 className="text-center">MY <span className='text-danger'>SKILLS</span></h3>
                <span><b>HTML:</b></span>
                <ProgressBar className='mb-2' striped variant="primary" now={80} label={`${80}%`} />
                <span><b>CSS:</b></span>
                <ProgressBar className='mb-2' striped variant="secondary" now={75} label={`${75}%`} />
                <span><b>GITHUB:</b></span>
                <ProgressBar className='mb-2' striped variant="success" now={82} label={`${82}%`} />
                <span><b>BOOTSTRAP:</b></span>
                <ProgressBar className='mb-2' striped variant="danger" now={95} label={`${95}%`} />
                <span><b>JAVASCRIPT:</b></span>
                <ProgressBar className='mb-2' striped variant="info" now={90} label={`${90}%`} />
                <span><b>TAILWINDCSS:</b></span>
                <ProgressBar className='mb-2' striped variant="warning" now={60} label={`${60}%`} />
                <span><b>REACT:</b></span>
                <ProgressBar className='mb-2' striped variant="dark" now={80} label={`${80}%`} />
                <span><b>REACT-ROUTER:</b></span>
                <ProgressBar className='mb-2' striped variant="primary" now={85} label={`${85}%`} />
                <span><b>FIREBASE:</b></span>
                <ProgressBar className='mb-2' striped variant="secondary" now={78} label={`${78}%`} />
                <span><b>NODE JS:</b></span>
                <ProgressBar className='mb-2' striped variant="danger" now={70} label={`${70}%`} />
                <span><b>MONGO DB:</b></span>
                <ProgressBar className='mb-2' striped variant="success" now={72} label={`${72}%`} />
            </div>
        </div>
    );
};

export default MyPortfolio;