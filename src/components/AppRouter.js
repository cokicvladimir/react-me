import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Forecast from "./Forecast";
import About from "./About";

class AppRouter extends Component{

    render(){
        return (
            <div className='wrapper'>
                <Header />
                <div className='content'>
                    <div className='row'>
                        <Switch>
                            <Route path='/' render={ ()=> <Home /> } exact={true}/>
                            <Route path='/forecast/(current|seven-day)' render={ (props)=> <Forecast {...props}/> } />
                            <Route path='/about' render={ ()=> <About /> } />
                        </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

export default AppRouter;