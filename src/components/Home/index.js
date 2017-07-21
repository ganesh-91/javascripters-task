import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Jumbotron>
                <div>
                    <h1>Home </h1>
                    <p>This is a Home page.</p>

                    <Link to="/user-list">User List</Link>
                </div>
            </Jumbotron>
        );
    }
}
export default Home;