import React from 'react';
import SearchItunes from './components/SearchItunes'
import Login from './components/Login'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedin:false,
            username:'',
            email:'',
            accessToken:''
        };
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(name, email, accessToken){
        this.setState({
            username:name,
            email:email,
            accessToken:accessToken,
            isLoggedin:true
        })
    }
    render(){
        return(
            <div>
                {this.state.isLoggedin?
                    <SearchItunes/>:
                    <Login loginUser={this.loginUser}/>
                    }
            </div>
        )
    }
}

export default App