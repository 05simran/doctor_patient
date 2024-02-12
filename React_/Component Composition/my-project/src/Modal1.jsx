import PropTypes from "prop-types";
const Modal1 = ({ setClose, setInfo, setOpen }) => {
    const saveValue = () => {
        setInfo("1st Modal");
        setOpen(true);
    };
    return (
        <div className="w-38 h-52 bg-white rounded-xl m-8 p-12">
            <div>Open The Modal 1</div>
            <div>
                <button
                    onClick={saveValue}
                    className="btn w-38 h-12 p-3 mt-4 bg-black rounded-md text-white"
                >
                    Click to open 1st modal
                </button>
                <button
                    onClick={() => {
                        setClose();
                    }}
                    className="btn w-38 mx-5 h-12 p-3 mt-4 bg-black rounded-md text-white"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

Modal1.propTypes = {
    setInfo: PropTypes.func.isRequired,
    setClose: PropTypes.func.isRequired,
    setOpen: PropTypes.func.isRequired,
};
export default Modal1;
