import React from 'react';
import img from '../../myImages/brand-Management.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
  };

export default function brandManagement() {
    return (
        <>
        <img src={img} className="img-responsive" alt="..." style={mystyle}/>
        <h1 className="display-3 text-center fw-bold mt-3">Brand Management</h1>
        <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
        <br />
        <div className='text-start ms-5 me-5 mb-5'>
            <h5 className='fs-3 mt-2 mb-5'>The company’s make their use of techniques to increase the product of productivity and make it effective through website and media. And the company brand manager innovation our product and creates the brand. It chances to increase the value of the product or brand of a companys</h5>
        </div>
        <br/>
        </>
    )
}
