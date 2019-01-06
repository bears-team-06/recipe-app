import React from 'react'

const RecipeViewer = ({id, ingredients, instructions, name}) => {
    return (
        <div>
            Currently selected recipe is {name}
        </div>
    )
}

export default RecipeViewer