import React from "react";
import "./MyWork.css";
import MyWorkData from "../../assets/MyWorkData";
import { FaArrowRightLong } from "react-icons/fa6";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {MyWorkData.map((work, index) => {
          return (
            <a href={work.w_link} key={index}>
              <img src={work.w_img} alt="" />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <a href="https://github.com/Harikesh312">
          Show more
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
}

export default MyWork;
