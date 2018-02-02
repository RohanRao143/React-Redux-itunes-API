import React from 'react';
import SearchItunes from './components/SearchItunes'
import { HashRouter,Route,browserHistory} from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'

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
            <HashRouter history={browserHistory}>
                <switch>
                    <NavBar isloggedin={this.state.isLoggedin}/>
                        <Route exact path={'/'} component={Welcome}/>
                    {this.state.isLoggedin?
                        <Route path={'/search'} component={SearchItunes}/>:
                        <Route path={'/login'} render={()=><Login loginUser={this.loginUser}/>} />
                    }

                </switch>
            </HashRouter>
        )
    }
}

export default App