import PropTypes from "prop-types";

const Modal2 = ({ setInfo, setClose, setOpen }) => {
    const setValue = (e) => {
        console.log(e.target.value);
        setInfo("Second Modal");
        setOpen(true);
    };

    return (
        <div className="w-38 h-52 bg-white rounded-xl m-8 p-12">
            <div>Open The Modal 2</div>
            <div>
                <button
                    onClick={setValue}
                    className="btn w-38 h-12 p-3 mt-4 bg-black rounded-md text-white"
                >
                    Click to open 2nd modal
                </button>
                <button
                    onClick={() => {
                        setClose();
                    }}
                    className="btn mx-3 w-38 h-12 p-3 mt-4 bg-black rounded-md text-white"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

Modal2.propTypes = {
    setInfo: PropTypes.func.isRequired,
    setClose: PropTypes.func.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default Modal2;
