import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/callback" component={ProfilePage} />
        </div>
    </Router>
);

class ProfilePage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello Logged in User</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

class LoginPage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <a href="https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=profile&response_type=code&client_id=770189468882-6333q2lrp5rbvajr91f6ebk1g9iqib9r.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callback">
                        Google Login
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
