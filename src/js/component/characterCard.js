import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import starWars from "../../img/icons8-la-guerra-de-las-galaxias-48.png";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "./imageMap.js";

const CharacterCard = ({ uid, name, properties, type, onFavoriteClick, isFavorite }) => {
  const navigate = useNavigate();
  const imageUrl = getImageUrl(properties.name);
  const getDetails = () => {
    switch (type) {
      case 'characters':
        return (
          <>
            <p className="card-text mb-1">Name: {properties.name}</p>
            <p className="card-text mb-1">Height: {properties.height}</p>
            <p className="card-text mb-1">Gender: {properties.gender}</p>
            <p className="card-text mb-1">Hair Color: {properties.hair_color}</p>
            <p className="card-text mb-2">Eye Color: {properties.eye_color}</p>
          </>
        );
      case 'planets':
        return (
          <>
            <p className="card-text mb-1">Name: {properties.name}</p>
            <p className="card-text mb-1">Climate: {properties.climate}</p>
            <p className="card-text mb-1">Rotation Period: {properties.rotation_period}</p>
            <p className="card-text mb-1">Terrain: {properties.terrain}</p>
            <p className="card-text mb-2">Population: {properties.population}</p>
          </>
        );
      case 'vehicles':
        return (
          <>
            <p className="card-text mb-1">Name: {properties.name}</p>
            <p className="card-text mb-1">Model: {properties.model}</p>
            <p className="card-text mb-1">Manufacturer: {properties.manufacturer}</p>
            <p className="card-text mb-2">Cost: {properties.cost_in_credits} credits</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card mb-4">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {getDetails()}
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/single/:type/:id">
            <button className="btn btn-outline-primary btn-sm">Learn more!</button>
          </Link>
          <button
            className={`btn btn-${isFavorite ? 'warning' : 'outline-warning'} btn-sm`}
            onClick={onFavoriteClick}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;