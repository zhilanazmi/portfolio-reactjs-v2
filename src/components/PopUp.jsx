import React from "react";
import PopUpImg from "../assets/images/pop-up-img1.jpg";
import PopUpImg2 from "../assets/images/pop-up-img2.jpg";

const Popup = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={PopUpImg} alt="pop-up-img1" />
        <button 
          className="close-btn popup-close" 
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>{" "}
        </button>
        <p className="corpo">Plastic Guardian</p>
        <p className="corpo-sub">Landing Page Website</p>
        <div className="corporate_main">
          <div className="cuberto_main">
            <p className="created_by">Created By:</p>
            <p className="cuberto">Zhillan Azmi</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Date:</p>
            <p className="cuberto">20/09/2023</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Client:</p>
            <p className="cuberto">Plastic Guardian</p>
          </div>
          <div className="cuberto_main">
            <p className="created_by">Categories:</p>
            <p className="cuberto">Landing Page</p>
          </div>
        </div>
        <p className="Ornare">
        I manage and optimize the Landing Page for responsiveness across devices, 
        provide support and maintenance for web applications, integrate user experience-enhancing features, 
        implement visually appealing designs, and use Git for version control and repository management.
        </p>
        <div className="pop-up-img-section2">
          <img src={PopUpImg2} alt="pop-up-img2" />
        </div>
        <p className="Ornare p-0">
          Non vel eget pharetra vestibulum orci amet feugiat mi cras. Neque ac
          duis sed viverra volutpat. Natoque habitasse sit in interdum ut in
          pharetra proin amet. Non id egestas tellus enim nisi proin. Vel neque
          gravida sed nunc. Scelerisque vulputate sit tellus dui. Sollicitudin
          id nec amet porttitor id. In condimentum id id phasellus eu lobortis
          quis porta nisi.
        </p>
      </div>
    </div>
  );
};

export default Popup;
