import React from "react";
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle)



const Button = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.textColor};
  border-radius: 50%;
  border: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); 
  &:hover {
    color: ${props => props.theme.secondaryLight};
  }
`

const AddRecipeButton = (props) => {
    return <Button icon="plus-circle" onClick={props.onClick}/>
}


export default AddRecipeButton