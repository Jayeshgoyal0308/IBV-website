import React from 'react';
import img from '../../myImages/web-dev.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
};

export default function webDevelopment() {
    return (
    <>
        <img src={img} className="img-responsive" alt="..." style={mystyle}/>
        <h1 className="display-3 text-center fw-bold mt-3">Web Development</h1>
        <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
        <br />
        <div className='text-start ms-5 me-5 mb-5'>
            <h5 className='fs-3 mt-2 mb-5'>The company’s web design is extremely good and it's maintained by the company technical team. The company technical team designs the best software like with java, and programming languages like c++ and python, etc. and it’s also developed some programs to make software better and faster. </h5>
        </div>
        <br/>            
    </>
    )
}
