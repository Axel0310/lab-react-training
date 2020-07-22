import React from 'react';
import profiles from '../data/berlin.json';
import '../facebook.css';

class Facebook extends React.Component {
  state = {
    selectedCountry: null,
  };

  selectCountry = (evt) => {
    this.setState({
      selectedCountry: evt.target.name,
    })
  }

  render() {
    const countriesSet = [...new Set(profiles.map((profil) => profil.country))]; 

    return (
      <React.Fragment>
        <div id="facebook-menu">
          {countriesSet.map(country => (
            <button name={country} onClick={this.selectCountry}>{country}</button>
          ))}
        </div>
        <div id="profils-grid">
          {profiles.map(({ firstName, lastName, country, img, isStudent }) => (
            <div className="profil-wrapper" style={{backgroundColor: country === this.state.selectedCountry ? "dodgerblue" : undefined}}>
              <img src={img} alt="Student" />
              <div className="profil-info-wrapper">
                <p>
                  <span>First Name: </span>
                  {firstName}
                </p>
                <p>
                  <span>Last Name: </span>
                  {lastName}
                </p>
                <p>
                  <span>Country: </span>
                  {country}
                </p>
                <p>
                  <span>Type: </span>
                  {isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Facebook;
