import React from "react";
import styled from 'styled-components'

const Button = styled.button`
  font-size: 22px;
  color: brown;
  background: orange;
  border: brown 1px solid;
  border-radius: 5px;
`

const AddRecipeButton = (props) => {
    return <Button onClick={props.onClick}>+</Button>
}


export default AddRecipeButton