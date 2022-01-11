import React from 'react';
import img from '../myImages/About.jpg';
import './Styles.css';

const mystyle = {
    height: '70vh',
    width: '85vw'
};

export default function about() {
    return (
            <>
                <div className='container mt-5 mb-4 ms-auto me-auto'>
                    <div className="container mt-5 mb-4 ms-auto me-auto">
                        <span className='display-2'><strong>Hi! </strong></span>
                        <span className='display-6'>Welcome to <strong>India Bussiness Ventures</strong></span>
                        <hr className='bg-dark border-2 border-top border-dark ms-2 me-2'/>
                    </div>
                    <div className="container mt-4 ms-auto me-auto text-center">
                        <img src={img} className="img-responsive" alt="..." style={mystyle}/>
                    </div>
                    <div className='container mt-4 mb-5 ms-auto me-auto '>
                        <p className='fs-4 fw-light mt-4 text-left'><strong>India Business Ventures (IBV) </strong> is a globally dealing business conglomerate. The company started its business first from Market Research and then Business Research and the company is currently dealing in many sectors like Digital marketing, Content creation, Web development, etc. The main objective of the company is to focus on strengthening the social communities globally over the internet. The company is currently operating its operations in the USA, UK, Australia, Canada, and Germany with headquarters situated at Jaipur, Rajasthan. The company is expecting an expansion over other sectors like Brand Management, Business Market Research, Social Media Marketing, etc. The founder, Shreyans Jain, currently working on company human resource development to gain long term success. </p>
                        <br />
                        <p className='fs-4 fw-light mt-4 text-left'>The company has achieved great success in the sector of content writing and is having customers from all over the globe. The company is having a great customer response for its work and the value it is delivering to its customers. The company has already established itself globally and still growing its branches in other countries. The services company is providing currently are:</p>
                        <ul className='ms-3'>
                            <li>
                            <h1 className='fs-3 mt-4 mb-2 ms-2 fw-bold'>Digital Marketing</h1>
                            </li>
                            <li>
                            <h1 className='fs-3 mt-3 mb-3 ms-2 fw-bold'>Web Development</h1>
                            </li>
                            <li>
                            <h1 className='fs-3 mt-3 mb-3 ms-2 fw-bold'>Content Creation</h1>
                            </li>
                            <li>
                            <h1 className='fs-3 mt-3 mb-3 ms-2 fw-bold'>Brand Management</h1>
                            </li>
                            <li>
                            <h1 className='fs-3 mt-3 mb-3 ms-2 fw-bold'>Promotional Campaigns</h1>
                            </li>
                            <li>
                            <h1 className='fs-3 mt-3 mb-5 ms-2 fw-bold'>Business Market Research</h1>
                            </li>
                        </ul>
                        <br />
                        <h1 className='fs-1 mt-2 mb-4 fw-bold text-decoration-underline'>Vision and Mission of IBV</h1>
                        <ul className='ms-auto me-auto'>
                            <li>
                                <h3 className='fs-3 mt-4 mb-2 fw-light text-decoration-underline' >Vision statement of India Business Ventures:</h3>
                                <p className='fs-5 mb-4 fw-light'>We strive to be the standard of greatness, and to create a collaborative, dynamic, and inclusive workplace</p>
                            </li>
                            <li>
                                <h3 className='fs-3 mt-4 mb-2 fw-light text-decoration-underline' >Mission statement of India Business Ventures:</h3>
                                <p className='fs-5 mb-4 fw-light'>The key component of IBV mission is to strengthen social communities, client relations, and build cohesive relationships among core team members.</p>
                            </li>
                        </ul>
                        <p className='fs-5 fw-light mt-5 text-left'>Clients Feedback plays a very important in the business, if the client is not satisfied, all the hard work is of no value. Working with the changing demand of customers’ preferences is a big challenge for businesses to grow. Knowing about every change in customers’ preferences requires a high level of market research and changing according to these preferences requires a good quality of staff inside the business. Our job is to provide business research for different brands across the globe and create content according to the changing business environment. Our main focus is to strengthen the global communities across the globe over the internet and make them being recognised worldwide. We create and maintain online platforms for different businesses and give them a unique style for representing their brands and sharing their products over the internet. </p>
                        <p className='fs-5 fw-light mt-4 text-left'>We are also focusing on strengthening our community by hiring high-quality staff and working on their growth and learning to get the best output for the content. Our team contains mostly youth, as they are the future of our nation. Working with youth gives us new and creative ideas for business development and as they know about the current market demand and the new customer preferences, they contribute a high value to the organisation. The upcoming generation does not need a high level of training for performing their jobs, as they are performing extraordinary and they just need the correct direction to achieve a big goal. We are also conducting some events regularly for releasing the stress of workload over the staff and these events help them to improve their productivity in the organisation and maintain a positive attitude towards the business. These activities keep the staff more refreshed and highly productive. We have conducted some club parties and some small in-office activities on different occasions and at different time intervals.</p>
                        <p className='fs-5 fw-light mt-4 text-left'>We are a community working together at a workplace and creating the content, doing market researches, marketing the clients’ brands and products, designing the brands and managing them over the online platform. We are adding value to the clients business at the online platform.</p>                        
                    </div>   
                </div>
             
            </>
    )
}
