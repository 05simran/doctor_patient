import { useState } from "react";
import "./Todo.css";
import Card from "./Card";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        setTodoList([...todoList, todo]);
        setTodo("");
    };

    const clearTodo = () => {
        setTodo("");
    };

    const removeTodo = (index) => {
        let updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
    };

    return (
        <div className="main-todo">
            <div>
                <input
                    placeholder="Add your wish to do task here please...."
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="border border-gray-300 w-96 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-violet-300"
                />
            </div>
            <div>
                <button
                    onClick={addTodo}
                    disabled={todo === "" ? true : false}
                    className="bg-violet-500 m-4 w-28 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md py-2 px-4 text-white"
                >
                    ADD
                </button>
                <button
                    onClick={clearTodo}
                    className="bg-violet-500 m-4 w-28 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md py-2 px-4 text-white"
                >
                    CLEAR
                </button>
            </div>

            {todoList.length ? (
                <Card values={todoList} removeTodo={removeTodo} />
            ) : null}
        </div>
    );
};

export default Todo;
