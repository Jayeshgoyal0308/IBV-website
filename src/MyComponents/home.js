import React from 'react';
import './Home.css';
import img0 from '../myImages/img0.jpg';
import img1 from '../myImages/img1.jpg';
import img2 from '../myImages/img2.jpg';
import c1 from '../myImages/c1.jpg';
import c2 from '../myImages/c2.jpg';
import c3 from '../myImages/c3.jpg';
import c4 from '../myImages/c4.jpg';
import c5 from '../myImages/c5.jpg';
import c6 from '../myImages/c6.jpg';

export default function home() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img0} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Promote Your Business Online</h3>
                            <p>Reach out to a large audience and expand your business</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Grow Your Brand Value across the Globe</h3>
                            <p>Let your brand styled and managed uniquely to get recognised all over the world</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Simplify Your Decision Making through Market Research</h3>
                            <p>Know more about your customers and their changing preferences</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <br />
            <div className='ms-3 me-3 mt-4 mb-4'>
                {/* <h1>Lorem ipsum dolor sit amet.</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non accusantium nobis quia odio nulla? Illum consequuntur cumque eligendi labore veritatis autem voluptatum fuga accusamus natus ullam quo adipisci ex earum nesciunt quia, optio expedita iusto saepe nisi atque ipsam cum minima. Tenetur aut voluptas aliquam ratione, fugit eaque provident sunt nostrum, dolorem distinctio neque inventore eum rerum aspernatur soluta eius dolores rem saepe illum eos nisi, iste veniam sequi. Fugit, quod. Repellendus, quasi ullam tempora dignissimos delectus obcaecati fugit excepturi ipsam, eum possimus, quae voluptates libero eos consectetur autem culpa quam neque eveniet dicta ex illum placeat explicabo inventore nihil. Non obcaecati perferendis facere rerum error quos debitis distinctio. Nam reiciendis at beatae exercitationem suscipit corrupti nesciunt excepturi quas tenetur! Dicta corrupti nobis animi nam dolor veritatis aliquam placeat ex! Ipsam, possimus. Ea maiores laudantium distinctio saepe quod eligendi ipsam vel quibusdam, ducimus impedit illo voluptas. Quae distinctio facere minus porro quod, nostrum reiciendis id ex eligendi deserunt perferendis in molestias veniam! Minus, id nobis! Repellat sunt quasi in corporis distinctio non dignissimos suscipit aperiam inventore est dolorem harum porro, assumenda enim aspernatur vero maxime dolor aliquam blanditiis eos autem! Cupiditate minus incidunt animi sed labore, laborum ea reiciendis esse consectetur natus minima commodi veniam nihil culpa officiis deleniti impedit obcaecati autem sint voluptatum nesciunt sequi ab rem tempora? Quam cupiditate accusamus quas enim atque nulla in, rem nemo quisquam ab, aliquam repudiandae exercitationem reiciendis fugiat distinctio corporis! Saepe, necessitatibus ea. Necessitatibus impedit voluptas reiciendis quisquam enim facere error obcaecati cumque labore ut cum ipsam earum dolore doloremque eveniet, vel numquam, rerum deserunt ipsa quae maiores mollitia blanditiis vero. Facere nemo laborum sapiente quasi officia! Aut repudiandae distinctio nesciunt expedita odio quod aliquam possimus. Iste hic in incidunt saepe eligendi odit architecto qui porro voluptatum reprehenderit autem, sit aliquid.</p>        */}
                <p className='fs-5 fw-light mt-4 text-left'><span className='fs-2'>India Business Ventures (IBV) </span>is a global business conglomerate dealing in digital fields of market research, content creation, brand management and marketing. We are working on the motto of moving towards excellence and helping our clients to gain more expertise in the online platform and get recognised all over the world. We are globally dealing with clients for their needs in the digital ground for the expansion and maintenance of their business on the online platforms. We help them in the development of their websites, online marketing of their business, managing their customer relations and carrying various market researches. Currently, we are operating in the USA, UK, Canada, Australia, and Germany with headquarters situated in Jaipur, India. We are working with different brands across the globe and creating content and marketing them by doing their business researches. Client’s satisfaction is the main objective, we are working on getting feedback from the customers and the ways to correct them if they are not okay with the services.</p>
            </div>

            <div className="content mt-5 mb-5 text-center">
                <h1 className='text-center mt-5 mb-5 display-3'>What we do?</h1>
 
                <div className="row mt-4 mb-4 ms-auto me-auto">
                    
                        <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={c1} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Digital Marketing</h3>
                                    <p className="card-text">The company provides digital marketing. We called online marketing. We promote things like brands,content to connect customers using social media and through the internet.</p>
                                    <a href="/digitalMarketing" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={c2} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Brand Management</h3>
                                    <p className="card-text">The company make their use of techniques to increase the productivity and make it effective through website and media. And the company brand manager innovates our product.</p>
                                    <a href="/brandManagement" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={c3} className="card-img-top" alt="..." style={{height:'22rem'}} />
                                <div className="card-body">
                                    <h3 className="card-title">Content Creation</h3>
                                    <p className="card-text">The company is contributing information through media especially digital media and this company makes our content and publishes it on other websites to promote our products.</p>
                                    <a href="/contentCreation" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="row mt-4 mb-4 ms-auto me-auto">
                
                        <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={c4} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Web Development</h3>
                                    <p className="card-text">The company's web design is extremely good and it's maintained by the company technical team. The company technical team designs the best software with programming languages like java , c++ and python , etc..</p>
                                    <a href="/webDevelopment" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={c5} className="card-img-top" alt="..." style={{height:'22rem'}} />
                                <div className="card-body">
                                    <h3 className="card-title">Promotional Campaigns</h3>
                                    <p className="card-text">The company focus on promoting their products through hiring events,by marketing management teams,PR teams making blogs and posters for social media and company also allows advertising campaigns in the market.</p>
                                    <a href="/promotionalCampaigns" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={c6} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Affiliate marketing</h3>
                                    <p className="card-text">The company promotes its products to its third party and pays a commission fee to find ways to promote the company.Its increase the prominence of the company by internet through and its pay for the performance.</p>
                                    <a href="/affiliatedMarketing" className="btn btn-primary mt-4">Read More</a>
                                </div>
                            </div>
                        </div>
                    
                </div>

            </div>
        </>
    )
}


