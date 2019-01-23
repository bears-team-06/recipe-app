import React from 'react';
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
    
    &:hover {
        background: ${props => props.theme.secondary};
    }
`;

const RecipeModal = (props) => {
    return (
        <RecipeModalWrapper>
            <RecipeModalInput type={"text"} placeholder={"Enter Recipe Name"} />
            <RecipeModalTextArea type={"text"} placeholder={"Enter Ingredients"} />
            <RecipeModalTextArea type={"text"} rows="50" placeholder={"Enter Instructions"} />
            <RecipeModalButton onClick={props.closeModal}>Close</RecipeModalButton>
        </RecipeModalWrapper>
    )
}

export default RecipeModal