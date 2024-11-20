import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard"></Link>
      <Link to="/">Create a new Chat</Link>
      <Link to="/">Explore GPT</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to ChatGPT Plus</span>
          <span>To get unlimited access to all feature</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
