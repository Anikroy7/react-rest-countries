import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
const countriesStyle = {
  backgroundColor: 'lightBlue',
  margin: '20px',
  padding: '20px',
  border: '4px solid red',
  borderRadius: '20px'

}
function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}


const LoadCountries = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json()
        .then(data => setCountries(data)))

  }, [])

  return (
    <div>
      <h1>Here We Get All Countries In The World</h1>
      <h3>{countries.length}</h3>
      {
        countries.map(country => <Country
          name={country.name} population={country.population}
          capital={country.capital}
        ></Country>)
      }
    </div>
  )
}

const
  Country = (props) => {
    return (
      <div style={countriesStyle}>
        <h1>name: {props.name.common}</h1>
        <h3>population: {props.population}</h3>
        <h4>capital: {props.capital}</h4>
      </div>
    )
  }

export default App;
