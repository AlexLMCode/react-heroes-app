import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

    localStorage.setItem('lastPath', `${rest.location.pathname}${rest.location.search}`)

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? <Component {...props}/>
                    : <Redirect to="/login"/>
            )}
        />
    );

    
};
