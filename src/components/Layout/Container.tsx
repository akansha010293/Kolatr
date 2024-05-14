import React from "react";
import { Input } from "../Input/Input";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./style.css";

export type Chat = {
  atext: string;
  lang: string;
  request: {
    utext: string;
    lang: string;
  };
  status: number;
  statusMessage: string;
};
export const Container = () => {
  const [chat, setChat] = React.useState<Chat[]>([
    {
      status: 200,
      statusMessage: "Ok",
      atext: "Hello it is a pleasure to meet you!",
      lang: "en",
      request: {
        utext: "hello",
        lang: "en",
      },
    },
  ]);

  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [ref.current?.scrollHeight]);

  // React.useEffect(() => {
  //   fetchChat()
  //     .then((data) => {
  //       if (data.length > 0 && data[0].status === 200) {
  //         setChat(data);
  //       }
  //     })
  //     .catch((res) => console.log(res.status, res.statusText));
  // }, []);

  return (
    <div className="wrapper">
      <StickyContainer>
        <img
          alt="cat"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          className="msgimg"
        />
        <div className="active ">
          <p>Kotalr</p>
        </div>
      </StickyContainer>
      <article className="page-body" ref={ref}>
        {chat.length > 0 &&
          chat.map((c, i) => {
            return <MessageBubble key={i} response={c} />;
          })}
      </article>
      <StickyContainer>
        <Input chat={chat} setChat={setChat} />
      </StickyContainer>
    </div>
  );
};

const StickyContainer = (props: { children: React.ReactNode }) => {
  return <div className="sticky-container">{props.children}</div>;
};
