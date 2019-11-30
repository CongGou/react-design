import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Wave from "./components/Wave";
import Card from "./components/Card";
import Section from "./components/Section";
import staticdata from "./staticdata.json";
import Cell from "./components/Cell";
const App = () => (
  <div className="wrap">
    <div className="App">
      <Header />
      <div className="AppGroup">
        <h1>
          Learn to <br />
          design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/">Go to page 2</Link>
        <div className="logos">
          <img src={require("./images/logo-sketch.png")} width="50" alt="" />
          <img src={require("./images/logo-figma.png")} width="50" alt="" />
          <img src={require("./images/logo-studio.png")} width="50" alt="" />
          <img src={require("./images/logo-framer.png")} width="50" alt="" />
          <img src={require("./images/logo-swift.png")} width="50" alt="" />
          <img src={require("./images/logo-react.png")} width="50" alt="" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more comfing</h2>
      <div className="CardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("./images/wallpaper.jpg")}
        />
      </div>
    </div>
    <Section
      image={require("./images/wallpaper2.jpg")}
      logo={require("./images/logo-react.png")}
      title={"React for Designers"}
      text={
        "Complete courses about the best tools and design systems. Prototype and build apps with React and Swift"
      }
    />

    <SectionCaption>12 section - 6 hours</SectionCaption>
    <SectionCellCover>
      <SectionCellGroup>
        {staticdata.cells.map((cell, index) => (
          <Cell image={cell.image} title={cell.title} key={index} />
        ))}
      </SectionCellGroup>
    </SectionCellCover>
  </div>
);

export default App;

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a48a;
  text-align: center;
  overflow: hidden;
`;
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const SectionCellCover = styled.div`
  width: 100%;
`;
