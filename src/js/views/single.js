import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const characterImages = {
  "Luke Skywalker": "https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/1.jpg",
  "C-3PO": "https://github.com/vieraboschkova/swapi-gallery/blob/main/static/assets/img/people/2.jpg?raw=true",
  "R2-D2": "https://github.com/vieraboschkova/swapi-gallery/blob/main/static/assets/img/people/3.jpg?raw=true",
  "Darth Vader": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/4.jpg",
  "Leia Organa": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/5.jpg",
  "Owen Lars": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/6.jpg",
  "Beru Whitesun lars": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/7.jpg",
  "R5-D4": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/8.jpg",
  "Biggs Darklighter": "https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/9.jpg",
  "Obi-Wan Kenobi": "https://github.com/vieraboschkova/swapi-gallery/blob/main/static/assets/img/people/10.jpg?raw=true",
  "Sand Crawler":"https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
  "T-16 skyhopper":"https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  "X-34 landspeeder":"https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
  "TIE/LN starfighter":"https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
  "Snowspeeder":"https://starwars-visualguide.com/assets/img/vehicles/14.jpg",
  "TIE bomber":"https://starwars-visualguide.com/assets/img/vehicles/16.jpg",
  "AT-AT":"https://starwars-visualguide.com/assets/img/vehicles/18.jpg",
  "AT-ST":"https://starwars-visualguide.com/assets/img/vehicles/19.jpg",
  "Storm IV Twin-Pod cloud car":"https://starwars-visualguide.com/assets/img/vehicles/20.jpg",
  "Sail barge":"https://starwars-visualguide.com/assets/img/vehicles/24.jpg",
  "Tatooine":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzCJiK-EUo9WaPahSHoi-XpZS1dbAr4PtHQ&s",
  "Alderaan":"https://starwars-visualguide.com/assets/img/planets/2.jpg",
  "Yavin IV":"https://starwars-visualguide.com/assets/img/planets/3.jpg",
  "Hoth": "https://starwars-visualguide.com/assets/img/planets/4.jpg",
  "Dagobah":"https://starwars-visualguide.com/assets/img/planets/5.jpg",
  "Bespin":"https://starwars-visualguide.com/assets/img/planets/6.jpg",
  "Endor":"https://starwars-visualguide.com/assets/img/planets/7.jpg",
  "Naboo":"https://starwars-visualguide.com/assets/img/planets/8.jpg",
  "Coruscant":"https://starwars-visualguide.com/assets/img/planets/9.jpg",
  "Kamino":"https://starwars-visualguide.com/assets/img/planets/10.jpg"
};

const getImageUrl = (name) => characterImages[name] || "https://via.placeholder.com/150";

const DetailView = () => {
  const { type, id } = useParams();
  const { store, actions } = useContext(Context);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;
        switch (type) {
          case 'characters':
          case 'people':
            data = await actions.getCharacters(id);
            break;
          case 'planets':
            data = await actions.getPlanets(id);
            break;
          case 'vehicles':
            data = await actions.getVehicles(id);
            break;
          default:
            throw new Error(`Unknown type: ${type}`);
        }
        if (!data) {
          throw new Error('No data returned from API');
        }
        setItem(data);
      } catch (err) {
        setError(`Error fetching ${type} details: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id, actions]);

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">Error: {error}</div>;
  if (!item) return <div className="container mt-5">No data found</div>;

  const renderProperties = () => {
    const { properties } = item;
    return Object.entries(properties).map(([key, value]) => (
      <p key={key}><strong>{key}:</strong> {value}</p>
    ));
  };

  const getItemType = () => {
    switch (type) {
      case 'characters':
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'vehicles':
        return 'vehicle';
      default:
        return type;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{item.properties.name}</h1>
      <div className="card">
        <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img 
              src={getImageUrl(item.properties.name)} 
              alt={item.properties.name} 
              className="img-fluid rounded-start" 
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: '500px', // Altura fija para todas las imágenes
                maxWidth: '100%' 
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {renderProperties()}
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary mt-3"
        onClick={() => actions.addToFavorites(item, getItemType())}
      >
        {store.favorites.some(fav => fav.uniqueId === `${item.uid}-${getItemType()}`)
          ? 'Remove from Favorites'
          : 'Add to Favorites'
        }
      </button>
      <button className="btn btn-secondary mt-3 ms-2" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default DetailView;