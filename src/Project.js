
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
class Project extends React.Component {
    render() {
        return (
            <div className="Container-fluid background">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 col-xs-12 side">
                        <div className="row">
                            <div className=" col-lg-7 col-sm-12 col-md-12">
                                <h2 className="pt-5 "><li>Project Manager/Lead Engineer</li></h2>
                                <a href="https://getpushmonkey.com/" className="pl-lg-5"style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Push Monkey</a>
                            </div>

                        </div>
                        
                        <div className="row ">
                            <div className="col-sm-12 col-lg-10 col-md-12" style={{ textAlign: "justify", fontSize: "18px" }}>


                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">I am responsible for leading remote team and getting product shipped and delivered smoothly. My
                                   responsibilities include DevOps, System Scalability, Technical Support for clients, Managing different
                                  plugins on WooCommerce, Shopify and magneto.

                                
                                </p>

                            </div>

                        </div>

                        <div className="row">
                        <div className=" col-lg-7 col-sm-12 col-md-12">
                                <h2 className="pt-5 "><li>CTO</li></h2>
                                <a href="https://wukla.com/" className="pl-lg-5"style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Wukla (Early Stage Company).</a>
                            </div>
                            <div className="col-sm-12 col-lg-10 col-md-12" style={{ textAlign: "justify", fontSize: "18px" }}>


                           <p className="ml-lg-5 pt-lg-5 ml-sm-5"> 
                            I lead the software development team. I am responsible for getting the products shipped and ensuring
                              the team is hitting the mark. I am also obliged for managing Infrastructure, hiring technical people and
                           weakly sprint planing and review.

                            </p>

                             </div>
                            
                        </div>
                        <div className="row">
                        <div className=" col-lg-7 col-sm-12 col-md-12">
                                <h2 className="pt-5 "><li>Application Engineer</li></h2>
                                <a href="https://www.myhealthathand.com/" className="pl-lg-5"style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Health at Hand</a>
                            </div>
                            <div className="col-sm-12 col-lg-10 col-md-12" style={{ textAlign: "justify", fontSize: "18px" }}>

                            <ul className="ml-lg-5 pt-lg-5 ml-sm-5"> 
                           <li>Maintained and developed new features for Python/Django base application.</li>
                        <li> Rapid rest API development using Django-rest-framework.</li>
                        <li>Implemented following features. i.e. wallet, payments, promotions, referral.</li>
                        <li>Managing Deployments for different environments.</li>    
                            </ul>

                             </div>
                            
                        </div>
                        <div className="row">
                        <div className=" col-lg-7 col-sm-12 col-md-12">
                                <h2 className="pt-5 "><li>Software Engineer</li></h2>
                                <a href="https://mezino.com/" className="pl-lg-5"style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Software Engineer</a>
                            </div>
                            <div className="col-sm-12 col-lg-10 col-md-12" style={{ textAlign: "justify", fontSize: "18px" }}>


                           <ul className="ml-lg-5 pt-lg-5 ml-sm-5"> 
                           <li>Maintaining and developing new features for Python/Django Project.</li>
                        <li> Rapid rest API development using Django-rest-framework.</li>
                        <li>Behavior Driven Testing using Selenium and Lettuce for Web Services in python.</li>
                        <li>Various API integration for Shopify CMS.</li>    
                            </ul>


                             </div>
                            
                        </div>
                        <div className="row">
                        <div className=" col-lg-7 col-sm-12 col-md-12">
                                <h2 className="pt-5 "><li>Incubate + Startup Co-founder</li></h2>
                                <a href="https://thenestio.com/startup/rateker/" className="pl-lg-5 pl-sm-5"style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Rateker - NEST I/O.</a>
                            </div>
                            <div className="col-sm-12 col-lg-10 col-md-12" style={{ textAlign: "justify", fontSize: "18px" }}>


                           <ul className="ml-lg-5 pt-lg-5 ml-sm-5"> 
                           <li>Working with organizational constructs with the other co-founders.</li>
                          <li> Leading a team (two developers and a designer) to meet startup deadlines.</li>
                          <li>Meeting with the Investors for funding the product.</li>
                          <li> Listening and adapting critical user experience about the product.</li>    
                            </ul>


                             </div>
                            
                        </div>
                </div>         
                </div>
            </div>
                
            
        );
    }
}
export default Project;