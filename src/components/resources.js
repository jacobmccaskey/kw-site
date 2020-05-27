import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import skyScraper from "../img/skyscraper.jpg";
import * as Util from "./util";

class Resources extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    window.open(`
    https://answers.kw.com/hc/en-us/search?utf8=%E2%9C%93&query=${this.state.input}
    `);

    this.setState({
      input: "",
    });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Fade bottom>
          <div className="box container-sm">
            <img src={skyScraper} alt="skyscraper" />
            <div className="text mt-4">
              <h2>Resource Portal</h2>
              <br />
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                  className="form-control text-left"
                  onChange={(e) => this.handleChange(e)}
                  name="input"
                  value={this.state.input}
                ></input>
              </form>
            </div>
          </div>
        </Fade>
        <br />
        <hr />
        {/* getting started guide */}
        <Fade bottom>
          <div className="container-sm ">
            <p style={{ fontWeight: 600 }} className="text-left">
              Getting Started
            </p>

            <p className="text-left">
              We provide resources to help make your transition to Keller
              Williams as soon as possible. Whether you are new to Real Estate,
              or transfering from another company, we strive to make the process
              as smooth as possible. Please click on the link below to access
              the our agent resources folder.
            </p>
            <button
              className="btn btn-outline-secondary text-center"
              onClick={Util.resourceDrive}
            >
              Click Me
            </button>
          </div>
        </Fade>
        {/* agent Support */}
        <Fade bottom>
          <div className="container-sm text-left">
            <hr />
            <div className="container-sm">
              {" "}
              <p style={{ fontWeight: 600 }}>Support</p>
              <span>
                {" "}
                Please contact the office at 813-865-0700 or email
                frontdesk738@kw.com to reserve a conference room. For any tech
                related questions, please email Jacob at jacobmccaskey@kw.com
              </span>
            </div>
            <br />
            <p
              className="text-left"
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Scott Le Roy Marketing
            </p>

            <span>
              <i>support@scottleroymarketing.com</i>
            </span>
            <br />
            <span>(321) 236-2568</span>

            <br />
            <br />
            <p
              className="text-left"
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Office Support
            </p>
            <span>
              (813) 865-0700 | 1208 E Kennedy Blvd Suite 231 Tampa, FL 33602
            </span>
            <br />
            <ul>
              <li className="text-left">
                Jacob McCaskey | Agent Services | jacobmccaskey@kw.com
              </li>

              <li className="text-left">
                <span>
                  Marta Vega | Market Center Administrator | klrw738@kw.com
                </span>
              </li>

              <li className="text-left">
                <span>Dallas Coffield | Team Leader | dcoffield@kw.com</span>
              </li>

              <li className="text-left">
                <span>
                  Danny Gitsas | Director of First Impressions |
                  frontdesk738@kw.com
                </span>
              </li>

              <li className="text-left">
                <span>Bill Kilpatrick | Broker | bill.kilpatrick@kw.com</span>
              </li>
            </ul>

            <br />
            <p
              className="text-left"
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Coaches
            </p>
            <ul>
              <li className="text-left">
                Ivan Castillo | icastillo@kw.com | (813) 463-8345
              </li>
              <li className="text-left">
                Billy Lolly | billylolly@kw.com | (813) 966-7446{" "}
              </li>
              <li className="text-left">
                Nicholas Buchanan | njbuchanan@kw.com | (813) 760-1054
              </li>
            </ul>

            <br />
            <p style={{ textDecoration: "underline" }}>
              Would you like to learn more about coaching?
            </p>
            <div className="container-sm">
              <button className="btn btn-outline-danger">Click Here</button>
            </div>
          </div>
        </Fade>
        {/* training */}
        <Fade bottom>
          <div className="container-sm text-left">
            <hr />
            <p style={{ fontWeight: 600 }} className="text-left">
              Training
            </p>
            <span>
              We offer weekly classes in the market center and online via zoom.
              Classes are catered towards agents of all experience levels and
              cover several topics. For a full outline of our training schedule,
              click on the link below to access our calendar.
            </span>
            <div className="container-sm">
              <button
                className="btn btn-outline-danger mt-2"
                onClick={() => {
                  window.open("http://localhost:3000/calendar");
                }}
              >
                Calendar
              </button>
            </div>
          </div>
        </Fade>
        {/* helpful websites */}
        <Fade bottom>
          <div className="container-sm text-left">
            <hr />
            <p style={{ fontWeight: 600 }} className="text-left">
              Helpful websites
            </p>
            <table className="table">
              <thread>
                <th scope="col">
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() =>
                      Util.openNewWindow("https://answers.kw.com/hc/en-us")
                    }
                  >
                    answers.kw.com
                  </button>
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() =>
                      Util.openNewWindow("https://yourtekhub.com/")
                    }
                  >
                    YourTekHub.com
                  </button>
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() =>
                      Util.openNewWindow(
                        "https://www.youtube.com/watch?v=r-XZErph4yA&list=PLK75KZDqV1zmYQF-hNPH2Qt9GHkUHuId4"
                      )
                    }
                  >
                    66 day challenge
                  </button>
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() => Util.openNewWindow("https://access.kw.com")}
                  >
                    mykw.kw.com
                  </button>
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() =>
                      Util.openNewWindow(
                        "http://www.kwconnect.com/page/livestreams"
                      )
                    }
                  >
                    KW livestreams
                  </button>
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() => Util.openNewWindow("https://stellarmls.com")}
                  >
                    MLS
                  </button>
                  <button
                    className="btn btn-outline-secondary mr-2 mt-1"
                    onClick={() =>
                      Util.openNewWindow(
                        "https://www.kwconnect.com/search?q=%23kwuapprovedguides&tfilter=ALL%2BCONTENT&fbclid=IwAR3iVADS5QdHaJdJ8jimgfKgvOVfG-cnyMuINSvSexNoMMktLcKHFKTjTIc"
                      )
                    }
                  >
                    KWU Guides
                  </button>
                </th>
              </thread>
            </table>
          </div>
        </Fade>
        {/* facebook group stuff */}
        <Fade bottom>
          <div className="container-sm">
            <hr />
            <p style={{ fontWeight: 600 }} className="text-left">
              Facebook Group
            </p>
            <p className="text-left">
              We have a private facebook group! This is a great place to connect
              with other agents in the office, advertise listings, post open
              houses, or just ask general questions.
            </p>
            <button
              className="btn btn-outline-secondary mb-4"
              onClick={Util.facebookGroup}
            >
              Get Connected
            </button>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Resources;
