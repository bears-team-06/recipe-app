import {digestResponse} from "./response";

const getRecipes = () => {
    return fetch('/api/recipes')
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Looks like there was a problem. Status Code: ' +
                    response.status);
            }
            return digestResponse(response)
        })
        .catch(err => console.error('Fetching issue', err))
}

export {
    getRecipes
}