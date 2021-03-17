import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Footer from './Footer';
import "./App.css";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
class Home extends React.Component {
    render() {
        return (
            <div className=" background " >
                <Sidebar />
                <div className="row ">
                    

                    <div className="col-sm-12 col-lg-9 cont ">
                        <h1 style={{color: "white",fontSize:"60px"}}>Hi,I'm Adil,</h1>
                        <p style={{ fontSize: "40px", color: "white" }}>A freelance software engineer specialized in both front-end and back-end.</p>
                    </div>
                   
                </div>
                 
            </div >
        );
    }
}
export default Home;