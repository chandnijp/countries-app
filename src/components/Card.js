import React from 'react';

const Card = ({ name, capital, region, subregion, flag, population, numericCode }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img className="mw5 h4" alt="flag" src={flag} />
            <div>
                <h2>{name}</h2>
                <p><em>Capital: </em>{capital}</p>
                <p><em>Region: </em>{region}<em> ({subregion})</em></p>
                <p><em>Population: </em>{population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}<em> people</em></p>
            </div>
        </div>
    );
}

export default Card;