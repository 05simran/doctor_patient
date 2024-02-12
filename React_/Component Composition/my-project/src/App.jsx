import { useState, useEffect } from "react";
import "./App.css";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import ModalView from "./ModalView";

function App() {
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState("");

    useEffect(() => {
        console.log(info); // This will log the updated value of `info` whenever it changes
    }, [info]); // The effect will re-run whenever `info` changes

    const close = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal1 setOpen={setOpen} setClose={close} setInfo={setInfo} />
            <Modal2 setOpen={setOpen} setClose={close} setInfo={setInfo} />
            <ModalView open={open} handleClose={close} info={info} />
        </div>
    );
}

export default App;
