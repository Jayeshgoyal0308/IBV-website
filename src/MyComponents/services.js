import React from 'react';
import c1 from '../myImages/c1.jpg';
import c2 from '../myImages/c2.jpg';
import c3 from '../myImages/c3.jpg';
import c4 from '../myImages/c4.jpg';
import c5 from '../myImages/c5.jpg';
import c6 from '../myImages/c6.jpg';

const mystyle = {
    height: '25rem',
    width: '50vw',
};

export default function services() {
    return (
        <>
         
            <div className="content mt-5 mb-5 text-center">
                <h1 className='text-center mt-5 mb-3 display-3' style={{fontFamily:'Brush Script MT,cursive'}}>At Your Services</h1>
                <div className="row mt-0 mb-0 ms-0 me-0">
                    
                        <div className="col-sm-12 text-center mt-3 mb-3">
                            <div className="card ms-auto me-auto text-center">
                                <img src={c1} className="card-img-top ms-auto me-auto" alt="..." style={mystyle}/>
                                <div className="card-body">
                                    <h3 className="card-title">Digital Marketing</h3>
                                    <p className="card-text">The company provides digital marketing. We called online marketing. We promote things like brands, content to connect customers using social media and through the internet. </p>
                                    <a href="/digitalMarketing" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 text-center mt-3 mb-3">
                            <div className="card ms-auto me-auto text-center">
                                <img src={c2} className="card-img-top ms-auto me-auto" alt="..." style={mystyle} />
                                <div className="card-body">
                                    <h3 className="card-title">Brand Management</h3>
                                    <p className="card-text">The company’s make their use of techniques to increase the product of productivity and make it effective through website and media. And the company brand manager innovation our product and creates the brand. It chances to increase the value of the product or brand of a company.</p>
                                    <a href="/brandManagement" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 text-center mt-3 mb-3">
                            <div className="card ms-auto me-auto text-center">
                                <img src={c3} className="card-img-top ms-auto me-auto" alt="..." style={mystyle} />
                                <div className="card-body">
                                    <h3 className="card-title">Content Creation</h3>
                                    <p className="card-text">The company is contributing information through media especially digital media and this company makes our content and publishes it on other websites to promote our products into blogging, online digital media and the company makes content relatable and understandable.</p>
                                    <a href="/contentCreation" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-12 text-center mt-3 mb-3">
                            <div className="card ms-auto me-auto text-center">
                                <img src={c4} className="card-img-top ms-auto me-auto" alt="..." style={mystyle}/>
                                <div className="card-body">
                                    <h3 className="card-title">Web Development</h3>
                                    <p className="card-text">The company’s web design is extremely good and it's maintained by the company technical team. The company technical team designs the best software like with java, and programming languages like c++ and python, etc. and it’s also developed some programs to make software better and faster.</p>
                                    <a href="/webDevelopment" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 text-center mt-3 mb-3">
                            <div className="card ms-auto me-auto text-center">
                                <img src={c5} className="card-img-top ms-auto me-auto" alt="..." style={mystyle}  />
                                <div className="card-body">
                                    <h3 className="card-title">Promotional Campaigns</h3>
                                    <p className="card-text">The company focus on promoting their products through hiring events, by marketing management teams, PR teams making blogs and posters for social media. And the company’s allows to an advertising campaign for advertise their products into the market.</p>
                                    <a href="/promotionalCampaigns" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 text-center mt-3 mb-3">
                            <div className="card ms-auto me-auto text-center">
                                <img src={c6} className="card-img-top ms-auto me-auto" alt="..." style={mystyle} />
                                <div className="card-body">
                                    <h3 className="card-title">Affiliate marketing</h3>
                                    <p className="card-text"> The company promotes its products to its third party and pays a commission fee to find ways to promote the company. Its increase the prominence of the company by internet through and its pay for the performance.</p>
                                    <a href="/affiliatedMarketing" className="btn btn-primary mt-5">Read More</a>
                                </div>
                            </div>
                        </div>                    
                </div>
            </div>
            </>
    )
}