import { TypeAnimation } from "react-type-animation";
import "./dashboardPage.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (text) => {
      return fetch(`${import.meta.env.VITE_APT_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };

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
              <span>Help with Code</span>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input
              name="text"
              type="text"
              autoComplete="off"
              placeholder="Message ChatGPT Clone"
            />
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
