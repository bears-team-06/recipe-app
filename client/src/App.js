import React from "react";
import About from "./routes/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeApp from "./routes/RecipeApp";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`;

const NavBar = styled.ul`
  padding: 0px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  margin: 0;
  padding-top: 10px;
  width: 100%;
  height: 50px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  .home {
    padding-right: 42%;
  }
  .about {
    padding-right: 2%;
  }
`;
const StyledLink = styled(Link)`
  color: ${props => props.theme.textColor};
  text-decoration: none;

  a:hover {
    color: ${props => props.theme.secondary};
  }
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <NavBar>
          <li className="home">
            <StyledLink to="/">Recipe App</StyledLink>
          </li>
          <li className="about">
            <StyledLink to="/about/">About</StyledLink>
          </li>
        </NavBar>

        <Route path="/" exact component={RecipeApp} />
        <Route path="/about/" component={About} />
      </AppWrapper>
    </Router>
  );
};

export default App;
