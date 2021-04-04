import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row justify-content-center ">
            {
                heroes.map(hero => (
                    <div className="col-sm d-flex justify-content-center " key={hero.id}>
                        <HeroCard  {...hero} />
                    </div>
                ))
            }
        </div>
    );
};
