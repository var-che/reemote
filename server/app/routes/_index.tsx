import type { MetaFunction } from "@remix-run/node";
import { StorageItem } from "~/data.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Reemote" },
    { name: "description", content: "Welcome to Reemote!" },
  ];
};

export default function Index() {
  const handleClick = async (op: StorageItem) => {

    try {
      const response = await fetch('/write?operation=' + JSON.stringify(op), {
        method: 'POST',
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
      <h1>Welcome to Reemote</h1>
      <div style={{ display: "inline-flex", flexFlow: "row wrap" }}>

        <div style={{ flex: "0 0 100%", textAlign: "center", margin: "5px" }}>
          <button onClick={() => { handleClick(["volume", "up"]) }}
          >Up</button>
        </div>
        <div style={{ flex: "1 0 1%", justifyContent: "flex-end", textAlign: "center",  margin: "5px" }}>
          <button onClick={() => { handleClick(["go_back", "___"]) }}
          >Back</button>
        </div>
        <div style={{textAlign: "center",  margin: "5px"}}>
          <button onClick={() => { handleClick(["toggle_pause_play", "___"]) }}
          >pause/play</button>
        </div>
        <div style={{ flex: "1 0 1%", justifyContent: "flex-start", textAlign: "center",  margin: "5px" }}>
          <button onClick={() => { handleClick(["next_video", "___"]) }}
          >Next</button>
        </div>
        <div style={{ flex: "0 0 100%", textAlign: "center", margin: "5px" }}>
          <button onClick={() => { handleClick(["go_back", "___"]) }}
          >Down</button>
        </div>
      </div>
    </div>
  );
}
