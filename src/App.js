import './App.css';
import ProductShowPage from './components/ProductShowPage';
import ProductIndexPage from './components/ProductIndexPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import {Component} from 'react'
import SignInPage from './components/SignInPage';
import {User} from './requests';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      clocksCount: [1,2], // an array of something
      user: null
    }
  }

  componentDidMount(){
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      console.log(user)
      if(user?.id){
        
        this.setState({user: user})
      }
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container my-3">
          <BrowserRouter>
            <NavBar currentUser={this.state.user} />
            <Switch>
              <Route exact path='/sign_in'
                render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />}
                >
              </Route>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/products" component={ProductIndexPage}/>
              <Route exact path="/products/:id" component={ProductShowPage}/>
              {/* <Route exact path="/sign_in" component={SignInPage} onSignIn={this.getCurrentUser} /> */}
              
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;