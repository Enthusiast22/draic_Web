import "./mainHome.css"
import backgroundvideo from "./video/backgroundvideo.mp4"
import React from 'react'

import image_1 from './images/image_1.jpeg'
import image_2 from './images/image_2.jpeg'
import image_3 from './images/image_3.jpeg'
import image_4 from './images/image_4.jpeg'
import backremove from './images/backremove.jpeg'

const HomeF =()=>{
    return(
      <>
      
      
      <div class="ct" id="t1">
            
            <div class="ct" id="t2">
                <div class="ct" id="t3">
                    <div class="ct" id="t4">
                        <div class="ct" id="t5">
                            <section>
                            <ul>
                                <a href="#t1"><li class="icon fa fa-home" id="home"></li></a>
                                <a href="#t2"><li class="icon fa fa-code" id="project"></li></a>
                                <a href="#t3"><li class="icon fa fa-trophy" id="achievement"></li></a>
                                <a href="#t4"><li class="icon fa fa-circle-info" id="about"></li></a>
                                <a href="#t5"><li class="icon fa fa-user" id="follow"></li></a>
                            </ul>
                            
                            <div class="page" id="homepage">
                                <li class="icon">
                                    <img src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draicimg" className="img-fluid draicMainImg" />
                                    <h1 className=" HeadLine d-flex justify-content-center">_______________________________________________________</h1>
                                    
                                    <div className="circle">
                                    <img src="https://www.spacex.com/static/images/backgrounds-2021/sl29/Homepage_SL_2-1_Desktop.webp" alt="img" className="homebgimg"></img>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h1 className=" Heading-1 "> DRA</h1>
                                        <h1 className=" Heading-2 "> IC</h1>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h1 className=" SubHeading-1 " id="1">D.Y. Patil Robot</h1>
                                        <h1 className=" SubHeading-2 " id="1">ics & AI Club</h1>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h1 className=" SubHeading2-1 ">DYPCOE</h1>
                                        <h1 className=" SubHeading2-2 ">, Pune</h1>
                                    </div>
                                    
                                    
                                </li>   
                            </div>
                            
                            <div class="page" id="projectpage">
                            
                                <projects>
                                    <div>
                                        <div className="container home-container">
                                        </div>
                                        <div className="backimg">
                                    <img src="https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="homebgimg" alt="img"></img>
                                    </div> 
                                            
                                        <div className="Projectf">
                                        <h1>PROJECTS</h1>
                                        <img className="draicimage" src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draic"></img>
                                        </div>

                                        <div class="aboutus ">
                                            <p>Our team focuses on Project-based learning. Besides participating in various National and<br />International Competitions, we also work on several projects throughout the year. Here are<br />details of some of our projects.</p>
                    
                                        </div>
                                        <images>
                                        <div class="row">
                                        <div class="column  d-flex justify-content-center">
                                        <div class="container">
                                            <img src="https://static.wixstatic.com/media/9146b5_cc06a360565647348e376c7b170521e1~mv2.jpg/v1/crop/x_0,y_309,w_2246,h_1947/fill/w_383,h_331,al_c,q_80,usm_0.66_1.00_0.01/20200309_180020_edited.webp" alt="Snow" class="image"/>
                                            <div class= "overlay">
                                                <div class="text">
                                                    <p><b>Autonomous Quadrupled Robot</b></p>
                                                
                                                    <p>Development of 3D  </p>
                                                    <p>Printed Autonomous</p>
                                                    <p>four-legged robot</p>
                                                    <p> with Servo Motors for actuation.</p>
                                            
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="column  d-flex justify-content-center">
                                            <div class="container">
                                                <img src="https://static.wixstatic.com/media/9146b5_5cb6d07cc85546f085b0fa6867976cf3~mv2.jpg/v1/crop/x_0,y_596,w_2250,h_1949/fill/w_383,h_331,al_c,q_80,usm_0.66_1.00_0.01/20191221_171659_edited.webp" alt="Snow" class="image"/>
                                                <div class= "overlay">
                                                    <div class="text">
                                                        <p><b>3D Printer</b></p>
                                                        <p>Developed a customized 3D Printer, </p>
                                                        <p>with PLA as a filament by utilizing</p>
                                                        <p> some open source resources.</p>
                                                        <p></p>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column  d-flex justify-content-center">
                                            <div class="container">
                                                <img src="https://static.wixstatic.com/media/9146b5_e35d701f3f8a422bb80ce197a4f8188b~mv2.jpg/v1/crop/x_0,y_0,w_2331,h_2021/fill/w_383,h_331,al_c,q_80,usm_0.66_1.00_0.01/20200309_223447_edited.webp" alt="Snow" class="image"/>
                                                <div class= "overlay">
                                                    <div class="text">
                                                        <p><b>Autonomous Path Finder Robot</b></p>
                                                        <p>Made an Autonomous </p>
                                                        <p>Obstacle avoider and  </p>
                                                        <p>Path finder robot</p>
                                                        <p>with Omni Wheel drive </p>
                                                        <p>and Ultrasonic Sensor.</p>

                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                
                                        </div>
                                    </images>
                                </div>



                                </projects>   
                                
                            </div>

                            <div class="page" id="achievementpage">
                                <achievementsss>
                                <div className="backimg">
                                    <img src="https://images.unsplash.com/photo-1575796354920-199e3a84a73e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="img" className="homebgimg"></img>
                                    </div> 
                                <div className='container'>
  
                                    <div className='header'>
                                        
                                        <h1 className="heading">Achievements</h1>
                                        <img
                                            className="draicimage"
                                            src="https://draicdypcoe.netlify.app/img/logo_white.png"
                                            alt="draic"
                                            ></img>
                                    </div>

                                    <div className="siteInfo">
                                    <p className='Achieve_1'>
                                            <img className="image1" src={image_1} alt="" />
                                            1. Second Runner-up at Innovate for Smart Pimpri
                                            <br />
                                            Chinchwad, innovation Challenge organised by
                                            <br />
                                            PCSCL, PCMC & PCCOE, Pune.
                                            <br />
                            ​                Team Members: Shreyash Choppawar, Amit Prasad,
                                            <br />
                                            Vedansh Shrivastav
                                        </p>
                                        <p className='Achieve_2'>
                                            <img className="image2" src={image_2} alt="" />
                                            2. First and Second Position at Techtatva Electronics
                                            <br />
                                            Competition Organised by EnTC Dept, DYPCOE,
                                            <br />
                                            Pune.
                                            <br />
                                            Team Member: Sagar Warungase, Samiksha
                                            <br />
                                            Bhokare, Dibyanshu Sharma
                                        </p>
                                        <p className='Achieve_3'>
                                            <img className="image3" src={image_3} alt="" />
                                            3. Second Runner-up at COEP Mindspark-19 Search
                                            <br />
                                            & Destroy, organised by COEP, Pune.
                                            <br />
                                            Team Members: Arvind Patel 
                                        </p>
                                        <p className='Achieve_4'>
                                            <img className="image4" src={image_4} alt="" />
                                            4. First Position at Bro Code & Code Capture
                                            <br />
                                            Competition organised by PCCOE, Ravet.
                                            <br />
                            ​                Team Members: Arvind Patel 
                                        </p>

                                    </div>
                            
                                </div>
  
                                </achievementsss> 
                            </div>

                            <div class="page" id="aboutpage">
                                {/*<li class="icon fa ">*/}
                                    <about>
                                    
                                    <div className="body">
                                    <div className="backimg">
                                    <img className="homebgimg" src="https://images.unsplash.com/photo-1559657693-e816ff3bd9af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="img"></img>
                                    </div> 
                                        
                                        {/* <div className="linediv">
                                         <h1 className="line d-flex justify-content-conter text-align-center"></h1>
                                        </div> */}

                                        <div className="aboutus">
                                        <h1>ABOUT US</h1>
                                        <img className="draicimage" src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draic"></img>
                                        </div>
                                        <div className="whoweare">
                                            
                                            <img className="imgwhoweare" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-employee-business-model-canvas-wanicon-lineal-color-wanicon.png" alt="imgwho"/>
                                            <h2 className="whoarewe">Who are we ?</h2>
                                            <p className="whoarewecontent">D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions.</p>
                                        </div>

                                        <div className="visionbox">
                                        
                                        <img className="visionsite" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-vision-teamwork-wanicon-lineal-color-wanicon.png" alt="imgwho"/>
                                        
                                            <h2 className="vision">Vision</h2>
                                            <p className="visioncontent">To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation.</p>
                                        </div>
                                        
                                        <div className="missionbox">
                                        
                                        <img className="imgwhoweare" src="https://cdn-icons.flaticon.com/png/512/1310/premium/1310485.png?token=exp=1634469743~hmac=c0a986377d35e086d83e52090c1b7ce2    " alt="imgwho"/>
                                        
                                        
                                            <h2 className="mission">Mission</h2>
                                            <p className="missioncontent">Team DRAIC seeks to inspire the next generation of bright minds, to cultivate an appreciation for the present technology and develop a cognitive thinking towards the solutions to present scenario by engaging in competition and building innovative projects.</p>
                                        </div>

                                        </div>







                                    </about>
                                {/*</li>  */} 
                            </div>
                            <div class="page" id="followpage">
                                
                                    <follow>
                                        <div className="body">
                                        <div className="backimg">
                                    <img src="https://www.spacex.com/static/images/backgrounds-2021/hls-resized-2.webp" className="homebgimg" alt="img"></img>
                                    </div>   
                                        <div>
                                            <h1>GET IN TOUCH</h1>
                                            <h2>Get in touch with us and get your questions answered.</h2>
                                            <img
                                            className="draicimage"
                                            src="https://draicdypcoe.netlify.app/img/logo_white.png"
                                            alt="draic"
                                            ></img>
                                        </div>
                                        <div className="mailbox">
                                            <div className="imgboxmail">
                                            <img
                                                className="im"
                                                src="https://img.icons8.com/color/48/000000/gmail--v2.png"
                                                alt="mail"
                                            ></img>
                                            </div>
                                            <p className="mail">EMAIL</p>
                                            {/* <p className="contentemail">    draic.pune@gmail.com</p> */}
                                        </div>



                                        




                                        <div className="linkbox">
                                            <div className="imgboxlink">
                                            <img
                                                className="ln"
                                                src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1634385457~hmac=28b21c1bd8726881b66f64e6852b33cd"
                                                alt="link"
                                            ></img>
                                            </div>
                                            <p className="link">LINKEDIN</p>
                                            {/* <p className="contentlink">    draic.pune@gmail.com</p> */}
                                        </div>

                                        <div className="instabox">
                                            <div className="imgboxinsta">
                                            <img
                                                className="in"
                                                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                                alt="insta"
                                            ></img>
                                            </div>
                                            <p className="insta">INSTAGRAM</p>
                                            {/* <p className="contentinsta">    draic.pune@gmail.com</p> */}
                                        </div>

                                        <div className="fbbox">
                                            <div className="imgboxfb">
                                            <img
                                                className="fb"
                                                src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
                                                alt="fb"
                                            ></img>
                                            </div>
                                            <p className="fbw">FACEBOOK</p>
                                            {/* <p className="contentfb">    draic.pune@gmail.com</p> */}
                                        </div>

                                        </div>
                                    </follow>
                                   
                            </div>


                            </section>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        </div>


        
      </>
    );
  };
  
  export default HomeF;