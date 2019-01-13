import React, {Component} from 'react'
import RecipeViewer from "../components/RecipeViewer";
import {getRecipes} from "../services/request";
import RecipeNavigator from "../components/RecipeNavigator";
import Wrapper from '../components/Wrapper'
import Modal from "../components/Modal";
import RecipeModal from "../components/RecipeModal";
import AddRecipeButton from "../components/AddRecipeButton";
import {validate} from "../services/response";

class RecipeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            seclectedRecipe: undefined,
            showModal: false
        }
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    componentDidMount() {
        getRecipes()
            .then(validate)
            .then((recipes) => {
                this.setState({
                    recipes,
                    seclectedRecipe: 3
                })
            })
            .catch(err => console.error(err)) // we should probably show an error state on the screen when it fails
    }

    onRecipeSelect = (index) => {
        this.setState({
            seclectedRecipe: index
        })
    }

    ModalRenderer(showModal) {
        if(showModal) {
            return (<Modal>
                <RecipeModal closeModal={this.toggleModal}/>
            </Modal>)
        }
    }

    render() {
        return <Wrapper>
            {this.ModalRenderer(this.state.showModal)}
            <RecipeNavigator recipes={this.state.recipes.map(recipe => recipe.name)} onClick={this.onRecipeSelect}>
                <AddRecipeButton onClick={this.toggleModal} />
            </RecipeNavigator>
            <RecipeViewer {...this.state.recipes[this.state.seclectedRecipe]}/>
        </Wrapper>
    }
}

export default RecipeApp;