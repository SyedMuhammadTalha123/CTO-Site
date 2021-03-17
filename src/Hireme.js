import React from 'react';
import { Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Footer from './Footer'
import './App.css';
import Sidebar from './Sidebar';
class Hireme extends React.Component {
    render() {
        return (
            <div className="Container-fluid background" style={{ fontSize: "18px" }}>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 col-xs-11 pt-5 side">
                        <h2>Chief Technology Officer (CTO)</h2>
                        <div className="row ">
                            <div className="col-sm-12 col-lg-8 mt-3">
                                <p className="ml-3">I lead the software development team. I am responsible for getting the products shipped and ensuring
                                  the team is hitting the mark. I am also obliged for managing Infrastructure, hiring technical people and weakly sprint planing and review.</p>
                                <h2 className="mt-5">Responsibilities</h2>
                                <ul className="mt-3">
                                    <li>Business execution development</li>
                                    <li>I can manage the company's technologies plan.</li>
                                    <li>Maintain a company's network.</li>
                                    <li>I can access wether new technologies are appropriate for the company to use.</li>
                                    <li>I can research about how company's technological assets can be improved.</li>
                                    <li>Ensure technologies currently in use are efficient and making changes wherever necessary.</li>
                                    <li>I have ability to liaise well with others and source information efficiently.</li>
                                    <li>As a CTO i can Convey quick an incentive through encounter at a lower cost</li>

                                </ul>
                                <h2 className="mt-5">Team Mentorship</h2>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-9 ml-3">
                                        <p>My duty is to furnish the group with mentorship and figure out ways in assisting the group to become both with their code and expertly</p>
                                    </div>

                                </div>
                                <h2 className="mt-4">Strategy</h2>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-9 ml-3">
                                        <p>I can provides the business vision and technical leadership seeking to deliver technologies to satisfy the business wants and establish new opportunities for additional growth. In my strategic position, my goal is to maintains the engineering strategic arrange and refreshes often and aligns with business overall objectives and business regulative necessities.</p>
                                    </div>
                                </div>
                                <h2 className="mt-4">Bussiness Idea</h2>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-9 ml-3">
                                        <p>Any technology startup begins with a business plan.  Having millions of technical experience, as a CTO (who is commonly a co-founder) my first aim is to validates the technical practicability of the business plan and suggests potential technical solutions to implement a wares.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                    </div>
                   
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Hireme