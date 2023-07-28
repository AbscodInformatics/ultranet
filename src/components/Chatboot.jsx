import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import Modal from "react-modal";
const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999, // Make sure it's on top of the chatbot
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    maxHeight: "80vh",
    overflow: "auto",
  },
};

const Chatboot = () => {
  const [showReactPopup, setShowReactPopup] = useState(false);

  const openReactPopup = () => {
    setShowReactPopup(true);
  };

  const closeReactPopup = () => {
    setShowReactPopup(false);
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React",
        },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: "React",
      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Angular",
      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
      end: true,
    },
   
  ];
  return (
    <div>
      <ChatBot steps={steps} />
      {/* React Popup */}
      <Modal
        isOpen={showReactPopup}
        onRequestClose={closeReactPopup}
        style={customModalStyles}
        contentLabel="React Popup"
      >
        {/* You can show your React issue details here */}
        <h2>React Issue Popup</h2>
        <p>Details about the React issue...</p>
        <button onClick={closeReactPopup}>Close</button>
      </Modal>
    </div>
  );
};

export default Chatboot;
