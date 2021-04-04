import React from 'react';
import { Navbar } from "../components/ui/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { SearchScreen } from '../components/search/SearchScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/heroe/:heroeId" component={HeroeScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;