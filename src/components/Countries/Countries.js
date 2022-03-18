import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {


    const [countries, setCountries] = useState([])
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h1>This is our all countries</h1>
            <div className="countriesStyle">
                {countries.map(country => <Country country={country} key={country.cca3}></Country>)}
            </div>
        </div >
    );
};

export default Countries;