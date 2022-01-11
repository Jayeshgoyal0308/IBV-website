import React from 'react';
import img from '../../myImages/affiliated-Marketing.jfif';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
};

export default function affiliatedMarketing() {
    return (
        <>
            <img src={img} className="img-responsive" alt="..." style={mystyle}/>
            <h1 className="display-3 text-center fw-bold mt-3">Affiliated Marketing</h1>
            <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
            <br />
            <div className='text-start ms-5 me-5 mb-5'>
                <h5 className='fs-3 mt-2 mb-5'>The company promotes its products to its third party and pays a commission fee to find ways to promote the company. Its increase the prominence of the company by internet through and its pay for the performance</h5>
            </div>
            <br/>            
        </>
    )
}
