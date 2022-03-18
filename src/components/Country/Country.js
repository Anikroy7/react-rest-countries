import React from 'react';
import './Country.css'
const Country = (props) => {
    const ourCountry = props.country;
    const { name, area, population, flags, capital } = ourCountry;
    return (
        <div className='main'>
            <img src={flags.png} alt="" />
            <h2>Name:{name.common} </h2>
            <h3>Capital: {capital}</h3>
            <h4>Area:{area} </h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;