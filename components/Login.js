import React from 'react';
import FacebookAuth from 'react-facebook-auth';

class Login extends React.Component{
    constructor(props){
        super(props);
    }


    MyFacebookButton = ({ onClick }) => (
        <button onClick={onClick}>
            Login with facebook
        </button>
    );
    authenticate = (response) => {
        console.log(response);
        if(response.accessToken){
            this.authenticateUser(response.name,response.email,response.accessToken);
        }
        // Api call to server so we can validate the token
    };

    authenticateUser(username,email,accessToken){
        this.props.loginUser(username,email,accessToken);
    }

    render(){
        return(
            <div>
                <h1>Facebook Auth</h1>
                <div style={{marginLeft:'45/>
            </div>
        )
    }
}

export default Login;