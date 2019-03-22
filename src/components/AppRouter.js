import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
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
                            <Route path='/' render={ ()=> <HomePage /> }  exact={true}/>
                            <Route path='/forecast' render={ ()=> <Forecast /> } />
                            <Route path='/about' render={ ()=> <About /> } />
                        </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

export default AppRouter;