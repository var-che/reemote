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
    console.log("we clicked")
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
    // <div className="font-system-ui leading-1.8">
    //   <h1 className="text-4xl font-bold mb-4">Welcome to Reemote</h1>
    //   <div className="flex flex-wrap">

    //     <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full mb-4 sm:mb-0">
    //       <button onClick={() => { handleClick(["volume", "up"]) }} className="w-full bg-blue-500 text-white p-3 rounded-md">Up</button>
    //     </div>

    //     <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full mb-4 sm:mb-0">
    //       <button onClick={() => { handleClick(["go_back", "___"]) }} className="w-full bg-green-500 text-white p-3 rounded-md">Back</button>
    //     </div>

    //     <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full mb-4 sm:mb-0">
    //       <button onClick={() => { handleClick(["toggle_pause_play", "___"]) }} className="w-full bg-yellow-500 text-white p-3 rounded-md">Pause/Play</button>
    //     </div>

    //     <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full mb-4 sm:mb-0">
    //       <button onClick={() => { handleClick(["next_video", "___"]) }} className="w-full bg-red-500 text-white p-3 rounded-md">Next</button>
    //     </div>

    //     <div className="w-full sm:w-1/2 md:w-full lg:w-full xl:w-full">
    //       <button onClick={() => { handleClick(["go_back", "___"]) }} className="w-full bg-purple-500 text-white p-3 rounded-md">Down</button>
    //     </div>

    //   </div>
    // </div>
    <div className="wrapper">
      <div className="container mx-auto">
        <div>
          <h3>Reemote</h3>
        </div>
        <div className="column-1">
          <div className="grid grid-cols-3 gap-4">
            <div className="grid grid-cols-subgrid gap-4 col-span-3">
              <div className="col-start-2 ">
                <button onClick={() => { handleClick(["volume", "up"]) }} className="w-full rounded-t-lg bg-indigo-500 p-8">Up</button>
              </div>
            </div>
            <div>
            <button onClick={() => { handleClick(["go_back", "___"]) }} className="w-full rounded-l-lg bg-indigo-500 p-8">Left</button>
            </div>
            <div>
            <button  onClick={() => { handleClick(["toggle_pause_play", "___"]) }} className="w-full rounded-full bg-indigo-500 p-8">OK</button>
            </div>
            <div>
            <button onClick={() => { handleClick(["next_video", "___"]) }} className="w-full rounded-r-lg bg-indigo-500 p-8">Right</button>
            </div>
            <div className="grid grid-cols-subgrid gap-4 col-span-3">
              <div className="col-start-2">
              <button onClick={() => { handleClick(["volume", "down"]) }} className="w-full rounded-b-lg bg-indigo-500 p-8">Down</button>
              </div>
            </div>
            <div className="grid grid-cols-subgrid gap-4 col-span-3 mt-10">
              <div className="col-start-2">
              <button onClick={() => { handleClick(["toggle_fullscreen", "___"]) }} className="w-full rounded-none bg-indigo-500 p-8">Fullscreen</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  );
}
