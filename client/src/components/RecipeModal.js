import React, {Component} from 'react';
import styled from 'styled-components';

const RecipeModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

const RecipeModalInput = styled.input`
    width: 90%; 
    padding: 10px;

    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.secondaryLight};
    }
`;
const RecipeModalTextArea = styled.textarea`
    height: 100px;
    width: 90%; 
    padding: 10px;

    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.secondaryLight};
    }
    font-family: ${props =>  props.theme.font};
`;

const RecipeModalButton = styled.button`
    padding: 10px;
    background: ${props => props.theme.secondaryLight};
    color: ${props => props.theme.textColor};
    font-size: 24px;
    border: none;
    box-shadow: ${props => props.theme.shadow};
    border-radius: 5px;
    width: 20%;
    
    &:hover {
        background: ${props => props.theme.secondary};
    }
`;

const ButtonHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

class RecipeModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        ingredients: "",
        instructions: ""
      }
    }

    handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    onAddButtonClick = () => {
      this.props.onAddRecipeClick(this.state.name, this.state.ingredients, this.state.instructions)
    }

    render() {
      return (
        <RecipeModalWrapper>
          <RecipeModalInput name={"name"} type={"text"} placeholder={"Enter Recipe Name"} onChange={this.handleInputChange} value={this.state.name}/>
          <RecipeModalTextArea name={"ingredients"} type={"text"} placeholder={"Enter Ingredients"} onChange={this.handleInputChange} value={this.state.ingredients}/>
          <RecipeModalTextArea name={"instructions"} type={"text"} rows="50" placeholder={"Enter Instructions"} onChange={this.handleInputChange} value={this.state.instructions}/>
          <ButtonHolder>
            <RecipeModalButton onClick={this.onAddButtonClick}>Add</RecipeModalButton>
            <RecipeModalButton id="closeButton" onClick={this.props.closeModal}>Cancel</RecipeModalButton>
          </ButtonHolder>
        </RecipeModalWrapper>
      )
    }
}

export default RecipeModal
