import React, {Component} from 'react'
import RecipeViewer from "../components/RecipeViewer";
import {getRecipes} from "../services/request";

class RecipeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            seclectedRecipe: undefined
        }
    }

    componentDidMount() {
        getRecipes()
            .then((recipes) => {
                this.setState({
                    recipes,
                    seclectedRecipe: 0
                })
            })
    }

    render() {
        return <div>
            <div>This is recipe app</div>
            <RecipeViewer {...this.state.recipes[this.state.seclectedRecipe]}/>
        </div>
    }
}

export default RecipeApp;