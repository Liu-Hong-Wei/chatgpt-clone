import { TypeAnimation } from "react-type-animation";
import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <>
      <div className="dashboardPage">
        <div className="texts">
          <div className="logo">
            <img src="/logo.png" alt="" />
            <TypeAnimation
              sequence={[
                3000,
                "What can I help with?",
                3000,
                "The ChatGPT Clone",
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
          <div className="options">
            <div className="option">
              <img src="/chat.png" alt="" />
              <span>Write a message</span>
            </div>
            <div className="option">
              <img src="/image.png" alt="" />
              <span>Analyze an image</span>
            </div>
            <div className="option">
              <img src="/code.png" alt="" />
              <span>Help with my Code</span>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form action="">
            <input type="text" placeholder="Message ChatGPT Clone" />
            <button>
              <img src="arrow.png" alt="" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
