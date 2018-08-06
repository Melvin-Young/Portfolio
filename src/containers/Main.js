import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/resume" component={Resume} />
            </Switch>
        );
    }
}
export default Main;