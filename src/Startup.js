import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
class Startup extends React.Component {
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
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>MINI-DUKAN</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-success p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>RUNNING</span>
                            </div>

                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "220px", fontSize: "20px" }}>E-COMMERCE</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "140px", fontSize: "20px" }}>ANDROID</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                        </div>
                        <div className="row ">
                            <div className="col-sm-12 col-lg-10 col-md-6" style={{ textAlign: "justify", fontSize: "18px" }}>


                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">MiniDukan is an internet marketplace for multi-category product. Product catalog includes electronic product, home improvement things, fashion product for men & girls, nail clipping product, travel provides, and more. a number of of the brands related to the corporate square measure Panasonic, Samsung, DineSmart, Royal bit, Byond, and more. the corporate claims that it operates in the main in rural areas and cities across Republic of India. it's Associate in Nursing app-based platform for robot users.
 
                                </p>

                            </div>

                        </div>

                        <div className="row">
                            <div className=" col-lg-7 col-md-3">
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>WAKLA/PAKSIGN</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-danger p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>CLOSED</span>
                            </div>
                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "150px", fontSize: "20px" }}>ENTERPRISE</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-10" style={{ textAlign: "justify", fontSize: "18px" }}>
                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">With a motive of making access to law easy for everyone in Pakistan, Wukla was formed in 2015. Our Co-founders are distinguished individuals holding tremendous amount of knowledge about every aspect of law on a mission to provide legal assistance with the lowest possible cost and simplifying the complexity of every matter. To provide ease of access, we combined Law with Technology and added just the right amount of resources on our website. Now you can customize legal documents and have them delivered to your doorstep anywhere in Pakistan.</p>
                            </div>
                        </div>

                        <div className="row mt-5 ">

                            <div className="col-sm-12 col-lg-4 ml-lg-5 ">
                                <div className="row ml-lg-2 ml-sm-1">
                                    <img src="../dashboard.png" width="40px" height="40px" />
                                    <h3 className="ml-3">Intuitive Dashboard</h3>
                                </div>

                                <div className="col-sm-12 col-lg-10 ml-lg-5  ml-sm-2 ">

                                    <p className="ml-2  mt-2">View, understand and analyze your contracts through our modern dashboard.</p>
                                </div>

                            </div>
                            <div className="col-sm-12 col-lg-5 ml-lg-5">
                                <div className="row ml-lg-3 ">
                                    <img src="../design.png" width="40px" height="50px" />
                                    <h3 className="ml-3 ">Integrated e-signatures</h3>
                                </div>
                                <div className="col-sm-3 col-lg-10 ml-3">
                                    <p className="ml-lg-5">Wukla is seamlessly integrated with Paksign enabling you to make and sign documents on the go.</p>
                                </div>

                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-lg-5 ml-lg-5">
                                <div className="row ml-lg-2">
                                    <img src="../redundancy.png" width="40px" height="50px" />
                                    <h3 className="ml-3 ">Redundancy Reduction</h3>
                                </div>
                                <div className="col-sm-12 col-lg-12">
                                    <p className="ml-5  ">Our redundancy elimination software enables you to input information only once, automatically filling out fields requiring the same information.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 ">
                                <div className="row">
                                    <img src="../audit.png" width="40px" height="50px" />
                                    <h3 className="ml-3">Audit Trail</h3>
                                </div>
                                <div className="col-sm-3 col-lg-12">
                                    <p className="ml-4">Be confident that an audit trail for each document can be extracted, with useful details such as who signed a document, when and where.</p>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className=" col-lg-7 col-md-3">
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>PUSHLEOPARD</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-success p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>RUNNING</span>
                            </div>
                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "140px", fontSize: "20px" }}>SHOPIFY</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "210px", fontSize: "20px" }}>E-COMMERCE</span>
                        </div>
                        <div className="row">

                            <div className="col-sm-12 col-lg-12 col-xs-12 ml-lg-5 mt-5">
                                <img src="../home page.png" width="80%" className="img-responsive" height="auto" alt="responsive" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm-12 col-lg-10 col-md-6" style={{ textAlign: "justify", fontSize: "18px" }}>


                                <p className="ml-lg-5 pt-lg-5 ml-sm-5">Pushleopard helps it’s users to make a whole web site while not having any technical information regarding web site building. this can be as a result of puslaopard takes care of all the technicalities concerned on their behalf. mistreatment Shopify, thus, hastens the full method of creating a website and helps to urge your store go live quickly.

                                Pushleopard provides a number of ecommerce web site style services. This includes having the ability to decide on from over seventy themes and over fifty languages whereas building a website.

                                Additionally, every of the pre-designed templates may be more tailored to match your preferences. with intuitive setting its internet primarily based web site builder allows you to style your custom on-line store
                                </p>

                            </div>

                        </div>
                        <div className="row">
                            <div className=" col-lg-7 col-md-3">
                                <h2 className="pt-5 pl-3 pl-sm-3"><li>PUSH MONKEY</li></h2>
                            </div>
                            <div className=" col-lg-5 col-md-3 pt-2">
                                <span className="badge badge-success p-3 mt-5 offset-lg-3 " style={{ width: "120px", }}>RUNNING</span>
                            </div>
                        </div>
                        <div className="row ml-4">
                            <span className="badge badge-secondary ml-sm-4 mt-4 p-2" style={{ width: "220px", fontSize: "20px" }}>E-COMMERCE</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "140px", fontSize: "20px" }}>ANDROID</span>
                            <span className="badge badge-secondary ml-sm-5 mt-4 p-2" style={{ width: "120px", fontSize: "20px" }}>WEB</span>
                        </div>
                        <div className="row">

                            <div className="col-sm-12 col-lg-12 col-xs-12  mt-5">
                                <img src="https://pm-resources.nyc3.digitaloceanspaces.com/static/images/v2/platforms.png" width="80%" className="img-responsive" height="auto" alt="responsive" />
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-sm-12 col-lg-5 col-md-6 ml-lg-5 mt-5">
                                <div className="row ml-lg-3">
                                    <img src="https://i.pinimg.com/564x/6c/aa/4e/6caa4eb60fd585197cf962ec96d28553.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Increased Engagement</h3>
                                </div>
                                <div className="col-sm-3 col-lg-10 ml-lg-2">
                                    <p className="ml-lg-5">Readers can be informed about your content at all times: when reading other websites or while working in other apps, with the browser closed. Even when the computer is not active – it displays all missed notifications the moment it wakes up.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-5 col-md-6  mt-5">
                                <div className="row ">
                                    <img src="https://i.pinimg.com/236x/9f/bb/84/9fbb84b3806d1a3c53a3661df78aed48.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Unlimited-Notifications</h3>
                                </div>
                                <div className="col-sm-3 col-lg-9 ml-lg-2">
                                    <p className="ml-lg-3">You can notify your readers as often as you see fit. Your readers don’t have to install any additional apps or plugins. They just accept receiving notifications from your website and presto! Our plans only count the number of readers, not notifications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 col-md-6 ml-lg-5 mt-5">
                                <div className="row ml-lg-3 ">
                                    <img src="https://i.pinimg.com/564x/00/4c/f5/004cf53e429a07b3d12f0120d5c8282f.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Granular Filtering</h3>
                                </div>
                                <div className="col-sm-12 col-lg-10 ml-lg-2">
                                    <p className="ml-lg-5">Easily decide and control for what type of content to send out notifications. Filter by custom post type and by category for standard posts. No content clutter around here! Displays all missed notifications the moment it wakes up.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-5 col-md-6 mt-5">
                                <div className="row ">
                                    <img src="https://i.pinimg.com/564x/04/2f/6f/042f6f1041ddc8f0e27469c7bfe8b48b.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Segmentation</h3>
                                </div>
                                <div className="col-sm-3 col-lg-9 ml-lg-2">
                                    <p className="ml-lg-3">Define segments of interest for your subscribers. This will allow you to know what your subscribers are interested in and provide relevant notifications and content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 col-md-6 ml-lg-5 mt-5">
                                <div className="row ml-lg-3">
                                    <img src="https://i.pinimg.com/564x/02/ca/b6/02cab6591eba470702d138e36b89c0e3.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Custom Branding</h3>
                                </div>
                                <div className="col-sm-12 col-lg-10 ml-lg-2">
                                    <p className="ml-lg-5">Push Monkey is fully white-label. Your readers don’t get to see any crazy bananas from us. Your logo, your text, your rules</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-5 col-md-6 mt-5">
                                <div className="row ">
                                    <img src="https://i.pinimg.com/564x/5a/7b/06/5a7b0692c1fb8625bfcfb5fb4c9197fb.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Statistics</h3>
                                </div>
                                <div className="col-sm-3 col-lg-9 ml-lg-2">
                                    <p className="ml-lg-3">The plugin provides essential usage and engagement data available directly in your WordPress dashboard so you can create the best experience for your subscribers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 col-md-6 ml-lg-5 mt-5">
                                <div className="row ml-lg-3">
                                    <img src="https://i.pinimg.com/564x/0e/f8/03/0ef803f1ca666baa357931f44d678b43.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Schedule Notifications</h3>
                                </div>
                                <div className="col-sm-12 col-lg-10 ml-lg-2">
                                    <p className="ml-lg-5">You can create a backlog of upcoming notifications that will be sent at the right time. Set up your content distribution deadlines and the monkey will handle the rest.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-5 col-md-6 mt-5">
                                <div className="row ">
                                    <img src="https://i.pinimg.com/564x/28/03/4e/28034e601b054650d3a70e382db80b44.jpg" width="50px" height="50px" />
                                    <h3 className="ml-lg-2">Images in Notifications</h3>
                                </div>
                                <div className="col-sm-3 col-lg-9 ml-lg-2">
                                    <p className="ml-lg-3">Your readers and visitors that use Google Chrome can also receive an appealing image together with the notification. Just upload one when sending a notification or set a featured image on your Wordpress Post.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-5 col-md-6 ml-lg-5 mt-5">
                                <div className="row ml-lg-3">
                                    <img src="https://i.pinimg.com/564x/6b/22/4e/6b224e660a2c4e84881a314f8193d183.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Multiple Websites</h3>
                                </div>
                                <div className="col-sm-12 col-lg-10 ml-lg-2">
                                    <p className="ml-lg-5">You can install Push Monkey on multiple websites and either manage them from 1 central account or assign separate partners (agents) for each.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-5 col-md-6 mt-5">
                                <div className="row ">
                                    <img src="https://i.pinimg.com/236x/ec/35/37/ec3537f37a90ec0cfc5c12a837126c4e.jpg" width="40px" height="50px" />
                                    <h3 className="ml-lg-3">Geolocation</h3>
                                </div>
                                <div className="col-sm-3 col-lg-9 ml-lg-2">
                                    <p className="ml-lg-3">Track the location of your subscribers and send targeted and relevant notifications, with either translated content or time-zone specific scheduling.</p>
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
export default Startup;