// function Resources() {
//   return (
//     <div>
//       <Fade bottom>
//         <div className="box container-sm">
//           <img src={skyScraper} alt="skyscraper" />
//           <div className="text mt-4">
//             <h2>Resource Portal</h2>
//             <br />
//             <form onSubmit={()=> {
//               let data =
//             }}>
//               <input className="form-control text-left"></input>
//             </form>
//           </div>
//         </div>
//       </Fade>
//       <br />
//       <hr />
//       {/* getting started guide */}
//       <Fade bottom>
//         <div className="container-sm ">
//           <p style={{ fontWeight: 600 }} className="text-left">
//             Getting Started
//           </p>

//           <p className="text-left">
//             We provide resources to help make your transition to Keller Williams
//             as soon as possible. Whether you are new to Real Estate, or
//             transfering from another company, we strive to make the process as
//             smooth as possible. Please click on the link below to access the our
//             agent resources folder.
//           </p>
//           <button
//             className="btn btn-outline-secondary text-center"
//             onClick={Util.resourceDrive}
//           >
//             Click Me
//           </button>
//         </div>
//       </Fade>
//       {/* agent Support */}
//       <Fade bottom>
//         <div className="container-sm text-left">
//           <hr />
//           <div className="container-sm">
//             {" "}
//             <p style={{ fontWeight: 600 }}>Support</p>
//             <span>
//               {" "}
//               Please contact the office at 813-865-0700 or email
//               frontdesk738@kw.com to reserve a conference room. For any tech
//               related questions, please email Jacob at jacobmccaskey@kw.com
//             </span>
//           </div>
//           <br />
//           <p
//             className="text-left"
//             style={{ fontWeight: 500, textDecoration: "underline" }}
//           >
//             Scott Le Roy Marketing
//           </p>

//           <span>
//             <i>support@scottleroymarketing.com</i>
//           </span>
//           <br />
//           <span>(321) 236-2568</span>

//           <br />
//           <br />
//           <p
//             className="text-left"
//             style={{ fontWeight: 500, textDecoration: "underline" }}
//           >
//             Office Support
//           </p>
//           <span>
//             (813) 865-0700 | 1208 E Kennedy Blvd Suite 231 Tampa, FL 33602
//           </span>
//           <br />
//           <ul>
//             <li className="text-left">
//               Jacob McCaskey | Agent Services | jacobmccaskey@kw.com
//             </li>

