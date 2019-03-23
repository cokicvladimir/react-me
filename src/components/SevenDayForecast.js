import React, {Component} from 'react';

class Forecast extends Component{
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
                    !(weatherResponse) &&
                        this.props.weather.forecast.forecastday.map(day => {
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
                        })
                }
            </div>
        );
    }
}

export default Forecast;