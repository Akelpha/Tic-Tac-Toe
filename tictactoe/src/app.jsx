import { useState } from "react";

function Square() {
    const [value, setValue] = useState(null);
    function handleClick() {
      setValue("X");
    }
    return <button className="justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold" onClick={handleClick}>{value}</button>;
  }
export default function Board() {
    return(
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className="flex flex-row w-full">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="flex flex-row w-full">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="flex flex-row w-full">
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        </div>
    )
}