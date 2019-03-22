
import React, {Component} from 'react';
import weatherAPI from '../api/weather';

class Forecast extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            weatherList: [],
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

    fetchWeather = (city) => {
        //const weather = await weatherAPI.get('/weather?q=' + city + '&units=metric&APPID=4ddccda8b783c2af22eff5db4874f045');
        //this.setState({weather: weather.data}, ()=>{console.log(this.state.weather)});

        weatherAPI.get('/forecast.json?key=581187b3b0da45038b1130458192203&days=7&q=' + city )
            .then(function (response) {
                this.setState({weatherList: response.data.forecast.forecastday },()=>{
                    console.log(this.state.weatherList)});
            }.bind(this))
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    this.setState({errorMessage: error.response.data.message});
                }
            }.bind(this));
    }

    handleChange(e) {
        this.setState({city: e.target.value});
    }

    render(){

        let weatherResponse = this.state.weatherList.length===0;

        return(
            <div className='forecast'>
                <h1>7 day forecast</h1>
                <br/>
                <h3>
                    Enter your city here:
                    <form onSubmit={this.handleSubmit}>
                        <input className='city-input' type='text' value={this.state.city} onChange={this.handleChange} /><br/>
                        <button type="submit">Submit</button>
                    </form>
                </h3>
                {
                    !(weatherResponse) ?
                        this.state.weatherList.map(day => {
                            return(
                                <div key={day.date}>
                                    <h2>Date: {day.date }</h2>
                                    <h2><img src={day.day.condition.icon }  alt={day.day.condition.text}/></h2>
                                    <h2>{day.day.condition.text}</h2>
                                    <h2>Date: {day.date }</h2>
                                    <h2>Max: {day.day.maxtemp_c } &#8451;</h2>
                                    <h2>Min: {day.day.mintemp_c } &#8451;</h2>
                                    <h2>Average: {day.day.avgtemp_c } &#8451;</h2>
                                    <h2>Average humidity: {day.day.avghumidity}&#37;</h2>
                                    <br/><br/>
                                </div>
                            );
                        }) :
                        (<span style={{color: 'red'}}>{this.state.errorMessage}</span>)
                }

            </div>

        );
    }


}

export default Forecast;