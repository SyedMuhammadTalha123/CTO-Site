import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidebar from './Sidebar';
import ReadMoreReact from 'read-more-react';
// import { Row } from 'react-bootstrap';

class Aboutme extends React.Component {

    render() {
        return (
            <div className="Container-fluid   background  ">
                <div className="row   ">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>

                    <div className=" col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 pt-5 col-xs-11  side">


                        <h2 className="pb-5 pl-3"><b>SOME PERSONAL STUFF</b></h2>
                        <ul className="li">
                            <li>Verifying good UI/UX design,</li><br />
                            <li>Leading/co-developing the back-end and front-end,</li><br />
                            <li>Setting up the CI/CD,</li><br />
                            <li>Mentoring the team,</li><br />
                            <li>Estimating tasks,</li><br />
                            <li> Researching possible techs,</li><br />
                            <li>Leading, launching and monitoring the project</li><br />
                        </ul>
                        <h2 className="pb-5 pl-3"><b>TECHNOLOGY BACKGROUND</b></h2>
                        <div className="li pl-3">
                            <div className="row pl-3">
                                <p><b>Languages:</b></p>
                                <p className="ml-4 pl-1">Python, Javascript, Java, Html5, Css3</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Frameworks:</b></p>
                                <p className="ml-3 "> Django, Flask, Angular2+, Serverless(lambda)</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Libraries:</b></p>
                                <p className="ml-5">  Django-rest-framework, Celery, RabbitMQ, Web RTC,Material-design, Bootstrap</p>
                            </div>

                            <div className="row pl-3">
                                <p><b>Databases:</b></p>
                                <p className="ml-4 pl-2">  Postgresql, Mysql, Mongodb, DynamoDB</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Testing:</b></p>
                                <p className="ml-5 pl-2">Selenium, Lettuce, Apache Jmeter,</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Cloud:</b></p>
                                <p className="ml-5 pl-4">     AWS, SapCloud, Heroku,</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Deployments:</b></p>
                                <p className="ml-2">Docker, Jenkins</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Patterns:</b></p>
                                <p className="ml-5">   Signle Sign On, OAUTH, MicroServices, Multi Targated apps,</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Management: </b></p>
                                <p className="ml-1">Scrum, Atlassian Stack( Jira, Bitbucket, HipChat), GSuite</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Industry: </b></p>
                                <p className="ml-5">  Social Applications, TeleHealth , LeagalTech,</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Verticals:</b></p>
                                <p className="ml-5">  Digital Transaction Management, Web Push Notifications</p>
                            </div>
                            <div className="row pl-3">
                                <p><b>Other: </b></p>
                                <p className="ml-5 pl-4">Public Key Infrastructure, Digital Signature, Digitizing Legal Document,</p>
                            </div>
                        </div><br />
                        <h2 className=" pl-3 "><b>JOURNEY UPTILL NOW</b></h2>
                        <div className="row mt-lg-5" >
                            <div className="col-lg-5 ">
                                <div className="row-card">
                                    <div className="column-card">
                                        <div className="card arrow-right">
                                            <p>Position  Nov 2018 → Current (2 years, 5 months)</p>
                                            <p><b>Lead Engineer (Remote/Contract) at Get Push Monkey</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 " style={{ width: "80px" }}>Web-push</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2" style={{ width: "80px" }}>Django</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2" style={{ width: "80px" }}>Lambda</span>
                                                <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "80px" }}>Jenkins</span>
                                                <span className="badge badge-secondary ml-sm-3 mt-4 p-2" style={{ width: "80px" }}>Docker</span>
                                                <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "176px" }}>Serverless-framework</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl mr-5"style={{height:"600px"}}>
                                <img src="../b.jpg" width="40px"className="mr-3 mt-5" height="40px" style={{  position:"absolute",marginLeft:"-20px"}} />
                                <img src="../b.jpg" width="40px" height="40px" style={{ marginTop:"200px", position:"absolute",marginLeft:"-20px"}} />
                            </div>
                            <div className="col-lg-5 col-sm-12 mt-lg-5 ">
                                <div className="row-card mt-lg-5 ">
                                    <div className="column-card mt-lg-5">
                                        <div className="card arrow-left ">
                                            <p>Position  Aug 2017 → Jun 2019 (1 year, 11 months)</p>
                                            <p><b>Chief Technology Officer at Wukla</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Django</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>angular</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>pki</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "136px" }}>digital-signature</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>hana</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "80px" }}>php</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row mb-lg-5 margin-card">
                            <div className="col-lg-5 col-sm-12  ">
                                <div className="row-card ">
                                    <div className="column-card">
                                        <div className="card arrow-right ">
                                            <p>Position  May 2017 → Aug 2017 (4 months)</p>
                                            <p><b>Application Developer at Health at Hand</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Django</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "150px" }}>Django-rest-framework</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Webrtc</span>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl mr-5 ">
                                <img src="../b.jpg" width="40px"className="mr-3 mt-5" height="40px" style={{  position:"absolute",marginLeft:"-20px"}} />
                                <img src="../b.jpg" width="40px" height="40px" style={{ marginTop:"200px", position:"absolute",marginLeft:"-20px"}} />
                            </div>
                            <div className="col-lg-5 mt-lg-5 col-sm-12 ml-lg-5">
                                <div className="row-card mt-lg-5">
                                    <div className="column-card mt-lg-5 mb-sm-5">
                                        <div className="card arrow-left">
                                            <p>Position  Jan 2017 → May 2017 (5 months)</p>
                                            <p><b>Python Engineer (Out-Source Employee ) at Red Math Pvt Ltd.</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>jenkins</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>python</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>selenium</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>lettuce</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>xpath</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4" style={{ width: "80px" }}>scrum</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row margin-card">
                            <div className="col-lg-5 ">
                                <div className="row-card">
                                    <div className="column-card">
                                        <div className="card  arrow-right ">
                                            <p>Position  Apr 2016 → May 2017 (1 year, 2 months)</p>
                                            <p><b>Software Engineer at Mezino Technology LLC</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "136px" }}>Selenium-webdriver</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Lettuce</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Django</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Heroku</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "100px" }}>Amazon-ec2</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4" style={{ width: "80px" }}>Shopify</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "146px" }}>Django-rest-framework</span>
                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact 
                                                    text="Maintaining and developing new features for Python/Django Project. Rapid rest API development using Django-rest-framework. Behavior Driven Testing for Web Services in python. Various API integration for Shopify CMS."
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-primary mt-3"style={{backgroundColor:"gray"}}>ReadMore</button>} />
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl mr-5"style={{height:"600px"}}>
                                <img src="../b.jpg" width="40px"className="mr-3 mt-5" height="40px" style={{  position:"absolute",marginLeft:"-20px"}} />
                                <img src="../b.jpg" width="40px" height="40px" style={{ marginTop:"200px", position:"absolute",marginLeft:"-20px"}} />
                            </div>
                            <div className="col-lg-5 mt-lg-5 col-sm-12 ml-lg-5   ">
                                <div className="row-card mt-lg-5 ">
                                    <div className="column-card mt-lg-5  ">
                                        <div className="card mt-lg-5 arrow-left">
                                            <p>Position  May 2015 → Mar 2016 (11 months)</p>
                                            <p><b>Incubate + Startup CTO at The Nest i/o</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Django</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "146px" }}>Django-rest-framework</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Angularjs</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Android</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Css3</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "80px" }}>Html5</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4" style={{ width: "80px" }}>Heroku</span>
                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact 
                                                    text="Worked on Django and AngularJS alongside other team members. Worked individually on Android application and Facebook’s Parse. Working with organizational constructs with the other co-founders. Leading a team (two developers and a designer) to meet startup deadlines. Meeting with the Investors for funding the product. Listening and adapting critical user experience about the product. "
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-primary mt-3"style={{backgroundColor:"gray"}}>ReadMore</button>} />
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mt-lg-2">
                                <div className="row-card ">
                                    <div className="column-card ">
                                        <div className="card mb-lg-5 arrow-right ">
                                            <p>Education  2011 → 2015</p>
                                            <p><b>B.S. Computer Science, University of Bradford</b></p>
                                            <div className="row">
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Java</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "60px" }}>C++</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "80px" }}>Prolog</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4 " style={{ width: "80px" }}>Haskell</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4 " style={{ width: "100px" }}>Matlab</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "146px" }}>Twitter-bootstrap</span>
                                                <span className="badge badge-secondary ml-sm-3 p-2 mt-4" style={{ width: "80px" }}>Html</span>
                                                <span className="badge badge-secondary ml-sm-5 p-2 mt-4" style={{ width: "60px" }}>Css</span>
                                            </div>
                                            <div className="mt-3">
                                                <ReadMoreReact 
                                                    text="Dean’s Honor Award

                                                    University of Oxford Summer School Selection
                                                    
                                                    Merit Scholarship Award "
                                                    min={50}
                                                    ideal={55}
                                                    max={60}
                                                    readMoreText={<button className="btn btn-primary mt-3" style={{backgroundColor:"gray"}}>ReadMore</button>} />
                                                    
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vl mr-5"style={{height:"600px"}}>
                                <img src="../log.jpg" width="40px"className="mr-3 mt-5" height="40px" style={{  position:"absolute",marginLeft:"-20px"}} />
                               
                            </div>
                        </div>

                    </div>


                </div>


            </div >
        );
    }
}
export default Aboutme