import React, { Component } from "react";
import RecipeViewer from "../components/RecipeViewer";
import { getRecipes, deleteRecipe, addRecipe } from "../services/request";
import RecipeNavigator from "../components/RecipeNavigator";
import Wrapper from "../components/Wrapper";
import Modal from "../components/Modal";
import RecipeModal from "../components/RecipeModal";
import AddRecipeButton from "../components/AddRecipeButton";
import { validate } from "../services/response";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      seclectedRecipe: undefined,
      showModal: false
    };
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    getRecipes()
      .then(validate)
      .then(recipes => {
        this.setState({
          recipes,
          seclectedRecipe: 3
        });
      })
      .catch(err => console.error(err)); // we should probably show an error state on the screen when it fails
  };

  onRecipeSelect = index => {
    this.setState({
      seclectedRecipe: index
    });
  };

  addRecipe = (name, ingredients, instructions) => {
    addRecipe(name, ingredients, instructions)
      .catch(() => console.log("error should be shown on add recipe modal"))
  }

  ModalRenderer(showModal) {
    if (showModal) {
      return (
        <Modal>
          <RecipeModal title="Add Recipe" closeModal={this.toggleModal} onAddRecipeClick={this.addRecipe}/>
        </Modal>
      );
    }
  }

  onClickDelete = recipeID => {
    deleteRecipe(recipeID)
      .then(this.fetchRecipes)
      .catch(() => alert("Unable to delete"));
  };

  render() {
    return (
      <Wrapper>
        {this.ModalRenderer(this.state.showModal)}
        <RecipeNavigator
          recipes={this.state.recipes.map(recipe => recipe.name)}
          onClick={this.onRecipeSelect}
          seclectedRecipe={this.state.seclectedRecipe}
        >
          <AddRecipeButton onClick={this.toggleModal} />
        </RecipeNavigator>
        <RecipeViewer
          {...this.state.recipes[this.state.seclectedRecipe]}
          onDeleteClick={this.onClickDelete}
        />
      </Wrapper>
    );
  }
}

export default RecipeApp;
