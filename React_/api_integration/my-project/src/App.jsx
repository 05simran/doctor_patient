import { useEffect, useState } from "react";
import "./App.css";
import "./assets/NavBar/Navbar";
import Navbar from "./assets/NavBar/Navbar";
import ModalView from "./assets/NavBar/ModalView";
import AddToCart from "./assets/NavBar/AddToCart";

function App() {
    const [values, setValues] = useState([]);
    const [product, setProduct] = useState();
    const [addToCart, setAddToCart] = useState([]);
    const [addToOn, setAddToOn] = useState(false);
    const [showproduct, setShowProduct] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setShowProduct(product);
    }, [product]);
    const addItemsToCart = (product) => {
        setAddToCart([...addToCart, product]);
    };

    const toggleModal = (product) => {
        setProduct(product);
        setIsModalOpen(!isModalOpen);
    };
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then((json) => {
                setValues(json);
            });
    }, []);
    const onClose = () => {
        setIsModalOpen(false);
    };

    const removeItem = (item, index) => {
        const updatedValue = [...addToCart];
        updatedValue.splice(index, 1);
        setAddToCart(updatedValue);
    };
    return (
        <>
            <Navbar
                addToCart={addToCart.length}
                setAddToOn={setAddToOn}
                addToOn={addToOn}
            />
            <div className="flex flex-wrap justify-center">
                {values.map((product) => (
                    <>
                        <div className="product-div">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-img"
                            />
                            <h6 className="product-heading">{product.title}</h6>
                            <div className="flex justify-around">
                                <button
                                    className="btn_home"
                                    onClick={() => toggleModal(product)}
                                >
                                    VIEW
                                </button>
                                <button
                                    className="btn_home"
                                    onClick={() => addItemsToCart(product)}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <ModalView
                open={isModalOpen}
                toggleModal={toggleModal}
                product={showproduct}
                onClose={onClose}
            />
            {addToOn ? (
                <AddToCart addToCart={addToCart} removeItem={removeItem} />
            ) : null}
        </>
    );
}

export default App;
