import React from 'react';
import './Styles.css';
import img1 from '../myImages/p1-min.jpg';
import img2 from '../myImages/p2-min.jpg';
import img3 from '../myImages/p3-min.jpg';
import img4 from '../myImages/p4-min.jpg';

const mystyle={
    height: "16rem",
    width: "16rem"
}

export default function events() {
    return (
            <>
                <div className='container ms-auto me-auto mt-5 mb-5'>
                    <div className='text-start'>
                        <h1 className='fs-2'>A New Legacy</h1>
                        <p>India Business Ventures (IBV) conducted an event party at Levels Club in Jaipur. The event party was held on 15th December 2021. The party was held with the motive of relaxing and giving a break over the workload to the team members and building an understanding between the employees and making them familiar with each other. IBV is in the field of content creation, marketing and web development. Every different level has different working styles and coordination between all the levels is important to perform as a team. For making the coordination between them, IBV has conducted an event to make the employees spend time with each other and develop understandings. At levels club, employees rocked over the floor with the founders, Mr Shreyans Jain and Miss Shruti Gupta, and enjoyed the beverages at the party. At the dance party, IBV has offered Pre-Placement Offers (PPO) to some of their interns based on their performance. IBV also awarded employees with Mr and Miss Personality of the Day and also Mr and Miss Charm of the eve. Mr Personality of the day was awarded to Mr Gauransh Sharma, who performed as a whistleblower for everyone to come on the dance floor and remove their shyness and nervousness and break the dance floor. Miss personality of the day award was given to Miss Bhoomika Balani, who is an ideal employee in the office and she performed her traditional dance steps on the club’s dance floor and won everyone hearts by showing the perfection of her personality. The award for Mr Charm of the eve was won by Mr Dheeraj Kumar, who is an awesome achiever in the office and also had rocked the dance floor in the club and made everyone admire his dance steps and kind nature. Miss Charm of the eve award was given to Miss Anjali, who is a very hardworking employee of the organisation, she always wears a smile on her face and cheers up everyone in the company and also kept everyone happy during the event. Everyone enjoyed the celebration of A New Legacy at the club and the event was ended with a great dinner and desserts.</p>
                    </div>
                    <div className='text-start'>
                        <h1 className='fs-2'>The Christmas Party-2021</h1>
                        <p>IBV has conducted a small activity on the eve of Christmas. IBV divided their employees into three teams and organised a competition between them. The competition was for doing the best decoration on the theme of Christmas. The first team, Team A, was led by Miss Bhoomika Balani, the second team, Team B, was led by Mr Dheeraj Kumar and the last third team, Team C was led by the Co-founder Miss Shruti Gupta. Team A was including Miss Vishwas Gautam, Mr Rohan Thomas and Mr Gopal Khatri. Team B was having Mr Gauransh Sharma, Mr Ankit Dayma and Mr Pranav Jain. Team C included Miss Gehna, Miss Anjali and Miss Akshita Gupta. All the teams had done a very well job and decorated the IBV’s premises so well and pretty. In Team A, Miss Bhoomika planned to draw a Christmas tree with some LED lights and to make a Santa Claus out of the waste cardboard and cotton. They blended the Santa on the front wall of the office. Apart from this Bhoomika planned to narrate the story of Jesus Christ by writing this story on small pieces of cardboard and hanging them on the wall. On the other side, Team B was doing something fun. They made their decoration cute by only using balloons on the Christmas theme. They tied their balloons on the wall and made a Christmas tree out of it. They also wrote the names of all the employees and the interns on different balloons. They showed the value for each and every member to build a large empire by their balloon model. And the last team, Team C, have made the birthplace of Jesus Christ and they made Christmas Star and the Christmas Tree with LED lights and decorated the whole room with balloons. They showed the main event of Christmas and made everyone know the reason for celebrating Christmas and know the birth circumstances of Jesus Christ. After completion of the decoration, the voting was held for choosing a winning team. On counting the votes, Team A got 4 votes, Team B also got 4 votes and Team C won the competition by getting 5 votes. All the team members won the Christmas present from the CEO Mr Shreyans Jain. The event was ended with a cake-cutting ceremony and a small photo session.</p>
                    </div>
                    <div className='row text-center'>
                        <div className='container-fluid col md-3'>
                            <img src={img1} alt="" style={mystyle}/>
                        </div>
                        <div className='container-fluid col md-3'>
                            <img src={img2} alt="" style={mystyle}/>
                        </div>
                        <div className='container-fluid col md-3'>
                            <img src={img3} alt="" style={mystyle}/>
                        </div>
                        <div className='container-fluid col md-3'>
                            <img src={img4} alt="" style={mystyle}/>
                        </div>
                    </div>
                </div>
            </>
    )
}
