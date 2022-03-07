import React from "react";
import {
  Behance,
  Dribbble,
  Envelope,
  Facebook,
  GeoAlt,
  Google,
  Instagram,
  Telephone,
  Twitter,
} from "react-bootstrap-icons";

const Contact = () => {
  const contactStyles = {
      main:'bg-white',
    header:
      "text-white text-4xl font-bold tracking-widest relative bg-red-700 h-40 flex flex-col justify-center items-center",
    findUs: "text-4xl font-bold text-red-600 text-center",
    findMain: "flex flex-col md:flex-row justify-center items-center py-2",
    findLeftDiv: "flex justify-center items-center",
    findRightDiv: "flex justify-center items-center my-5",
    findIcon:
      "text-red-600 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300 mx-2 cursor-pointer shadow-2xl",
    touchMain: "bg-gray-100 p-5",
    touchHead: "text-4xl font-bold text-gray-600 text-center",
    touchGrid: "grid grid-cols-12 gap-4 my-5 md:px-14",
    form: "col-span-12 md:col-span-6 bg-white text-center p-5 rounded-2xl",
    formHead:
      "text-xl text-red-600 font-bold my-2 border-b-2 border-red-600 w-fit block mx-auto",
    input:
      "w-full border-b border-gray-300 outline-0 py-3 placeholder:text-black text-red-600",
    btn: "bg-gradient-to-r from-red-700 to-red-500 p-2 rounded-lg text-md font-medium text-white mt-5",
    moreMain:
      "bg-gradient-to-r from-red-700 to-red-400 col-span-12 md:col-span-6 p-5 text-white rounded-2xl",
    moreHead:
      "text-xl  font-bold my-2 text-center block w-fit mx-auto mb-2 border-b-2 border-white",
    infoMain: "flex items-center mt-5",
    infoIcon: "border-4 p-2 border-white text-3xl mr-3",
    infoDiv: "text-gray-200",
    infoSpan: "font-bold ml-2 text-white",
  };
  return (
    <div className={contactStyles.main}>
      <div className={contactStyles.header}>
        <h1>Stuck With Issues?</h1>
        <h1>Here We Are</h1>
      </div>
      <div>
        <h1 className={contactStyles.findUs}>Find Us On</h1>
        <div className={contactStyles.findMain}>
          <div className={contactStyles.findLeftDiv}>
            <div className={contactStyles.findIcon}>
              <Facebook />
            </div>
            <div className={contactStyles.findIcon}>
              <Twitter />
            </div>
            <div className={contactStyles.findIcon}>
              <Google />
            </div>
          </div>
          <div className={contactStyles.findRightDiv}>
            <div className={contactStyles.findIcon}>
              <Behance />
            </div>
            <div className={contactStyles.findIcon}>
              <Instagram />
            </div>
            <div className={contactStyles.findIcon}>
              <Dribbble />
            </div>
          </div>
        </div>
      </div>
      <div className={contactStyles.touchMain}>
        <h1 className={contactStyles.touchHead}>Get In Touch</h1>
        <div className={contactStyles.touchGrid}>
          <div className={contactStyles.form}>
            <h6 className={contactStyles.formHead}>Send Message</h6>
            <form action="#">
              <input
                placeholder="Your Name"
                className={contactStyles.input}
                type="text"
              />
              <input
                placeholder="Your Email"
                className={contactStyles.input}
                type="email"
              />
              <input
                placeholder="Your Number"
                className={contactStyles.input}
                type="number"
              />

              <textarea
                placeholder="Your Message"
                className={contactStyles.input}
                rows="5"
              ></textarea>
              <button className={contactStyles.btn}>Send Message</button>
            </form>
          </div>
          <div className={contactStyles.moreMain}>
            <h6 className={contactStyles.moreHead}>Find Out More</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
            <div className={contactStyles.infoMain}>
              <div className={contactStyles.infoIcon}>
                <GeoAlt />
              </div>
              <div className={contactStyles.infoDiv}>
                <h3>
                  Primary:
                  <span className={contactStyles.infoSpan}>
                    Last Vegas, 120 Graphic Street, US
                  </span>
                </h3>
                <h3>
                  Second:
                  <span className={contactStyles.infoSpan}>
                    Califorinia, 88 Design Street, US
                  </span>
                </h3>
              </div>
            </div>
            <div className={contactStyles.infoMain}>
              <div className={contactStyles.infoIcon}>
                <Telephone />
              </div>
              <div className={contactStyles.infoDiv}>
                <h3>
                  Primary:
                  <span className={contactStyles.infoSpan}>
                    (100) 3434 55666
                  </span>
                </h3>
                <h3>
                  Second:
                  <span className={contactStyles.infoSpan}>
                    (20) 323 434 1323
                  </span>
                </h3>
              </div>
            </div>
            <div className={contactStyles.infoMain}>
              <div className={contactStyles.infoIcon}>
                <Envelope />
              </div>
              <div className={contactStyles.infoDiv}>
                <h3>
                  Primary:
                  <span className={contactStyles.infoSpan}>
                    info@xciteedu.com
                  </span>
                </h3>
                <h3>
                  Second:
                  <span className={contactStyles.infoSpan}>mail@mail.com</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
