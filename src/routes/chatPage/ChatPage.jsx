import { useEffect, useRef } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message user">
            Test message from user: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem, pariatur eligendi error at aut impedit
            adipisicing elit. Voluptatem, pariatur eligendi error at aut impedit
            quaerat laboriosam deserunt assumenda excepturi enim nobis in alias
            id hic recusandae nihil eaque harum. quaerat laboriosam deserunt
            assumenda excepturi enim nobis in alias id hic recusandae nihil
            eaque harum.
          </div>
          <div className="message">
            Test message from GPT adipisicing elit. Voluptatem, pariatur
            eligendi error at aut impedit adipisicing elit. Voluptatem, pariatur
            eligendi error at aut impedit quaerat laboriosam deserunt assumenda
            excepturi enim nobis in alias id hic recusandae nihil eaque harum.
            quaerat laboriosam deserunt assumenda excepturi enim nobis in alias
            id hic recusandae nihil eaque harum.
          </div>
          <div className="message user">
            Test message from user: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem, pariatur eligendi error at aut impedit
            adipisicing elit. Voluptatem, pariatur eligendi error at aut impedit
            quaerat laboriosam deserunt assumenda excepturi enim nobis in alias
            id hic recusandae nihil eaque harum. quaerat laboriosam deserunt
            assumenda excepturi enim nobis in alias id hic recusandae nihil
            eaque harum.
          </div>
          <div className="message">
            Test message from GPT adipisicing elit. Voluptatem, pariatur
            eligendi error at aut impedit adipisicing elit. Voluptatem, pariatur
            eligendi error at aut impedit quaerat laboriosam deserunt assumenda
            excepturi enim nobis in alias id hic recusandae nihil eaque harum.
            quaerat laboriosam deserunt assumenda excepturi enim nobis in alias
            id hic recusandae nihil eaque harum.
          </div>
          <div className="message user">
            Test message from user: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem, pariatur eligendi error at aut impedit
            adipisicing elit. Voluptatem, pariatur eligendi error at aut impedit
            quaerat laboriosam deserunt assumenda excepturi enim nobis in alias
            id hic recusandae nihil eaque harum. quaerat laboriosam deserunt
            assumenda excepturi enim nobis in alias id hic recusandae nihil
            eaque harum.
          </div>
          <div className="message">
            Test message from GPT adipisicing elit. Voluptatem, pariatur
            eligendi error at aut impedit adipisicing elit. Voluptatem, pariatur
            eligendi error at aut impedit quaerat laboriosam deserunt assumenda
            excepturi enim nobis in alias id hic recusandae nihil eaque harum.
            quaerat laboriosam deserunt assumenda excepturi enim nobis in alias
            id hic recusandae nihil eaque harum.
          </div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from GPT</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from GPT</div>
          <div className="message user">Test message from user</div>
          <div className="message">
            Test message from GPT ----------------Last messageTest message from
            GPT ----------------Last messageTest message from GPT
            ----------------Last messageTest message from GPT
            ----------------Last messageTest message from GPT
            ----------------Last message
          </div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
