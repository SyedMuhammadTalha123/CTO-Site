
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
class Project extends React.Component{
    render()
    {
        return(
            <div className="Container-fluid background">
                <div className="row">
                    <div className="col-lg-3">
                    <Sidebar/>
                    </div>
                    <div className="col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 col-xs-11 side">
                    <h2>Startups</h2>
                </div>
                </div>
                <Footer/> 
            </div>
        );
    }
}
export default Project;