import React from 'react';
import img from '../../myImages/content-Creation.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
};

export default function contentCreation() {
    return (
            <>
                <img src={img} className="img-responsive" alt="..." style={mystyle}/>
                <h1 className="display-3 text-center fw-bold mt-3">Content Creation</h1>
                <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
                <br />
                <div className='text-start ms-5 me-5 mb-5'>
                    <h5 className='fs-3 mt-2 mb-5'>The company is contributing information through media especially digital media and this company makes our content and publishes it on other websites to promote our products into blogging, online digital media and the company makes content relatable and understandable.</h5>
                </div>
                <br/>            
            </>
    )
}
