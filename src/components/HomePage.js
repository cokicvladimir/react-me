import React, {Component} from 'react';
import weatherAPI from '../api/weather';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            weather: {},
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
                this.setState({weather: response.data});
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

        let weatherResponse = Object.entries(this.state.weather).length === 0 && this.state.weather.constructor === Object;

        return(
            <div className='home-page'>
                <h1>Current weather</h1>
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
                    (<div>
                        <h2><img src={this.state.weather.current.condition.icon }  alt={this.state.weather.current.condition.text}/></h2>
                        <h2>{this.state.weather.current.condition.text}</h2>
                        <h2>Temperature: {this.state.weather.current.temp_c } &#8451;</h2>
                        <h2>Pressure: {this.state.weather.current.pressure_mb}mb</h2>
                        <h2>Humidity: {this.state.weather.current.humidity}&#37;</h2>
                        <h2>Feels like: {this.state.weather.current.feelslike_c} &#8451;</h2>
                        <br/>
                        <h2>Location: {this.state.weather.location.name}</h2>
                        <h2>Country: {this.state.weather.location.country}</h2>
                     </div>) :
                    (<span style={{color: 'red'}}>{this.state.errorMessage}</span>)
                }

            </div>

        );
    }


}

export default HomePage;