import React from "react";
import "./Homepage.css"

const HomePage=()=> {
  return(
  <>
     <section className="home-main-container">
       <div>
          <div className="container home-container d-flex justify-content-center">
            <img src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draicimg" className="img-fluid draicMainImg" />
            
          </div>
          <h1 className=" HeadLine d-flex justify-content-center">____________________________________________________________________</h1>
          
            <div className="main-row">
              <div className="column left">
              <div class="container-img">
              <img src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draicimg1" className="img-fluid imgSetting" /><br />
                <div class="overlay">
                  <div class="text">Projects</div>
                </div>
              </div>
              <div class="container-img">
              <img src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draicimg2" className="img-fluid imgSetting" /><br />
                <div class="overlay">
                  <div class="text">Achievements</div>
                </div>
              </div>
              <div class="container-img">
              <img src="https://draicdypcoe.netlify.app/img/logo_white.png" alt="draicimg3" className="img-fluid imgSetting" /><br/>
                <div class="overlay">
                  <div class="text">About Us</div>
                </div>
              </div>
              </div>
              <div className="column middle">
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
              </div>
              <div className="column right">
              <follow>
                <div className="container ">
                  <div className="row">
                  {/*<h2 className="follow-heading content-right">Follow Us</h2>*/}
                    <div className="row">
                    <div className="content-right">
                        <a href="https://www.linkedin.com/company/d-y-patil-robotics-ai-club/?originalSubdomain=in" target="_draic"><i class="fab fa-linkedin fontawesome-style"></i></a>
                      </div>
                      <div className="content-right">
                        <a href="https://www.linkedin.com/company/d-y-patil-robotics-ai-club/?originalSubdomain=in" target="_draic"><i class="fab fa-twitter fontawesome-style"></i></a>
                      </div>
                      <div className=" content-right">
                        <a href="https://www.instagram.com/draicdypcoe/" target="_draic"><i class="fab fa-instagram fontawesome-style"></i></a>
                      </div>
                      <div className=" content-right">
                        <a href="https://www.facebook.com/draicdypcoe/" target="_draic"><i class="fab fa-facebook-f fontawesome-style"></i></a>
                      </div>
                      
                    </div>
                      
                  </div>
                </div>
              </follow>
              </div>
            </div>


          
        </div>
     </section>
  </>
  );
};


export default HomePage;
