import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typeStatus, setTypeStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>ChatGPT Clone</h1>
        <h2>This Project is aimed to learn React.</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          expedita quidem sunt distinctio aliquid. Sed atque deleniti odio eum?
          Animi ullam maiores illum dolore earum possimus. Eius est error illo?
        </h3>
        {/* <button>Get Started</button> */}
        <Link to="./dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typeStatus === "human1"
                  ? "./human1.jpeg"
                  : typeStatus === "human2"
                  ? "./human2.jpeg"
                  : "./bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "h: We produce food for Mice",
                2000,
                () => {
                  setTypeStatus("human1");
                },
                "b: We produce food for Hamsters",
                2000,
                () => {
                  setTypeStatus("bot");
                },
                "h: We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypeStatus("human2");
                },
                "b: We produce food for Chinchillas",
                2000,
                () => {
                  setTypeStatus("bot");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
