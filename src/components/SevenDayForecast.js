import React from 'react';

const SevenDayForecast = (props) => {

    if (Object.entries(props.forecast).length === 0 && props.forecast.constructor === Object) {
        console.log("NO DATA");
        return (
            <div className='loading-bar'>NO DATA</div>
        );
    }

    return(
        <div>
            {
                props.forecast.forecast.forecastday.map(day => {
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

export default SevenDayForecast;
