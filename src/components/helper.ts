import { messages } from "./data";

export function randomMessage() {
  return messages[(Math.random() * messages.length) | 0];
}
