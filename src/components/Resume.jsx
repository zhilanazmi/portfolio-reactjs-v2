import React from "react";
import WinnerAward from "../assets/images/winner-award.png";
import WinnerAward2 from "../assets/images/winner-award2.png";
import WinnerAward3 from "../assets/images/winner-award3.png";
import WinnerAward4 from "../assets/images/winner-award4.png";

const Resume = () => {

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Institut Teknologi Nasional Bandung</p>
                <p className="cursus university">
                   2022 - Present
                </p>
                <p className="cursus">
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">SMAN 10 Bandung</p>
                <p className="cursus university">
                  2018 - 2021
                </p>
                <p className="cursus">
                  {/* Porttitor euismod at semper ut massa. Lorem varius magna
                  volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                  morbi. */}
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">SMPN 8 BANDUNG</p>
                <p className="cursus university">
                  2015 - 2018
                </p>
                <p className="cursus">
                  {/* Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque
                  lorem suscipit in. Hendrerit rhoncus quis tempor urna pharetra
                  ut erat. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">PT. Timah Industri</p>
                <p className="cursus university">Fullstack Developer / Feb 2024 - Present</p>
                <p className="cursus">
                
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">PT. Alita Praya Mitra</p>
                <p className="cursus university">Fullstack Developer / Sept 2023 - Sept 2024</p>
                <p className="cursus">
                I manage and optimize the Landing Page for responsiveness across devices, provide support and maintenance for web applications, integrate user experience-enhancing features, implement visually appealing designs, and use Git for version control and repository management.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Plastic Guardian</p>
                <p className="cursus university">Web Developer / Sept 2023 - Sept 2024</p>
                <p className="cursus">
                I manage and optimize the Landing Page for responsiveness across devices, provide support and maintenance for web applications, integrate user experience-enhancing features, implement visually appealing designs, and use Git for version control and repository management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
      </section>
      {/* <!-- ====================================== Section Design Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Certificate.
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">Introduction to Cybersecurity</p>
                    <p className="award-winner-text">Cisco</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">Networking Basics</p>
                  <p className="award-winner-text">Cisco</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">Networking Essentials
                    </p>
                    <p className="award-winner-text">Cisco</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">Cyber Security Foundation Professional Certificate</p>
                    <p className="award-winner-text">CertiProf</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sit, perferendis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
