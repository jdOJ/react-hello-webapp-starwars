import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import CharacterCard from '../component/characterCard';

const CategoryCarousel = ({ title, items, id, addToFavorites, favorites }) => (
  <div className="mb-5">
    <h1 className="text-danger mb-4">{title}</h1>
    <div id={`carousel${id}`} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.uid}>
            <div className="d-flex justify-content-center">
              <CharacterCard 
                uid={item.uid}
                name={item.name}
                properties={item.properties}
                type={id.toLowerCase()}
                onFavoriteClick={() => addToFavorites(item, id.toLowerCase())}
                isFavorite={favorites.some(fav => fav.uniqueId === `${item.uid}-${id.toLowerCase()}`)}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#carousel${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

const StarWarsCategories = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharactersList();
    actions.getPlanetsList();
    actions.getVehiclesList();
    actions.getFavorites();
  }, []);

  return (
    <div className="container mt-4">
      <CategoryCarousel 
        title="Characters" 
        items={store.characters} 
        id="Characters" 
        addToFavorites={actions.addToFavorites}
        favorites={store.favorites}
      />
      <CategoryCarousel 
        title="Planets" 
        items={store.planets} 
        id="Planets" 
        addToFavorites={actions.addToFavorites}
        favorites={store.favorites}
      />
      <CategoryCarousel 
        title="Vehicles" 
        items={store.vehicles} 
        id="Vehicles" 
        addToFavorites={actions.addToFavorites}
        favorites={store.favorites}
      />
    </div>
  );
};

export default StarWarsCategories;