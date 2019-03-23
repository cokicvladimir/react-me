import React, {Component} from 'react';

class CurrentForecast extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const city = this.state.city;
        this.props.fetchWeather(city);
    }

    handleChange(e) {
        this.setState({city: e.target.value});
    }

    render(){
        //check if we have data to show (type: boolean)
        let weatherResponse = Object.entries(this.props.weather).length === 0 && this.props.weather.constructor === Object;

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
                    !(weatherResponse) &&
                    (<div>
                        <h2><img src={this.props.weather.current.condition.icon }  alt={this.props.weather.current.condition.text}/></h2>
                        <h2>{this.props.weather.current.condition.text}</h2>
                        <h2>Temperature: {this.props.weather.current.temp_c } &#8451;</h2>
                        <h2>Pressure: {this.props.weather.current.pressure_mb}mb</h2>
                        <h2>Humidity: {this.props.weather.current.humidity}&#37;</h2>
                        <h2>Feels like: {this.props.weather.current.feelslike_c} &#8451;</h2>
                        <br/>
                        <h2>Location: {this.props.weather.location.name}</h2>
                        <h2>Country: {this.props.weather.location.country}</h2>
                     </div>)
                }
            </div>
        );
    }
}

export default CurrentForecast;