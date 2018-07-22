import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Navigation from '../~library/Navigation';

class Nav extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }
    
    render() {
        const { location } = this.props;
        
        return (
            <Navigation>
                <ul>
                    <li>
                        { location.pathname !== '/' ? <Link to="/">Home</Link> : <span>Home</span> }
                    </li>
                    <li>
                        { location.pathname !== '/stories' ? <Link to="/stories">Stories</Link> : <span>Stories</span> }
                    </li>
                    <li>
                        {location.pathname !== '/add-story' ? <Link to="/add-story">Add Story</Link> : <span>Add Story</span> }
                    </li>
                </ul>
            </Navigation>
        )
    }
}

const NavWithRouter = withRouter(Nav);

export default NavWithRouter;