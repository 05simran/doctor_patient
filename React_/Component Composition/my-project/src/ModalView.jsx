import PropTypes from "prop-types";
import { Fragment } from "react";

const ModalView = ({ open, handleClose, info }) => {
    return (
        <Fragment>
            {open && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="relative bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                            <div>{info}</div>
                            <button
                                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};
ModalView.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    info: PropTypes.node.isRequired,
};

export default ModalView;
