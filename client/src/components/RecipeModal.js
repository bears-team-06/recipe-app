import React from 'react'

const RecipeModal = (props) => {
    return (
        <div>
            <div><input type={"text"} placeholder={"Enter Recipe Name"} /></div>
            <div><input type={"textarea"} placeholder={"Enter ingredients"} /></div>
            <div><input type={"textarea"} placeholder={"Enter instructions"} /></div>
            <div><button onClick={props.closeModal}>Close</button></div>
        </div>
    )
}

export default RecipeModal