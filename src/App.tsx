import React from "react";
import "./App.css";
import { Chat, Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
//
export async function fetchChat(): Promise<Chat[]> {
  try {
    // const response = await fetch(`/api/chat.json?id=${id}`);

    const url = "https://wsapi.simsimi.com/190410/talk";
    // @todo fetch the uText value from Input
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-api-key": "E0bxvc3jrtHZwzkRsu9N1lisZZhW~zuLaYbJGS6M",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        utext: "hello",
        lang: "en",
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Failed to fetch survey");
    }
    return data;
  } catch (e) {
    console.log(e);
    return e as unknown as any[];
  }
}
