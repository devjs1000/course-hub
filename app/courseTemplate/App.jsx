import React from "react";
import "./app.css";
import demo from "./assets/feature-icons/doubt.png";
import Header from "./components/Header/Header";
import Hero from "./containers/hero/Hero";
// import Footer from "./components/Footer/Footer";
import Main from "./containers/main/Main";

function App() {
  const props = {
    title: "React js",
    logged: false,
    punchline: "learn once write everywhere",
    features: [
      {
        title: "ethics",
        description:
          "hello in this course you will learn about how to deal with the problems",
        url: demo,
      },
      {
        title: "ethics",
        description:
          "hello in this course you will learn about how to deal with the problems",
        url: demo,
      },
      {
        title: "ethics",
        description:
          "hello in this course you will learn about how to deal with the problems",
        url: demo,
      },
      {
        title: "ethics",
        description:
          "hello in this course you will learn about how to deal with the problems",
        url: demo,
      },
      {
        title: "ethics",
        description:
          "hello in this course you will learn about how to deal with the problems",
        url: demo,
      },
      {
        title: "ethics",
        description:
          "hello in this course you will learn about how to deal with the problems",
        url: demo,
      },
    ],
	tags:[
		'Spreadsheet',
		'Questioning',
		'Metadata',
		'Data Cleansing',
		'Data Collection',
		'Decision-Making',
		'Data Ethics',
		'SQL',
		'Sample Size Determination',
	],
  related:[
    {title:'vue js', punchline:'most loved js framework', price:'1,500', url:demo},
    {title:'vue js', punchline:'most loved js framework', price:'1,500', url:demo},
    {title:'vue js', punchline:'most loved js framework', price:'1,500', url:demo},
    {title:'vue js', punchline:'most loved js framework', price:'1,500', url:demo}
  ],
  tutor:{name:'anand pandit', about:'react is one of the best skill to have', url:demo}
  };
  return (
    <div className="bg-primary-color-light rounded-lg overflow-hidden">
      <Header />
      <Hero
        title={props.title}
        logged={props.logged}
        related={props.related}
        punchline={props.punchline}
      />
      <Main features={props.features} tutor={props.tutor} tags={props.tags}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
