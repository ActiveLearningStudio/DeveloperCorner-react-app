import React from "react";
import toolpic from "../../assets/images/developertool.svg";
const DeveloperTool = () => {
  return (
    <div className="developer-tool-area">
      <div className="container">
        <h2>DEVELOPER TOOLS</h2>
        <p>THE BEST INTERACTIVE API SOLUTION FOR DEVELOPERS</p>
        <div className="developer-tools-content">
          <div className="developer-tools-cards">
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Github Repository</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Github Repository</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div> 
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Github Repository</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div> 
          </div>

          {/* tool content #2 */}

          <div className="developer-tools-cards">
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Github Repository</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Github Repository</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div> 
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Github Repository</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div> 
          </div>

          <button>REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTool;
