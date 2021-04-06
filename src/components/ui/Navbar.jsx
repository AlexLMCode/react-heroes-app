import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from "../../auth/AuthContext";
import { types } from '../../types/types';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory(); //We use history here because we cannot access to it on the props because is not in the router provider 

    const handleLogout = () => {
        console.log(user, dispatch);

        const action = {
            type: types.logout,
            payload: {
                ...user
            }
        };

        dispatch(action);

        history.replace('/login');

    };

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">

                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>

                    </div>

                    <div className="navbar-nav ml-auto ">
                        <span className="nav-item nav-link text-info">{user.name}</span>
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    );
};