import type { MetaFunction } from "@remix-run/node";
import { storageManager, StorageItem } from "~/data.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const handleClick = async (op: StorageItem) => {

    try {
      const response = await fetch('/write?operation=' + JSON.stringify(op), {
        method: 'POST', // or 'GET' depending on your API
      });

      if (!response.ok) {
        throw new Error('Failed to send operation to server');
      }

      console.log('Operation sent successfully!');
    } catch (error) {
      console.error('Error sending operation to server:', error);
    }
  };
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <div >
        <button onClick={() => {handleClick(["volume", "up"])}}>Up</button>
        <button onClick={() => {handleClick(["volume", "down"])}}>down</button>
        <button onClick={() => {handleClick(["toggle_pause_play", "___"])}}>pause/play</button>
        <button onClick={() => {handleClick(["toggle_fullscreen", "___"])}}>toogle fullscreen</button>
        <button onClick={() => {handleClick(["next_video", "___"])}}>next video</button>
        <button onClick={() => {handleClick(["go_back", "___"])}}>go back</button>

      </div>
    </div>
  );
}