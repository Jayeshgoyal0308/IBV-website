import React from 'react';
import img from '../../myImages/promotional-Campaign.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
};

export default function promotionalCampaigns() {
    return (
        <>
            <img src={img} className="img-responsive" alt="..." style={mystyle}/>
            <h1 className="display-3 text-center fw-bold mt-3">Promotional Campaigns</h1>
            <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
            <br />
            <div className='text-start ms-5 me-5 mb-5'>
                <h5 className='fs-3 mt-2 mb-5'>The company focus on promoting their products through hiring events, by marketing management teams, PR teams making blogs and posters for social media. And the company’s allows to an advertising campaign for advertise their products into the market.</h5>
            </div>
            <br/>            
        </>
    )
}
