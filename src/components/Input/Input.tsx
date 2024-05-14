import { Dispatch, SetStateAction } from "react";
import "./input.css";
import { Chat } from "../Layout/Layout";
import React from "react";
import { randomMessage } from "../helper";

type InputProps = {
  chat: Chat[];
  setChat: Dispatch<SetStateAction<Chat[]>>;
};
export const Input = (props: InputProps) => {
  const [inputMessage, setInputMessage] = React.useState("");
  const sendMockMessage = (e: any) => {
    e.preventDefault();
    const reciever = randomMessage();
    const createdResponse = {
      status: 200,
      statusMessage: "Ok",
      atext: reciever,
      lang: "en",
      request: {
        utext: inputMessage,
        lang: "en",
      },
    };
    setInputMessage("");
    props.setChat([...props.chat, createdResponse]);
  };
  return (
    <form onSubmit={sendMockMessage}>
      <div className="input-wrapper">
        <div className="input-group">
          <input
            type="text"
            value={inputMessage}
            className="form-control"
            onChange={(event) => setInputMessage(event.target.value)}
            placeholder="Write message..."
          />
        </div>
      </div>
    </form>
  );
};
