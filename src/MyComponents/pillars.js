import React from 'react';
import img1 from '../myImages/Picture1.jpg';
import img2 from '../myImages/Picture2.jpg';
import img3 from '../myImages/Picture3.jpg';
import img4 from '../myImages/Picture4.jpg';
import img5 from '../myImages/Picture5.jpg';
import img6 from '../myImages/Picture6.jpg';
import img7 from '../myImages/Picture7.jpg';
import img8 from '../myImages/Picture8.jpg';
import img9 from '../myImages/Picture9.jpg';
import img10 from '../myImages/Picture10.jpg';
import img11 from '../myImages/Picture11.jpg';
import img12 from '../myImages/Picture12.jpg';
import './Styles.css';

const mystyle = {
    height: '50vh',
    width: '100%'
};

const mystyle1 = {
    height: '40%',
    width: '100%'
};
const mystyle2 = {
    height: '130vh'
};

export default function pillars() {
    return (
            <>
                <br />
                {/* <h1 className='display-2 mt-2 text-center'>Our Team</h1>
                <br />
                <hr className='bg-dark border-2 border-top border-dark ms-5 me-5'/> */}
                <br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
                {/* <div class="container mb-5">
                    <div class="row ms-auto mt-2 mb-2 me-auto text-center">
                        <div class="container-md col-lg">
                            <img src={img1} style={mystyle}/>
                            <h2 className="text-center"><strong>SHREYANS JAIN</strong></h2>
                            <h3>Co-Founder, India Business Ventures</h3>
                            <p>He is born as well as raised up in Ajmer. He has done his graduation from Birla Institute of Technology (BIT). His post-graduation is done in form of PGDM (Marketing) from Xavier institute of management (XIMJ). With an experience of more than 3 years, he started IBV. He is Business head and CEO of India Business Venture. His expertise is in Client relation and Business Development. He is a travel freak as well as a sports lover. </p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img2} style={mystyle}/>
                            <h2 className="text-center"><strong>SHRUTI GUPTA</strong></h2>
                            <h3>Co-Founder, India Business Ventures</h3>
                            <p>She has been born and raised up in Chhattisgarh by her parents. She has done his graduation i.e. LLB from Rajasthan University, Jaipur. Her post-graduation is done in form of PGDM (Marketing) from XIMJ. She is co-founder of India Business Venture((IBV). Her expertise is in Business and Market research as well as People Management. She loves to explore and learn new things every day. She had worked with 3 companies in past and then founded IBV.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img3} style={mystyle}/>
                            <h2 className="text-center"><strong>ANJALI SHARMA</strong></h2>
                            <h3>Business Development Executive</h3>
                            <p>Anjali has creative skills and is self-motivated. She has completed her MBA. And with an experience of one year, she has joined IBV as Business Development Executive. She thinks that the company’s head are supportive in nature, since the day she is working in this company she has found a better version of herself know and with this she is fortunate to work with such a friendly and enthusiastic people. Her clients are very important for her. </p>
                        </div>
                    </div>
                    <div class="row ms-auto mt-2 mb-2 me-auto text-center">
                        <div class="container-md col-lg">
                            <img src={img4} style={mystyle}/>
                            <h2 className="text-center"><strong>ANMOL PAHWA</strong></h2>
                            <h3>Sr. Research Analyst</h3>
                            <p>Anmol Pahwa, having a range of interpersonal skills such as positive attitude, empathy, reliability, management skills etc., has previously worked as a technical content writer over freelancing platform. Heading towards his determined goals and being constant, Anmol chose to work along with a well reputed organization like IBV, instead of being a freelancer for always. And it’s been a while now; Anmol has been working along with IBV and its skillful, well organized, manageable and admirable staff members, where he has successfully developed a number of personality traits to carry out best out of what he has. With the help of supportive staff members of IBV, Anmol is now able to recover the areas, in which he was seemed to be lagging. Alongside this, Anmol loves to explore nature, haunted places, communicating with unknowns and exploring best food places around.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img5} style={mystyle}/>
                            <h2 className="text-center"><strong>DHEERAJ KUMAR</strong></h2>
                            <h3>Sr. Research Analyst</h3>
                            <p>Dheeraj who has creative skills and is self-motivated for the first time he had worked as a service advisor in Shakti Hundai. Changed his passion towards content writing and had started working in IBV where he had been supported by the heads, his skills have been developed as well as improved, even learned how to work as a content writer. When he was working with other pillars of IBV it gave him good experience and were found supportive in nature. His hobbies are travelling, interest in sports and love to ride bike.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img6} style={mystyle}/>
                            <h2 className="text-center"><strong>BOOMIKA BALANI</strong></h2>
                            <h3>Sr. Research Analyst</h3>
                            <p>Bhoomika who is fun loving and self-motivated is interested in writing and with that one day through a website she got to know about IBV in which there was a job as a content writer and she applied and started working. She felt a happy environment when she is working here, found exposure to learning and fun activity. The performance appraisal boosted her motivation to work hard. She is looking forward to work with IBV as long as it’s possible for her. Her hobbies are listening music, watching movies and self-time.</p>
                        </div>
                    </div>
                    <div class="row ms-auto me-auto mt-2 mb-2 text-center">
                        <div class="container-md col-lg">
                            <img src={img7} style={mystyle}/>
                            <h2 className="text-center"><strong>GOURANSH SHARMA</strong></h2>
                            <h3>Research Analyst</h3>
                            <p>Gouransh who has creative mindset and thinking has done B.sc, handled management work in RSLDC center, handled own family business. With that he became a content development in Solve lancer and after that started working in the field of content writing in IBV. His hobbies are dancing, playing Cricket, singing and cooking.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img8} style={mystyle}/>
                            <h2 className="text-center"><strong>VISHWAS GAUTAM </strong></h2>
                            <h3>Research Analyst</h3>
                            <p>Vishwas who is a honest person, patient and is self-motivated she has done B.com with LLB then she has completed with LLM. She founded that IBV is the best company to work in as well as she found that it has provided her opportunities to develop skills and knowledge. She thinks that the company’s head are supportive in nature, since the day she is working in this company she has found a more better version of herself know and with this she is fortunate to work with such a friendly and enthusiastic people. For her it was a great journey and she had learned many things. She thinks if anyone wishes to improve or want good skills, good career growth then IBV is a perfect place to work with. Her hobbies are cooking food, listening to music, gardening.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img9} style={mystyle}/>
                            <h2 className="text-center"><strong>GEHNA MISHRA</strong></h2>
                            <h3>Business Development Executive</h3>
                            <p>Gehna who has good control on her emotion, can work in any kind of environment and she is introvert and love to write as well as she has done Bachelor’s in Journalism and mass communication from Amity Univeristy, Rajasthan. As she is an intern and had learned lots of new stuff and she has found that there was group of people working altogether as a supportive team. Her hobbies are modelling, listening songs, reading novels, horse riding and belle dance.</p>
                        </div>
                    </div>
                    <div class="row ms-auto me-auto mt-2 mb-2 text-center">
                        <div class="container-md col-lg">
                            <img src={img10} style={mystyle}/>
                            <h2 className="text-center"><strong>ROHAN THOMAS CHERAIN</strong></h2>
                            <h3>Research Analyst</h3>
                            <p>Rohan Thomas who is calm and patient has done B.A. (Hons) in English from University of Rajasthan. He then had completed his masters (English) in department of English from University of Rajasthan. He had worked as a free-lancer content writer before joining IBV as a academic content writer. He enjoyed the work culture of IBV as well as founded that it was a right balance of fun and work. He also felt that all our pillars of IBV are great and heads of company work as a leader for him which he seems is awesome.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img11} style={mystyle}/>
                            <h2 className="text-center"><strong>ANKIT DAYMA</strong></h2>
                            <h3>Research Analyst</h3>
                            <p>Ankit who is creative and self-motivated has done BBA.  As being a academic content writer with IBV as well as a fresher he is open to new experiences. He loves to work at IBV. His Hobbies are travelling and watching movies.</p>
                        </div>
                        <div class="container-md col-lg">
                            <img src={img12} style={mystyle}/>
                            <h2 className="text-center"><strong>GOPAL KHATRI</strong></h2>
                            <h3>Graphic Designer</h3>
                            <p>Gopal who is calm in nature, positive attitude for his work and having deep thinking for subjects is planning for B.com and is pursuing CA as well. He seems that he has provided with a supportive team with whom he is working as well the colleagues encourages him for his work in the organization. He had faced new challenges at the time of his work which leads to his self-improvement. His hobbies are reading books.</p>
                        </div>
                    </div>

                </div> */}
            </>
    )
}