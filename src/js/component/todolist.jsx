import React, { useState } from "react";

const TodoList = () => {
    const [need, setNeed] = useState([]);
    const handleOnChange = (e) => {
        if (e.key === "Enter") {
            const yaExiste = need.find(needParam => needParam === e.target.value.trim())
            console.log(yaExiste);
            if (e.target.value.trim() !== "" && yaExiste === undefined) {
                setNeed([...need, e.target.value.trim()]);
                e.target.value = "";
            } else alert("The field cannot be empty, nor can the value be repeated.");
        }
    }
    const deleteNeed = (needParam) => {
        setNeed((previeus) => {
            const newArray = previeus.filter(element => element !== needParam)
            return [...newArray];
        })
    }

    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className="list">
                <input className="input" type="text" placeholder="What needs to be done? " onKeyDown={handleOnChange} />
                <ul>
                    {
                        need.map((needParam) => {
                            <li key={needParam}>
                                {needParam}
                                <button
                                    className="delete"
                                    onClick={() => { deleteNeed(needParam); }}
                                ><i className="fa-solid fa-x" /></button>
                            </li>
                        })
                    }
                </ul>
                <p>{need.length} {need.length > 1 ? "items left" : "item left"}</p>
            </div>
        </div>
    )
}

export default TodoList;

