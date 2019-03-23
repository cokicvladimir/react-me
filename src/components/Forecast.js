import React, {Component} from 'react';
import weatherAPI from '../api/weather';
import CurrentForecast from './CurrentForecast';
import SevenDayForecast from './SevenDayForecast';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


class Forecast extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            forecast: {},
            errorMessage: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const city = this.state.city;
        this.fetchWeather(city);
    }

    handleChange(e) {
        this.setState({city: e.target.value});
    }

    fetchWeather = (city) => {
        weatherAPI.get('/forecast.json?key=581187b3b0da45038b1130458192203&days=7&q=' + city )
            .then( response => {
                this.setState({forecast: response.data});
            })
            .catch( error => {
                if (error.response) {
                    this.setState({errorMessage: error.response.data.message});
                }
            });
    }

    render(){

        return(
            <div className='forecast'>
                <h3>
                    Enter your city here:
                    <form onSubmit={this.handleSubmit}>
                        <input className='city-input' type='text' value={this.state.city} onChange={this.handleChange} /><br/>
                        <button type="submit">Submit</button>
                    </form>
                </h3>

                <br />
                <br />

                <Tabs>
                    <TabList>
                        <Tab>Current forecast</Tab>
                        <Tab>7 day forecast</Tab>
                    </TabList>

                    <TabPanel>
                        <CurrentForecast forecast={this.state.forecast} error={this.state.errorMessage}/>
                    </TabPanel>
                    <TabPanel>
                        <SevenDayForecast forecast={this.state.forecast} error={this.state.errorMessage}/>
                    </TabPanel>
                </Tabs>

            </div>
        );
    }
}

export default Forecast;