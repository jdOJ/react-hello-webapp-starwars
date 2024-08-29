import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../component/imageMap";
import { getDescription } from "../component/DescripcionMap";

const DetailView = () => {
    const { type, id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            setLoading(true);
            setError(null);
            try {
                let apiUrl;
                if (type === 'people') {
                    apiUrl = `https://www.swapi.tech/api/people/${id}`;
                } else if (type === 'vehicle') {
                    apiUrl = `https://www.swapi.tech/api/vehicles/${id}`;
                } else if (type === 'planet') {
                    apiUrl = `https://www.swapi.tech/api/planets/${id}`;
                } else {
                    throw new Error('Unknown type');
                }

                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItem(data.result.properties);
            } catch (error) {
                console.error(`Error fetching ${type} details:`, error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, [type, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!item) return <div>No data available</div>;

    const imageUrl = getImageUrl(item.name);
    const descriptionItem = getDescription(item.name);

    const renderAttributes = () => {
        // ... (el resto del código de renderAttributes permanece igual)
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    {imageUrl && <img src={imageUrl} className="img-fluid" alt={item.name} />}
                </div>
                <div className="col-md-8">
                    <h3 className="text-white">{item.name}</h3>
                    {descriptionItem && <p className="text-white">{descriptionItem}</p>}
                    <div className="row pt-3 detail-container">
                        {renderAttributes()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailView;