import React from "react";
import Fade from "react-reveal/Fade";

export default function Ignite() {
  return (
    <div className="container">
      <h1 className="coach-p">Ignite</h1>
      <hr />

      <div className="container mt-4 mb-4">
        <hr />
        <h2 className="coach-p">Ignite 5</h2>
        <span>
          <i>ignite course</i>
        </span>
        <br />
        <iframe
          title="smart plans"
          className="videos"
          src="https://www.youtube.com/embed/AP89bEWyqpw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container mt-4 mb-4">
        <hr />
        <h2 className="coach-p">Ignite 6</h2>
        <span>
          <i>ignite course</i>
        </span>
        <br />
        <iframe
          title="smart plans"
          className="videos"
          src="https://www.youtube.com/embed/G5khcQCH6hY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
