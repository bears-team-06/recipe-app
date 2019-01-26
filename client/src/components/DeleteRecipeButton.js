import React from "react";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const Button = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: white;
  border: none;
  &:hover {
    color: ${props => props.theme.secondaryLight};
  }
`;

const DeleteRecipeButton = props => {
  return <Button icon="trash" onClick={props.onClick} />;
};

export default DeleteRecipeButton;
