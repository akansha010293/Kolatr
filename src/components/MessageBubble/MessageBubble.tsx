import React from "react";
import { Chat } from "../Layout/Layout";
import "./messageBubble.css";

export interface MessageBubbleProps {
  response: Chat;
}

export const MessageBubble = (props: MessageBubbleProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { response } = props;

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [response]);

  return (
    <div className="messageContainer">
      <OutgoingBubble requestText={response?.request?.utext} />
      {isLoading ? (
        <TypingIndicator />
      ) : (
        <IncomingBubble responseText={response?.atext} />
      )}
    </div>
  );
};

export default MessageBubble;

const OutgoingBubble = (props: { requestText: string }) => {
  return (
    <div className="senderContainer">
      <span className="senderName">You</span>
      <div className="senderText">{props.requestText}</div>

      <span className="senderTimestamp">{new Date().toLocaleString()}</span>
    </div>
  );
};

const TypingIndicator = () => {
  return (
    <div className="recieverContainer">
      <div className="ticontainer">
        <div className="tiblock">
          <div className="tidot"></div>
          <div className="tidot"></div>
          <div className="tidot"></div>
        </div>
      </div>
    </div>
  );
};
const IncomingBubble = (props: { responseText: string }) => {
  return (
    <div className="recieverContainer">
      <span className="recieverName">Akansha</span>
      <div className="recieverText">{props.responseText}</div>
      <span className="senderTimestamp">{new Date().toLocaleString()}</span>
    </div>
  );
};
