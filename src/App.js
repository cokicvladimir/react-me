import React, {Component} from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
