import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroeById } from '../../selectors/getHeroById';

export const HeroeScreen = ({ history }) => {
    // { match: { params: { heroeId } } }

    const params = useParams();

    const hero = useMemo(() => getHeroeById(params.heroeId), [params.heroeId]);
    // const hero = getHeroeById(params.heroeId)
    //console.log('HERO', hero);
    //console.log('HERO ID', hero.id);


    if (hero === undefined) {
        return <Redirect to='/' />;
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    };

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`../assets/heroes/${id}.jpg`} alt={superhero} className='img-thumbnail animate__animated animate__flipInX' />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter Ego:</b> {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First Apperance:</b> {first_appearance}
                    </li>
                    <li className='list-group-item'>
                        <b>Characters:</b> {characters}
                    </li>
                </ul>
                <button className='btn btn-outline-info' onClick={handleReturn}>Return</button>

            </div>
        </div>
    );
};
