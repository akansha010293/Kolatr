import { Chat } from "../Layout/Container";
import "./messageBubble.css";

export interface MessageBubbleProps {
  response: Chat;
}

export const MessageBubble = (props: MessageBubbleProps) => {
  const { response } = props;

  return (
    <div className="messageContainer">
      <OutgoingBubble requestText={response?.request?.utext} />
      <IncomingBubble responseText={response?.atext} />
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

const IncomingBubble = (props: { responseText: string }) => {
  return (
    <div className="recieverContainer">
      <span className="recieverName">Akansha</span>
      <div className="recieverText">{props.responseText}</div>
      <span className="senderTimestamp">{new Date().toLocaleString()}</span>
    </div>
  );
};
