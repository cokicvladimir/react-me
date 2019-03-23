import React from 'react';

const CurrentForecast = (props) => {

    if (Object.entries(props.forecast).length === 0 && props.forecast.constructor === Object) {
        console.log("NO DATA");
        return (
            <div className='loading-bar'>NO DATA</div>
        );
    }

    return(
        <div className='current'>
            <h1>Current forecast</h1>
            <div>
                <h2><img src={props.forecast.current.condition.icon }  alt={props.forecast.current.condition.text}/></h2>
                <h2>{props.forecast.current.condition.text}</h2>
                <h2>Temperature: {props.forecast.current.temp_c } &#8451;</h2>
                <h2>Pressure: {props.forecast.current.pressure_mb}mb</h2>
                <h2>Humidity: {props.forecast.current.humidity}&#37;</h2>
                <h2>Feels like: {props.forecast.current.feelslike_c} &#8451;</h2>
                <br/>
                <h2>Location: {props.forecast.location.name}</h2>
                <h2>Country: {props.forecast.location.country}</h2>
            </div>
        </div>
    );

}

export default CurrentForecast;