import React from 'react';
import news from '../../../images/post-2.jpg';
import news2 from '../../../images/post-6.jpg';
import news3 from '../../../images/post-7.jpg';
import news4 from '../../../images/post-8.jpg';

const LatestNews = (props) => {
    return (
        <div className='text-center'>
            <h1 className="my-4">Latest <span className='text-danger'> News</span></h1>
            <div className='d-flex justify-content-around gap-3 container'>
                <div className='shadow'>
                    <img src={news} className='img-fluid rounded' alt='latest news' />
                    <h6 className=''> <a href='!' className='text-decoration-none text-secondary'>Logic Is The Study Of Reasoning And Argument Part 2</a> </h6>
                    <div className='blockquote-footer mt-2'>By <a href="!" className='text-decoration-none'>Will Jack</a> on 2022-05-05</div>
                </div>
                <div className='shadow'>
                    <img src={news2} className='img-fluid rounded' alt='latest news' />
                    <h6 className=''> <a href='!' className='text-decoration-none text-secondary'>Logic Is The Study Of Reasoning And Argument Part 1</a> </h6>
                    <div className='blockquote-footer mt-2'>By <a href="!" className='text-decoration-none'>Rafeh Qazi</a> on 2022-05-03</div>
                </div>
                <div className='shadow'>
                    <img src={news3} className='img-fluid rounded' alt='latest news' />
                    <h6 className=''> <a href='!' className='text-decoration-none text-secondary'>Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense</a> </h6>
                    <div className='blockquote-footer mt-2'>By <a href="!" className='text-decoration-none'>MR. Mosh</a> on 2022-05-02</div>
                </div>
                <div className='shadow'>
                    <img src={news4} className='img-fluid rounded' alt='latest news' />
                    <h6 className=''> <a href='!' className='text-decoration-none text-secondary'>An Advantage Of Digital Circuits When Compared To Analog Circuits</a> </h6>
                    <div className='blockquote-footer mt-2'>By <a href="!" className='text-decoration-none'>Jessica Moore</a> on 2022-05-01</div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;