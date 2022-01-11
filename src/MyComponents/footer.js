import React from 'react';
import facebook from '../myImages/facebook.png';
import instagram from '../myImages/instagram.png';
import linkedin from '../myImages/linkedin.png';
import twitter from '../myImages/twitter.png';
import './Styles.css';


export default function footer() {
    return (
        
            <footer className="page-footer font-small text-light bg-dark mdb-color pt-4">


                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left mt-3 pb-3">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">India Business Ventures</h6>
                        <p>We are a globally dealing business conglomerate. Our main objective is to focus on strengthening the social communities globally over the internet.</p>
                        <a className="btn btn-primary btn-sm mb-2" href="/about" role="button">Read More</a>
                    </div>


                    <hr className="w-100 clearfix d-md-none"/>


                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                        <p>
                        <a href="digitalMarketing" className='text-decoration-none'>Digital Marketing</a>
                        </p>
                        <p>
                        <a href="/brandManagement" className='text-decoration-none'>Brand Management</a>
                        </p>
                        <p>
                        <a href="/webDevelopment" className='text-decoration-none'>Web Development</a>
                        </p>                        
                        <p>
                        <a href="/promotionalCampaigns" className='text-decoration-none'>Promotional Campaigns</a>
                        </p>
                        <p>
                        <a href="/affiliatedMarketing" className='text-decoration-none'>Affiliate Marketing</a>
                        </p>
                        <p>
                        <a href="/contentCreation" className='text-decoration-none'>Content Creation</a>
                        </p>
                    </div>


                    <hr className="w-100 clearfix d-md-none"/>


                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                        <p>
                        <a href="/about" className='text-decoration-none'>About Us</a>
                        </p>
                        <p>
                        <a href="/services" className='text-decoration-none'>Our Services</a>
                        </p>
                        <p>
                        <a href="/pillars" className='text-decoration-none'>Our pillars</a>
                        </p>
                        <p>
                        <p>
                        <a href="/events" className='text-decoration-none'>Events</a>
                        </p>                            
                        <a href="/contact" className='text-decoration-none'>Contact Us</a>
                        </p>
                        <p>
                        <a href="/carrers" className='text-decoration-none'>Carrers</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p>
                        <i className="fas fa-home mr-3"></i>247, B-C, Frontier Colony, Adarsh Nagar, Jaipur 302004</p>
                        <p>
                        <i className="fas fa-envelope mr-3"></i> j.shreyans007@gmail.com</p>
                        <p>
                        <i className="fas fa-phone mr-3"></i> +91 9530406666</p>
                        <p>
                        <i className="fas fa-print mr-3"></i> +91 8058826666</p>
                    </div>

                </div>

                    <hr/>

<div className="footer_copy">
<div className="container">
    <div className="column one">

                            
        <div className="copyright">
            &copy; 2021 IBV. All Rights Reserved.					
            <br /><br />
        <span>
            <a href="https://www.linkedin.com/company/india-business-ventures">
                <img src={facebook} width='50px' height='50px'/>
            </a>
            <span> </span>
            <a href="https://www.linkedin.com/company/india-business-ventures">
                <img src={linkedin} width='50px' height='50px'/>
            </a>
            <span> </span>
            <a href="https://www.linkedin.com/company/india-business-ventures">
                <img src={twitter} width='50px' height='50px'/>
            </a>
            <span> </span>
            <a href="http://instagram.com/indiabusinessv">
                <img src={instagram} width='50px' height='50px'/>
            </a>
        </span>

        </div>
        <br />
    </div>
</div>
</div>
                </div>

            </footer>
    )
}









