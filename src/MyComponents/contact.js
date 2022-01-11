import React from 'react';

export default function contact() {
    return (
            <>
                <div class="container ms-auto me-auto mt-5 mb-5">
                    <section className="mb-4">

                        <h1 className="h1-responsive display-3 fw-bold text-center">Contact  Us</h1>
                        <p className="text-center fs-4 fw-light w-responsive ms-auto mt-5 mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you.</p>

                        <div className="row">
                            <div className="col-lg-9 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                    <div className="row mt-5 mb-5">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control" placeholder='Your name'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5 mb-5">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control" placeholder='Your email'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5 mb-5">
                                        <div className="col-md-12">
                                            <div className="md-form mb-0">
                                                <input type="text" id="subject" name="subject" className="form-control" placeholder='Subject'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-5 mb-5">

                                        <div className="col-md-12">

                                            <div className="md-form">
                                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='Your message'></textarea>
                                            </div>

                                        </div>
                                    </div>

                                </form>

                                <div className="d-grid gap-2 mb-5">
                                    <button class="btn btn-primary" type="button">Send</button>
                                </div>
                                <div className="status"></div>
                            </div>

                            <div className="col-lg-3 text-center">
                                <ul className="list-unstyled mb-0">
                                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                        <p className='fs-2 fw-light'>247, B-C, Frontier Colony, Adarsh Nagar, Jaipur 302004</p>
                                    </li>

                                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                        <p className='fs-4 fw-light'>+91 9530406666</p>
                                        <p className='fs-4 fw-light'>+91 8058826666</p>
                                    </li>

                                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                        <p className='fs-4 fw-light'>j.shreyans007@gmail.com</p>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>
                </div>

            </>
    )
}