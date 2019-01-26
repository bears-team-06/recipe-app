import React from "react";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle);

const Button = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.textColor};
  border-radius: 50%;
  border: none;
  box-shadow: ${props => props.theme.shadow};
  &:hover {
    color: ${props => props.theme.secondaryLight};
  }
`;

const AddRecipeButton = props => {
  return <Button icon="plus-circle" onClick={props.onClick} />;
};

export default AddRecipeButton;