//             <li className="text-left">
//               <span>
//                 Marta Vega | Market Center Administrator | klrw738@kw.com
//               </span>
//             </li>

//             <li className="text-left">
//               <span>Dallas Coffield | Team Leader | dcoffield@kw.com</span>
//             </li>

//             <li className="text-left">
//               <span>
//                 Danny Gitsas | Director of First Impressions |
//                 frontdesk738@kw.com
//               </span>
//             </li>

//             <li className="text-left">
//               <span>Bill Kilpatrick | Broker | bill.kilpatrick@kw.com</span>
//             </li>
//           </ul>

//           <br />
//           <p
//             className="text-left"
//             style={{ fontWeight: 500, textDecoration: "underline" }}
//           >
//             Coaches
//           </p>
//           <ul>
//             <li className="text-left">
//               Ivan Castillo | icastillo@kw.com | (813) 463-8345
//             </li>
//             <li className="text-left">
//               Billy Lolly | billylolly@kw.com | (813) 966-7446{" "}
//             </li>
//             <li className="text-left">
//               Nicholas Buchanan | njbuchanan@kw.com | (813) 760-1054
//             </li>
//           </ul>

//           <br />
//           <p style={{ textDecoration: "underline" }}>
//             Would you like to learn more about coaching?
//           </p>
//           <div className="container-sm">
//             <button className="btn btn-outline-danger">Click Here</button>
//           </div>
//         </div>
//       </Fade>
//       {/* training */}
//       <Fade bottom>
//         <div className="container-sm text-left">
//           <hr />
//           <p style={{ fontWeight: 600 }} className="text-left">
//             Training
//           </p>
//           <span>
//             We offer weekly classes in the market center and online via zoom.
//             Classes are catered towards agents of all experience levels and
//             cover several topics. For a full outline of our training schedule,
//             click on the link below to access our calendar.
//           </span>
//           <div className="container-sm">
//             <button
//               className="btn btn-outline-danger mt-2"
//               onClick={() => {
//                 window.open("http://localhost:3000/calendar");
//               }}
//             >
//               Calendar
//             </button>
//           </div>
//         </div>
//       </Fade>
//       {/* helpful websites */}
//       <Fade bottom>
//         <div className="container-sm text-left">
//           <hr />
//           <p style={{ fontWeight: 600 }} className="text-left">
//             Helpful websites
//           </p>
//           <table className="table">
//             <thread>
//               <th scope="col">
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() =>
//                     Util.openNewWindow("https://answers.kw.com/hc/en-us")
//                   }
//                 >
//                   answers.kw.com
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() => Util.openNewWindow("https://yourtekhub.com/")}
//                 >
//                   YourTekHub.com
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() =>
//                     Util.openNewWindow(
//                       "https://www.youtube.com/watch?v=r-XZErph4yA&list=PLK75KZDqV1zmYQF-hNPH2Qt9GHkUHuId4"
//                     )
//                   }
//                 >
//                   66 day challenge
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() => Util.openNewWindow("https://access.kw.com")}
//                 >
//                   mykw.kw.com
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() =>
//                     Util.openNewWindow(
//                       "http://www.kwconnect.com/page/livestreams"
//                     )
//                   }
//                 >
//                   KW livestreams
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() => Util.openNewWindow("https://stellarmls.com")}
//                 >
//                   MLS
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary mr-2 mt-1"
//                   onClick={() =>
//                     Util.openNewWindow(
//                       "https://www.kwconnect.com/search?q=%23kwuapprovedguides&tfilter=ALL%2BCONTENT&fbclid=IwAR3iVADS5QdHaJdJ8jimgfKgvOVfG-cnyMuINSvSexNoMMktLcKHFKTjTIc"
//                     )
//                   }
//                 >
//                   KWU Guides
//                 </button>
//               </th>
//             </thread>
//           </table>
//         </div>
//       </Fade>
//       {/* facebook group stuff */}
//       <Fade bottom>
//         <div className="container-sm">
//           <hr />
//           <p style={{ fontWeight: 600 }} className="text-left">
//             Facebook Group
//           </p>
//           <p className="text-left">
//             We have a private facebook group! This is a great place to connect
//             with other agents in the office, advertise listings, post open
//             houses, or just ask general questions.
//           </p>
//           <button
//             className="btn btn-outline-secondary mb-4"
//             onClick={Util.facebookGroup}
//           >
//             Get Connected
//           </button>
//         </div>
//       </Fade>
//     </div>
//   );
// }

// export default Resources;

// agent support, training, facebook group, helpful websites
