import React, { Component } from "react";
import { Jumbotron,Image,Col,Clearfix } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profileImage from "../../assets/img.png";

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: {}
        };
    }
    render() {
        return (
            <Jumbotron>
                <Image src={profileImage} width={200}/>
                    <h1>{this.state.user.name}</h1>
                <Col md={6}>
                <h2>Personal info</h2>
                    <h3>{this.state.user.email}</h3>
                    <p>{this.state.user.phone}</p>
                    {this.state.user.address ?
                        <p>{this.state.user.address.street + ", " + this.state.user.address.suite +
                            ", " + this.state.user.address.city}</p> :
                        <p>This is a SingleUser page.</p>}
                        <p>{this.state.user.website}</p>
                </Col>
                <Col md={6}>
                <h2>Professional info</h2>
                {this.state.user.company ? <p>{this.state.user.company.name}</p> :<p>This is a SingleUser page.</p>}
                {this.state.user.company ? <p>{this.state.user.company.catchPhrase}</p> :<p>This is a SingleUser page.</p>}
                </Col>
                <Clearfix />
                <Link to="/user-list">back to list</Link>
            </Jumbotron>
        );
    }
    componentDidMount(){
        this.getUser();
    }
    getUser(){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data)=> {
                this.setState({
                    user:data
                })
            });
    }
}
export default SingleUser;