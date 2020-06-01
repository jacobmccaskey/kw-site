import React from "react";

import Fade from "react-reveal/Fade";
import * as Util from "./util";

function Tutorials() {
  return (
    <React.Fragment>
      <Fade bottom>
        <h1 className="coach-p" style={{ textDecoration: "underline" }}>
          Tutorials
        </h1>
      </Fade>
      <hr />
      <br />
      <div className="container">
        <Fade bottom>
          <h2 className="coach-p">Agent Resources Folder</h2>
          <p className="coach-p">
            We have a agent resources folder on google drive. If you are new to
            the office, we recommend that you save this to your computer. The
            folder contains pertinent information about the office, including
            the office logos, and Policies & Guidelines. There are also several
            tutorials, start guides, & step by step instructions on Command,
            Docusign, etc..
          </p>
          <button className="btn btn-danger mb-2" onClick={Util.resourceDrive}>
            Agent Resources Folder
          </button>
        </Fade>
      </div>
      <div className="container mt-4 mb-4">
        <Fade bottom>
          <hr />
          <h2 className="coach-p">
            Video Walkthrough: Using Docusign & Creating Opportunities{" "}
          </h2>
          <div className="container">
            <iframe
              title="walk-thru"
              src="https://player.vimeo.com/video/415993212"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container mt-4 mb-4">
            <hr />
            <h2 className="coach-p">
              Video Walkthrough: 66-Day Command Challenge
            </h2>
            <span>
              <i>
                {" "}
                <a href="https://www.youtube.com/playlist?list=PLK75KZDqV1zmYQF-hNPH2Qt9GHkUHuId4">
                  full series{" "}
                </a>
              </i>
            </span>
            <br />
            <iframe
              title="66 day challenge"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/r-XZErph4yA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container mt-4 mb-4">
            <hr />
            <h2 className="coach-p">
              Video Walkthrough: Smart Plans & Campaigns
            </h2>
            <span>
              <i>email marketing</i>
            </span>
            <br />
            <iframe
              title="smart plans"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZW6Qwxd8VkI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container-mt-4 mb-4">
            <hr />
            <h2 className="coach-p">Video Walkthrough: Commissions</h2>
            <br />
            <iframe
              title="commissions"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Iu3VYZxbk-s"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container mt-4 mb-4">
            <hr />
            <h2 className="coach-p">Tech Enabled Agent Series - KWU</h2>
            <button
              className="btn btn-danger"
              onClick={() =>
                Util.openNewWindow(
                  "https://www.kwconnect.com/tech-enabled-agent"
                )
              }
            >
              Learn Command
            </button>
          </div>
          <div className="container mt-4 mb-4">
            <hr />
            <h2 className="coach-p">Ignite Handbook</h2>
            <button
              className="btn btn-danger"
              onClick={() =>
                Util.openNewWindow(
                  "http://www.kwconnect.com/page/ignite-student"
                )
              }
            >
              Ignite
            </button>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
}

export default Tutorials;
