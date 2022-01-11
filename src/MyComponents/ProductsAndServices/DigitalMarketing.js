import React from 'react';
import img from '../../myImages/digital-Marketing.jpg';
import '../Styles.css';

const mystyle = {
    height: '70vh',
    width: '100vw'
};

export default function digitalMarketing() {
    return (
            <>
            <img src={img} className="img-responsive" alt="..." style={mystyle}/>
            <h1 className="display-3 text-center fw-bold mt-3">Digital Marketing</h1>
            <hr className="bg-success border-2 border-top border-success ms-5 me-5"></hr>
            <br />
            <div className='text-start ms-auto me-auto'>
                <h5 className='fs-3 mt-2 mb-5'>The company provides digital marketing. We called online marketing. We promote things like brands, content to connect customers using social media and through the internet. And there are two types of digital marketing that we have: - </h5>
                <ul>
                    <li>
                        <h1 className='fs-1 mt-5 mb-3'>Content marketing</h1>
                        <p className='fs-4'>The company of SEO is a major factor in content marketing of distribution of valuable brands of content to the target audience. But it is a different kind of marketing / advertising.</p>                  
                    </li>
                    <li>
                        <h1 className='fs-1 mt-5 mb-3'>Social media marketing</h1>
                        <p className='fs-4'>The company promotes brands by social media threw like Facebook, Twitter, Instagram, and their content also.to reach more people than ever. And the content and products should also promote on social media to attract the audience and convey to purchase it.</p>
                        <ul className='mt-4 mb-4'> 
                            <li>
                                <h3 className='fs-3'>  SEO (Search engine optimization)</h3>
                                <p className='fs-5'>  The company also provides SEO. It is promoting our website through search engines like google, Binge, yahoo. The company has the best keyword quality and best site front-end design. it has content creation and web development</p>
                            </li>
                            <li>
                                <h3 className='fs-3'>Content creation</h3>
                                <p className='fs-5'>The company is contributing information through media especially digital media and this company makes our content and publishes it on other websites to promote our products into blogging, online digital media and the company makes content relatable and understandable</p>
                                </li>
                            <li>
                                <h3 className='fs-3'>Web development</h3>
                                <p className='fs-5'>The company's web design is extremely good and it's maintained by the company technical team.The company technical team designs the best software like with java, and programming languages like c++ and python, etc. and it's also developed some programs to make software better and faster.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1 className='fs-1 mt-5 mb-3'>Content marketing</h1>
                        <p className='fs-4'>The company of SEO is a major factor in content marketing of distribution of valuable brands of content to the target audience. But it is a different kind of marketing / advertising.</p>                  
                    </li>                    
                </ul>
            </div>
            <br /><br /><br /><br />
            </>
    )
}
