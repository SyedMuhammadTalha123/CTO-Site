import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import $ from 'jquery'
import { Carousel } from 'antd';

class Startup extends React.Component {
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {

    
    }
    render() {
        return (
            <div className="Container-fluid background">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>


                    <div className="col-sm-12 col-lg-9 pl-sm-5 pl-lg-5 pl-xs-5 col-xs-12 side">
                        <div className="row">
                            <div className=" col-lg-7 col-md-3">
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>Loss Prevention in Stock Market</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-danger p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>CLOSED</span>
                            </div>

                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "220px", fontSize: "20px" }}>ENTERPRISE</span>

                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                        </div>
                        <div className="row ">
                            <div className="col-sm-12 col-lg-10 col-md-6" style={{ textAlign: "justify", fontSize: "18px" }}>


                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">The “Loss Prevention in Stock Market” is a web based application which helps the investors
                                 in analyzing the market trend patterns (Profit/loss) which is analyzed
                                through few past year’s historical data, through view livestock user or investor will able to
                                view the livestock of the companies, they
                                can also view the number of shares, their prices,
                                purchasing of stock can also be done by filling make payment form credentials and an option
                                to sell it were all the purchased stock is shown to the user with their purchasing amount and
                                date so user can easily sell their share by filling the selling form, about us page will help the
                                new investors which do not have quite knowledge of stock market and steps needed to gain
                                profit which will be displayed on web application, an administrator can also use this web
                                application in order to manage the system and keep the information accurate basically admin
                                can manage the web application by viewing all the registered users through which admin can
                                be able to activate/deactivate, make admin/remove admin and an option to delete the user
                                account. Admin can also view the user history of buying/selling stocks, livestock and trend
                                pattern
                                
                                </p>
                                <div class="ro ml-5">
  <div className="com ">
      <img src="../live.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../history.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../abouus.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../sell.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../payment.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../users.png" alt="Forest" style={{width:"100%"}}/>
  </div>
</div>


                            </div>

                        </div>

                        <div className="row">
                            <div className=" col-lg-7 col-md-3">
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>Men's Fashion Collection</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-danger p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>CLOSED</span>
                            </div>
                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "150px", fontSize: "20px" }}>E-COMMERCE</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-10" style={{ textAlign: "justify", fontSize: "18px" }}>
                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">Developed E-Commerce website for men's using HTML, CSS, Bootstrap, JavaScript
Helps to view the men's collection , add to cart by filling Order
form</p> 
<p className="ml-lg-5 pt-lg-5 ml-sm-5">Time is important… and we help you save it by showcasing a huge and impressive collection of Men’s fashion clothing under one roof. Your demands will be taken care of here with professionalism and quality. There is no need to drive to stores and waste your time in traffic and checkout lines when everything that you need has been nicely displayed here for your perusal.</p>
<div class="ro ml-5">
  <div className="com ">
      <img src="../aboutus.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../brands.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../aboutus.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../category.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../home page.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../login.png" alt="Forest" style={{width:"100%"}}/>
  </div>
</div>
                            </div>
                            
                        </div>
                        
                        

                        <div className="row">
                            <div className=" col-lg-7 col-md-3">
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>Rakuten advertising</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-success p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>RUNNING</span>
                            </div>
                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "140px", fontSize: "20px" }}>Mobile</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "210px", fontSize: "20px" }}>Marketing</span>
                        </div>
                      
                        <div className="row ">
                            <div className="col-sm-12 col-lg-10 col-md-6" style={{ textAlign: "justify", fontSize: "18px" }}>


                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">
                                    <ul>
                                        <li>Rakuten advertising a diverse marketplace based on what your audience would be interested in</li>
                                       <li>It helps to read our services which we are providing</li>
                                       <li>It make you more mindful about what you're going to promote</li>
                                    </ul>
                                </p>
                                <a className="text-center ml-lg-5 pl-lg-5 " href="https://www.linkedin.com/in/syed-muhammad-talha-48189a1b6 " className="a">Open website</a>
                                <div class="ro ml-5">
  <div className="com ">
      <img src="../AboutRatku.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../Consumersightratku.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../Contactratku.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../Mediaratku.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../Raktuhome.png" alt="Forest" style={{width:"100%"}}/>
  </div>
  <div class="com">
  <img src="../Contactratku.png" alt="Forest" style={{width:"100%"}}/>
  </div>
</div>
                            </div>

                        </div>
                       
                        <div className="text-center col-sm-12 col-lg-3 col-md-2  offset-lg-4 footer  mt-5 mb-5" >
                            <a href="https://www.linkedin.com/in/syed-muhammad-talha-48189a1b6 " className="a">Created By : S.M.TALHA</a>
                            <p></p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
/*
<script src="jquery.acarousel.min.js"></script>
$(function(){
    var acarousel= $("#carousel").acarousel();
    changeActive();
    
    $("#carousel li a ").click(function(){
        if (acarousel.isAnim()) return false;
        var move=acarousel.moveByElem($(this).parent());
        if(move==0){
            alert("move 0");
        }else
        {
            changeActive(move);
        }
        return false;
    });

    $("move_back").click(function(){
        if(acarousel.isAnim()) return false;
        var move=acarousel.move(1);
        changeActive(move);
        return false;
    });
    $("move_next").click(function(){
        if(acarousel.isAnim()) return false;
        var move=acarousel.move(-1);
        changeActive(move);
        return false;
    });
    $(".move").click(function(){
        if(acarousel.isAnim()) return false;
        var Index=$(".move").index(this);
        var move= acarousel.moveByIndex(Index);
        changeActive(move);
        return false;

    });
    function changeActive(move){
        var index= acarousel.getPos(move).Index;
        $(".move").removeClass("active").on(index).addClass("active");

    }
    $(window).resize(function(){
        var parent =$("#carousel-container");
        var self= $("#carousel");
        self.css({
            left:parent.width() / 2 -self.width() /2,
            top:parent.height() / 2 -self.height() /2
        })
    }).trigger("resize");
});
*/
export default Startup;
