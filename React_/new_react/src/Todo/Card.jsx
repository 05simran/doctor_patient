import PropTypes from "prop-types";
import "./Card.css";
const Card = ({ values, removeTodo }) => {
    return (
        <div className="card_main">
            {values.map((value, index) => (
                <div key={index} className="cards_todo">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {value}
                    </h5>
                    <button
                        onClick={() => removeTodo(index)}
                        className="bg-violet-500 m-4 w-28 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... rounded-md py-2 px-4 text-white"
                    >
                        REMOVE
                    </button>
                </div>
            ))}
        </div>
    );
};

Card.propTypes = {
    values: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default Card;
