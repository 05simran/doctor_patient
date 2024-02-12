import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className=" m-36">
                <h1 className="text-sky-500 font-bold text-8xl">
                    Counter Display
                </h1>
                <div className="text-sky-500 font-bold text-8xl p-10">
                    {count}
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            setCount(count + 1);
                        }}
                        className="py-2 m-1 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-2xl"
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            if (count > 0) {
                                setCount(count - 1);
                            }
                        }}
                        disabled={count === 0 ? true : false}
                        className="py-2 px-5 m-1 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-2xl"
                    >
                        -
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
