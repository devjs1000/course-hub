import React from "react";
import {
  ArrowsExpand,
  CloudArrowDown,
  Collection,
  JournalArrowDown,
  PatchCheck,
  Percent,
  Person,
  ShieldCheck,
  Tree,
} from "react-bootstrap-icons";
import bg from "../../../assets/images/about-bg.png";

const About = () => {
  const styles = {
    topDiv:
      "bg-gradient-to-r from-red-500 to-pink-500 py-12 flex flex-col justify-center items-center text-white",
    topHead: "border-b-2 text-3xl font-bold mb-2 pb-2",
    topGridMain: "bg-gray-100",
    topGridWrapper: "grid grid-cols-12 gap-6 mx-5 md:mx-14 lg:mx-36 py-8",
    topGridItem:
      "col-span-12 md:col-span-4 p-10 flex flex-col justify-center items-center text-center rounded-2xl bg-gray-200 border-slate-300 cursor-pointer border-2 hover:-translate-y-4 transition-transform",
    topIconDiv:
      "w-10 h-10 flex items-center justify-center text-white rounded-full text-2xl",
    topGridHead: "font-bold my-3",
    topGridShort: "leading-7",
    whyMain: "p-10 md:px-12 lg:px-24 relative overflow-hidden",
    whyBg: "absolute top-0 left-0 opacity-80 w-full",
    whyHead: "text-4xl font-medium relative -top-5 text-center text-white",
    whyGrid: "grid grid-cols-12 mt-5 gap-6",
    whyGridItem:
      "h-48 cursor-pointer hover:scale-105 transition relative col-span-12 md:col-span-6 lg:col-span-4 bg-white text-black p-5 shadow-2xl rounded-b-2xl rounded-tl-2xl hover:bg-gradient-to-b from-red-500 to-pink-500 hover:text-white",
    whyIcon:
      "absolute top-0 right-0 w-10 h-10 text-2xl flex items-center justify-center bg-pink-500 text-white rounded-bl-2xl",
    whyItemHead: "text-2xl font-medium mb-2",
  };
  /*
  //Styles
  topDiv : the whole page
  topHead : the Heading of the page
  topGridMain : the section after Heading. Contains 3 cards
  topGridWrapper : wrapper div for all the cards inside topGrid
  topGridItem: the card inside grid wrapper
  topIconDiv : the icon inside grid card
  */
  return (
    <div>
      <div className={styles.topDiv}>
        <h1 className={styles.topHead}>About Us</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Culpa commodi, fugit suscipit ut</p>
      </div>
      <div className={styles.topGridMain}>
        <div className={styles.topGridWrapper}>
      {/*Clean Design Card*/}
          <div className={styles.topGridItem}>
            <div className="p-2 rounded-full bg-red-200">
              <div className="p-2 rounded-full bg-red-300">
                <div className="p-2 rounded-full bg-red-400">
                  <div className={`${styles.topIconDiv} bg-red-500`}>
                    <Person />
                  </div>
                </div>
              </div>
            </div>
            <h2 className={`${styles.topGridHead} text-red-700`}>
              CLEAN DESIGN
            </h2>
            <p className={styles.topGridShort}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              commodi, fugit suscipit ut
            </p>
          </div>
        {/*Secure Data Card*/}
          <div className={styles.topGridItem}>
            <div className="p-2 rounded-full bg-blue-200">
              <div className="p-2 rounded-full bg-blue-300">
                <div className="p-2 rounded-full bg-blue-400">
                  <div className={`${styles.topIconDiv} bg-blue-500`}>
                    <CloudArrowDown />
                  </div>
                </div>
              </div>
            </div>
            <h2 className={`${styles.topGridHead} text-blue-700`}>
              SECURE DATA
            </h2>
            <p className={styles.topGridShort}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              commodi, fugit suscipit ut
            </p>
          </div>
        {/*Retina Ready Card*/}
          <div className={styles.topGridItem}>
            <div className="p-2 rounded-full bg-green-200">
              <div className="p-2 rounded-full bg-green-300">
                <div className="p-2 rounded-full bg-green-400">
                  <div className={`${styles.topIconDiv} bg-green-500`}>
                    <ShieldCheck />
                  </div>
                </div>
              </div>
            </div>
            <h2 className={`${styles.topGridHead} text-green-700`}>
              RETINA READY
            </h2>
            <p className={styles.topGridShort}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              commodi, fugit suscipit ut
            </p>
          </div>
        </div>
      </div>
      <div className={styles.whyMain}>
        <img className={styles.whyBg} src={bg} alt="" />
        <h1 className={styles.whyHead}>Why Choose Us</h1>
        <div className={styles.whyGrid}>
          <div className={styles.whyGridItem}>
            <div className={styles.whyIcon}>
              <Tree />
            </div>
            <h4 className={styles.whyItemHead}>Trening Courses</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles.whyGridItem}>
            <div className={styles.whyIcon}>
              <JournalArrowDown />
            </div>
            <h4 className={styles.whyItemHead}>Books Liberary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles.whyGridItem}>
            <div className={styles.whyIcon}>
              <PatchCheck />
            </div>
            <h4 className={styles.whyItemHead}>Certified Teacher</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles.whyGridItem}>
            <div className={styles.whyIcon}>
              <Percent />
            </div>
            <h4 className={styles.whyItemHead}>Available Support</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles.whyGridItem}>
            <div className={styles.whyIcon}>
              <ArrowsExpand />
            </div>
            <h4 className={styles.whyItemHead}>Experts Teacher</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={styles.whyGridItem}>
            <div className={styles.whyIcon}>
              <Collection />
            </div>
            <h4 className={styles.whyItemHead}>Books Liberary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
