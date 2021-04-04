import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, }) => {

    return (
        <div className="card mb-3 animate__animated animate__fadeInUpBig" style={{ width: '18rem' }}>
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{publisher}</h6>

                {
                    // If alter_ego is different from characters renders <p> with the characters else do nothing
                    (alter_ego !== characters) && <p className="card-text">{characters}</p>
                }

                <p className="card-text">
                    <small>
                        {first_appearance}
                    </small>
                </p>

                <Link to={`/heroe/${id}`} className="btn btn-primary">See Hero</Link>
            </div>
        </div>
    );
};
