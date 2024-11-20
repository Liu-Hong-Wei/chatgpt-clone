import { useEffect, useRef } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      {/* ADD NEW PROMPT */}
      <div ref={endRef}></div>
      <div className="endChat"></div>
      <form className="newForm">
        {/* <label htmlFor="file">
          <img src="/attachment.png" alt="" />
        </label> */}
        <Upload />
        <input id="file" type="file" multiple={false} hidden />
        <input id="prompt" type="text" placeholder="Message ChatGPT" />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
