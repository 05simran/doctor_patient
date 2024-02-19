import PropTypes from "prop-types";
const AddToCart = ({ addToCart, removeItem }) => {
    return (
        <div className="addCart h-svh w-2/5 right-0 top-24 absolute bg-white">
            <h4 className="text-center font-bold">
                The Items You Wish To Have
            </h4>

            {addToCart.map((val, index) => {
                return (
                    <>
                        <div
                            className="w-11/12 rounded-sm bg-white drop-shadow-lg text-black h-40 m-5 flex justify-center"
                            style={{ margin: "13px 6%" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="svgg"
                                onClick={() => {
                                    removeItem(val, index);
                                }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>

                            <div>
                                <img
                                    src={val.image}
                                    alt=""
                                    className="cart-img"
                                />
                            </div>
                            <div style={{ marginLeft: "30px" }}>
                                <span className="cart-title"> {val.title}</span>
                                <p className="cart-p">{val.description}</p>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
};
AddToCart.propTypes = {
    addToCart: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default AddToCart;
