import React from "react";
import styled from 'styled-components'

const Button = styled.button`
  font-size: 40px;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.secondary};
  border: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0px solid rgba(255, 255, 255, 0);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); 
  &:hover {
    background: ${props => props.theme.secondaryLight};
  }
`

const AddRecipeButton = (props) => {
    return <Button onClick={props.onClick}>+</Button>
}


export default AddRecipeButton