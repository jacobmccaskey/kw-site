import React from "react";

function Resources() {
  return (
    <div>
      <h2>
        <i>Agent Resources</i>
      </h2>
      <br />
      <hr />
      {/* getting started guide */}
      <div className="container-sm ">
        <p style={{ fontWeight: 600 }} className="text-left">
          Getting Started
        </p>

        <p className="text-left">
          We provide resources to help make your transition to Keller Williams
          as soon as possible. Whether you are new to Real Estate, or
          transfering from another company, we strive to make the process as
          smooth as possible. Please click on the link below to access the our
          agent resources folder.
        </p>
        <button className="btn btn-outline-secondary text-center">
          Click Me
        </button>
      </div>
      {/* agent Support */}
      <div className="container-sm text-left">
        <hr />
        <p style={{ fontWeight: 600 }} className="text-left">
          Support
        </p>

        <p className="text-left">Scott Le Roy</p>
        <br />
        <span>
          <i>support@scottleroy.com</i>
        </span>
        <br />
        <p className="text-left">Keller Williams Support</p>
        <span>some email</span>
        <br />
        <i>888-888-8888</i>
      </div>
      {/* training */}
      <div className="container-sm text-left">
        <hr />
        <p style={{ fontWeight: 600 }} className="text-left">
          Training
        </p>
        <span>some text here about training, put link to calendar</span>
      </div>
      {/* helpful websites */}
      <div className="container-sm text-left">
        <hr />
        <p style={{ fontWeight: 600 }} className="text-left">
          Helpful websites
        </p>
        <span>insert table with links to websites</span>
      </div>
      {/* facebook group stuff */}
      <div className="container-sm">
        <hr />
        <p style={{ fontWeight: 600 }} className="text-left">
          Facebook Group
        </p>
        <p className="text-left">
          We have a private facebook group! This is a great place to connect
          with other agents in the office, advertise listings, post open houses,
          or just ask general questions.
        </p>
        <button className="btn btn-outline-secondary">Get Connected</button>
      </div>
    </div>
  );
}

export default Resources;

// agent support, training, facebook group, helpful websites
