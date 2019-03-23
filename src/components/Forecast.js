
import React, {Component} from 'react';
import weatherAPI from '../api/weather';
import CurrentForecast from './CurrentForecast';
import SevenDayForecast from './SevenDayForecast';


class Forecast extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: {},
            errorMessage: ''
        };
    }

    fetchWeather = (city) => {
        weatherAPI.get('/forecast.json?key=581187b3b0da45038b1130458192203&days=7&q=' + city )
            .then( response => {
                return this.setState({weather: response.data});
            })
            .catch( error => {
                if (error.response) {
                    return this.setState({errorMessage: error.response.data.message});
                }
            });
    }

    render(){
        const url = this.props.match.url; //provided Path from AppRouter (it can only be:'/forecast/current' or '/forecast/seven-day')
        return(
            <div className='forecast'>
                {
                    (url === '/forecast/current' &&
                        <CurrentForecast fetchWeather={this.fetchWeather}
                                         weather={this.state.weather}
                                         error={this.state.errorMessage}
                        />) ||
                    (url === '/forecast/seven-day' &&
                        <SevenDayForecast fetchWeather={this.fetchWeather}
                                          weather={this.state.weather}
                                          error={this.state.errorMessage}
                        />)
                }
            </div>
        );
    }
}

export default Forecast;