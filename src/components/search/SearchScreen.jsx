import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <h3>Search Screen</h3>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name='searchText'
                            value={searchText}
                            placeholder="Find Your hero"
                            className="form-control"
                        />
                        <button type="submit" className="btn mt-1 btn-primary">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results:</h4>

                    {
                        (q === '') &&

                        <div className="alert alert-primary" role="alert">
                            Search a Hero
                            </div>

                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&

                        <div className="alert alert-danger" role="alert">
                            There is no a hero with {q}
                        </div>
                    }


                    {
                        heroesFiltered.map(hero => (
                            <HeroCard {...hero} key={hero.id} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};
