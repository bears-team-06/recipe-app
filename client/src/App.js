import React  from "react";
import About from "./routes/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeApp from "./routes/RecipeApp";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Recipe App</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={RecipeApp} />
                <Route path="/about/" component={About} />
            </div>
        </Router>
    );
};

export default App;
