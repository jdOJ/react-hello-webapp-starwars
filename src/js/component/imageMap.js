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

export const getImageUrl = (name) => characterImages[name] || "https://via.placeholder.com/150";