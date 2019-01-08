import React, {Component} from 'react'
import RecipeViewer from "../components/RecipeViewer";
import {getRecipes} from "../services/request";
import RecipeNavigator from "../components/RecipeNavigator";
import Wrapper from '../components/Wrapper'

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
                    seclectedRecipe: 3
                })
            })
    }

    onRecipeSelect = (index) => {
        this.setState({
            seclectedRecipe: index
        })
    }

    render() {
        return <Wrapper>
            <RecipeNavigator recipes={this.state.recipes.map(recipe => recipe.name)} onClick={this.onRecipeSelect}/>
            <RecipeViewer {...this.state.recipes[this.state.seclectedRecipe]}/>
        </Wrapper>
    }
}

export default RecipeApp;