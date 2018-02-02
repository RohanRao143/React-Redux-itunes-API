import React from 'react';
import FacebookAuth from 'react-facebook-auth';
import {Button,Grid,Row,Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'


class Login extends React.Component{
    constructor(props){
        super(props);
    }


    MyFacebookButton = ({ onClick }) => (
        <Button bsStyle='primary' onClick={onClick}>
            Login with facebook
        </Button>
    );
    authenticate = (response) => {
        console.log(response);
        if(response.accessToken){
            this.authenticateUser(response.name,response.email,response.accessToken);
            this.props.history.push('/search')
        }
        // Api call to server so we can validate the token
    };

    authenticateUser(username,email,accessToken){
        this.props.loginUser(username,email,accessToken);
    }

    render(){
        return(
            <div>
                <Grid>
                    <Row className="show-grid" style={{marginBottom:10,marginTop:75}}>
                        <Col xs={6} style={{marginLeft:400}}>
                            <h1>Login With Facebook</h1>
                        </Col>
                    </Row>
                    <Row >
                        <Col  xs={6} style={{marginLeft:500}}>
                            <FacebookAuth
                                appId="335863626926966"
                                callback={this.authenticate}
                                component={this.MyFacebookButton}
                            />
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default withRouter(Login);