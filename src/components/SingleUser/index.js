import React, { Component } from "react";
import { Jumbotron, Image, Col, Clearfix } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profileImage from "../../assets/img.png";

import { connect } from "react-redux";
import userActions from '../../actions/userActions';

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    render() {
        console.log('userData', this.props.userData);
        return (
            <Jumbotron>
                <Image src={profileImage} width={200} />
                <h1>{this.props.userData.name}</h1>
                <Col md={6}>
                    <h2>Personal info</h2>
                    <h3>{this.props.userData.email}</h3>
                    <p>{this.props.userData.phone}</p>
                    {this.props.userData.address ?
                        <p>{this.props.userData.address.street + ", " + this.props.userData.address.suite +
                            ", " + this.props.userData.address.city}</p> :
                        <p>This is a SingleUser page.</p>}
                    <p>{this.props.userData.website}</p>
                </Col>
                <Col md={6}>
                    <h2>Professional info</h2>
                    {this.props.userData.company ? <p>{this.props.userData.company.name}</p> : <p>This is a SingleUser page.</p>}
                    {this.props.userData.company ? <p>{this.props.userData.company.catchPhrase}</p> : <p>This is a SingleUser page.</p>}
                </Col>
                <Clearfix />
                <Link to="/user-list">back to list</Link>
            </Jumbotron>
        );
    }
    componentDidMount() {
        this.getUser();
    }
    getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                    user: data
                });
                this.props.updateSingleUser(data);
            });
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSingleUser: (data) => {
            dispatch(userActions.updateSingleUser(data));
        }
    };
};

const mapStateToProps = (store) => {
    console.log('store', store);
    return {
        userData: store.singleUser
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);
// export default SingleUser;