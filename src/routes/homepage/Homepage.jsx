import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital"/>
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
          <img src="./bot.png" alt="" className="bot"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
