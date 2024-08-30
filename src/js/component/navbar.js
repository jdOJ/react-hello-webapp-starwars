import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import starWars from "../../img/icons8-la-guerra-de-las-galaxias-48.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleToggleFavorite = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        actions.addToFavorites(item, item.type);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img
                            src={starWars}
                            alt="Star Wars Logo"
                            className="img-fluid"
                            style={{ width: '100px' }}
                        />
                    </span>
                </Link>
                <div className="ml-auto">
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" className="p-0" style={{ minWidth: '250px', maxHeight: '300px', overflowY: 'auto' }}>
                            {store.favorites.length === 0 ? (
                                <Dropdown.Item className="text-center text-muted py-2">
                                    (empty)
                                </Dropdown.Item>
                            ) : (
                                store.favorites.map((item, index) => (
                                    <Dropdown.Item 
                                        key={index} 
                                        className="d-flex justify-content-between align-items-center py-2 px-3 border-bottom"
                                    >
                                        <span className="text-truncate me-3" style={{ maxWidth: '180px' }}>
                                            {item.properties ? item.properties.name : item.name}
                                        </span>
                                        <button 
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={(e) => handleToggleFavorite(e, item)}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </Dropdown.Item>
                                ))
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};