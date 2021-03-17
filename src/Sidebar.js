import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'react-bootstrap'
import "./App.css"
import './sidebar.less';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import { FacebookFilled, InstagramFilled, AimOutlined, LinkedinFilled, ContactsOutlined, QqOutlined, SkypeFilled, HomeOutlined, MenuUnfoldOutlined, PhoneOutlined, WindowsFilled } from "@ant-design/icons";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    facebook = () => {
        window.location = "https://www.linkedin.com/in/adilmalik393/"
    }
    gmail = () => {
        window.location = "mailto:adilmalik393@gmail.com"
    }
    linkedin = () => {
        window.location = "https://www.linkedin.com/in/adilmalik393/"
    }
    skype = () => {
        window.location = "https://www.linkedin.com/in/adilmalik393/"
    }

    render() {
        return (
            
                <div className='row'>
                    <div class="sidebar ">
                        <img src="../Capture.PNG" width="150px" height="150px" className="image" />
                        <a href="/"><h2 className="head pl-lg-5 ml-lg-4">ADIL MALIK</h2></a>
                        <p className="paragraph">FULL-STACK SOFTWARE ENGINEER</p>
                        <a className="paragraph pl-lg-5 ml-lg-5 h "href="/Aboutme">About Me</a>
                        <a href="/Startup"className="pl-lg-5 ml-lg-5 h">Startups</a>
                        <a href="/Project"className="pl-lg-5 ml-lg-5 h">Projects</a>
                        <a href="/Hireme"className="pl-lg-5 ml-lg-5 h">Hire Me</a>
                        <div style={{ textAlign: "center" }}  >
                            <img src="../gmail.svg" className="log" width="30px" height="50px" onClick={this.gmail} />
                            <img src="../linkedin.svg" className="log" width="40px" height="50px" onClick={this.linkedin} />
                            <img src="../skype.svg" className="log" width="40px" height="50px" onClick={this.skype} />
                            <img src="../facebook.svg" className="log" width="40px" height="50px" onClick={this.facebook} />

                           <br/> <a href="https://www.linkedin.com/in/syed-muhammad-talha-48189a1b6" className=" text-center " style={{fontSize:"12px",display:"inline"}}>Created By : S.M.TALHA</a>
                        </div>
                        
                    </div>

                </div>
           

        );
    }
}
export default Sidebar;