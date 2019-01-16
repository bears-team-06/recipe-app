import React  from "react";
import About from "./routes/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeApp from "./routes/RecipeApp";
import styled from 'styled-components';


const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
`;

const NavBar = styled.ul`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.textColor};
    margin: 0;
    padding-top: 10px;
    padding-left: 25%;
    width: 100%;
    height: 50px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 24px;
 `;
const StyledLink = styled(Link)`
    color: ${props => props.theme.textColor};
    text-decoration: none;
    padding: 0 20px;

    a:hover {
        color: ${props => props.theme.secondary};
    }
`;
 

const App = () => {
    return (
        <Router>
            <AppWrapper>
                <NavBar>
                    <li>
                        <StyledLink to="/">Recipe App</StyledLink>
                    </li>
                    <li>
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
